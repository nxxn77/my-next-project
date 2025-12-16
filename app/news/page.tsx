import { getNewsList } from "@/app/_libs/microcms";
import NewsLIst from "@/app/_components/NewsList";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <NewsLIst news={news} />;
}
