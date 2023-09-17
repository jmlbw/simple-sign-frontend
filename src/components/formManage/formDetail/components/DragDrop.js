import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/DragDrop.module.css';

const DragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const fileId = useRef(0);
  const dragRef = useRef(null);

  const handleFilterFile = useCallback(
    (id) => {
      setFiles(files.filter((file) => file.id !== id));
    },
    [files]
  );

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;

    const allowedExtensions = ['html'];
    const isValidFile = Array.from(droppedFiles).every((file) => {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      console.log('extension:', fileExtension);
      return allowedExtensions.includes(fileExtension);
    });

    if (!isValidFile) {
      alert('HTML 파일만 허용됩니다.');
      setIsDragging(false);
      return;
    }

    onChangeFiles(e);
    setIsDragging(false);
  };

  const inputFileUpload = (e) => {
    console.log('inputfileupload');
    onChangeFiles(e);
  };

  const initDragEvents = () => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  };

  const resetDragEvents = () => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  };

  const onChangeFiles = (e) => {
    let selectFiles = [];
    let tempFiles = files;

    if (e.type === 'drop') {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }
    console.log('file:', selectFiles);
    for (const file of selectFiles) {
      tempFiles = [
        // ...tempFiles,
        {
          id: fileId.current++,
          object: file,
        },
      ];
    }

    setFiles(tempFiles);
  };

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, []);

  const getFileContent = () => {
    if (files.length > 0) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log('File Content:', fileContent);
      };

      reader.readAsText(files[0].object);
    }
  };

  return (
    <div className={styled.dragDropContainer}>
      <div className={styled.fileInputArea}>
        <input
          type="file"
          id="fileUpload"
          style={{ display: 'none' }}
          multiple={true}
          accept=".html"
          onChange={inputFileUpload}
        />

        <label
          className={
            isDragging ? styled.dragDropFileDragging : styled.dragDropFile
          }
          htmlFor="fileUpload"
          ref={dragRef}
        >
          <div>파일 첨부</div>
        </label>
        <button>편집</button>
      </div>

      <div className={styled.fileListContainer}>
        {files.length > 0 &&
          files.map((file) => {
            const {
              id,
              object: { name },
            } = file;

            return (
              <div key={id}>
                <div>{name}</div>
                <div
                  className={styled.fileItemDelBtn}
                  onClick={() => handleFilterFile(id)}
                >
                  X
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DragDrop;
