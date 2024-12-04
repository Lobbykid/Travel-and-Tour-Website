import React from "react";
import { useParams, Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Bản tin thời sự sáng nay", content: "Chi tiết nội dung bản tin thời sự sáng nay..." },
  { id: 2, title: "Kinh tế thế giới", content: "Phân tích sâu về những thay đổi kinh tế toàn cầu..." },
  { id: 3, title: "Thể thao tối qua", content: "Diễn biến các trận đấu bóng đá và sự kiện thể thao khác..." },
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Bài viết không tồn tại.</p>;
  }

  return (
    <section className='main container section'>
      <Link to="/article">← Quay lại</Link>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </section>
  );
};

export default Article;
