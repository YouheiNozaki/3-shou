import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/app/page";
import Link from "next/link";

type Props = {
  news: News;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.list}>
      {/* 省略 */}
      <Link href={`/news/${news.id}`} className={styles.link}>
        <Image
          className={styles.image}
          src="/no-image.png"
          alt="No Image"
          width={1200}
          height={630}
        />
        <dl className={styles.content}>
          <dt className={styles.title}>{news.title}</dt>
          <dd className={styles.meta}>
            {!news.category ? null : (
              <span className={styles.tag}>{news.category.name}</span>
            )}
            <span className={styles.date}>
              <Image src="/clock.svg" alt="" width={16} height={16} priority />
              {news.publishedAt}
            </span>
          </dd>
        </dl>
      </Link>
    </li>
  );
}
