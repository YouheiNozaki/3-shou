import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/app/page";

type Props = {
  news: News;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.list}>
      {/* TODO:別の章で、リンクと正式な画像に差し替えます */}
      <div className={styles.link}>
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
      </div>
    </li>
  );
}
