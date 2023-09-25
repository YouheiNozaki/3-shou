import type { News } from "@/app/page";
import NewsListItem from "../NewsListItem";

type Props = {
  articles?: News[];
};

export default function NewsList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <NewsListItem key={article.id} news={article} />
      ))}
    </ul>
  );
}
