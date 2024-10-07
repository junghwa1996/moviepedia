import { useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    inputRef.current.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input type='file' ref={inputRef} onChange={handleChange} />
      <button type='button' onClick={handleClearClick}>
        삭제
      </button>
    </div>
  );
}

export default FileInput;
