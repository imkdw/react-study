import Categories from "./Categories";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const category = useParams().category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
