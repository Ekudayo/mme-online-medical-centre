import styles from "../article/article.module.css"
import { articlesData } from "../../utils/data"
import View from "../event/View"

const Article = () => {
  return (
    <div className={styles.articleContainer}>
      <h1>Check out our latest article</h1>
      <hr className={styles.horizontalLine} />
      <ul className={styles.articleLists}>
        {articlesData.map((article) => (
          <li key={article.id} className={styles.articleList}>
            <img src={article.image} alt="Article Description" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span>Read more</span>
          </li>
        ))}
      </ul>
      <View />
    </div>
  );
}

export default Article