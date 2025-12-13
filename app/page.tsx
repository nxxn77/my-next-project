import Styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList  from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  })
  
  return (
    <>
      <section className={Styles.top}>
        <div>
          <h1 className="title">テクノロジーで世界を変える</h1>
          <p className="description">私たちは市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image
          className={Styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={Styles.news}>
        <h2 className={Styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={Styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}