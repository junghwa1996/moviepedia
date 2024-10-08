import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <FileInput
        name='imgFile'
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        type='text'
        name='title'
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type='number'
        name='rating'
        value={values.rating}
        onChange={handleChange}
      />
      <input
        type='text'
        name='content'
        value={values.content}
        onChange={handleInputChange}
      />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
