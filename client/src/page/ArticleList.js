import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Bản tin thời sự sáng nay", description: "Tóm tắt nội dung tin tức ngày hôm nay." },
  { id: 2, title: "Kinh tế thế giới", description: "Những biến động mới nhất về kinh tế toàn cầu." },
  { id: 3, title: "Thể thao tối qua", description: "Cập nhật kết quả bóng đá và các môn thể thao khác." },
];

const ArticleList = () => {
  return (
    <section className='main container section'>
      <h2>Danh sách bài viết</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
