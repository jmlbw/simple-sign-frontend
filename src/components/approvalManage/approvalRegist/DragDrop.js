import React, { useState, useEffect, useRef } from 'react';
import styled from '../../../styles/components/formManage/formDetail/components/DragDrop.module.css';
import { AiOutlineFileAdd } from 'react-icons/ai';

const DragDrop = ({ id, data, dataHandler }) => {
  const fileId = useRef(0);
  const dragRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);

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
    const newFiles = Array.from(droppedFiles).map((file) => ({
      id: fileId.current++,
      object: file,
    }));

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);

    const fileNames = updatedFiles.map((file) => file.object.name);
    setFileNames(fileNames);

    getFileContent();
    setIsDragging(false);
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

  const inputFileUpload = (e) => {
    const selectFiles = e.target.files;
    const newFiles = Array.from(selectFiles).map((file) => ({
      id: fileId.current++,
      object: file,
    }));

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);

    const fileNames = updatedFiles.map((file) => file.object.name);
    setFileNames(fileNames);

    getFileContent();
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
        dataHandler(id, fileContent);
      };
      reader.readAsText(files[0].object);
    }
  };

  useEffect(() => {
    getFileContent();
  }, [files]);

  return (
    <div>
      <input
        type="file"
        style={{ display: 'none' }}
        multiple={true}
        onChange={inputFileUpload}
      />

      <label
        className={
          isDragging ? styled.dragDropFileDragging : styled.dragDropFile
        }
        ref={dragRef}
      >
        <div>
          <AiOutlineFileAdd />
        </div>
      </label>
      {fileNames.length > 0 && (
        <div>
          {fileNames.map((file, index) => (
            <div key={index}>{file}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragDrop;
