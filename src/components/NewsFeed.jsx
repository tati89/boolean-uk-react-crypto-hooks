import useSetNews from "../hooks/useSetNews";
import NewsCard from "./NewsCard";

export default function NewsFeed() {
  const [newsList] = useSetNews();

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
