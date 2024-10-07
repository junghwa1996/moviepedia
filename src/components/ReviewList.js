import Rating from "./Rating";
import "./ReviewList.css";

/**
 * 주어진 날짜를 'YYYY. M. D' 형식으로 변환하는 함수
 * @param {string|number|Date} value - 변환할 날짜 (Date 객체, 타임스탬프 또는 날짜 문자열)
 * @returns {string} - 포맷된 날짜 문자열
 */
const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

/**
 * ReviewListItem 컴포넌트는 리뷰 항목 하나를 표시합니다.
 * @example
 * <ReviewListItem item={item} />
 */
const ReviewListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
};

/**
 * ReviewList 컴포넌트는 여러 리뷰 항목을 표시합니다.
 * @example
 * <ReviewList items={items} />
 */

const ReviewList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
