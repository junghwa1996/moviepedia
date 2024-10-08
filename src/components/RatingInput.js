import { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

function RatingInput({ name, value, onChange }) {
  // RatingInput 안에서 관리할 상태 value는 부모로부터 전달받은 값
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className='RatingInput'
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
