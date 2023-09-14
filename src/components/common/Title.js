// import '../../../styles/components/common/Title.module.css';

export default function Title({ text, font_size }) {
  return (
    <div
      style={{
        fontSize: `${font_size}`,
        fontWeight: 'bold',
        padding: '14px 5px',
      }}
    >
      {text}
    </div>
  );
}
