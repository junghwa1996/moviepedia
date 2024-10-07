import { useState } from "react";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <form>
      <input type='text' value={title} onChange={handleTitleChange} />
      <input type='number' value={rating} onChange={handleRatingChange} />
      <input type='text' value={content} onChange={handleContentChange} />
    </form>
  );
}

export default ReviewForm;
