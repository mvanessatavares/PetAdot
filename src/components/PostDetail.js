import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

import ButtonLink from "./PostDetail.module.css"

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <div className={styles.post_detail2}>
      <Link to={`/posts/${post.id}`} className="btn.btn">
        Detalhes
      </Link>
      </div>
      <div className={styles.post_detail3}>
      <Link Link to="/formadocao" className="btn.btn-dark">
      Adote
      </Link>

      </div>
    </div>
  );
};

export default PostDetail;
