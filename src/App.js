import { useState } from "react";
import ReviewList from "./components/ReviewList";
import mockItems from "./mock.json";

/** mock.json
 * id : 고유 id
 * title : 제목
 * imgUrl : 영화 이미지
 * rating : 평점
 * content : 영화 내용
 * createdAt : 출시 연도
 * updatedAt : 업데이트 연도
 */

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>인기순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
