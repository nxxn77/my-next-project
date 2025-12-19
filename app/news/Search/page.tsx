import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    srarchParams: {
        q?: string;
    };
};

export default async function Page({ srarchParams }: Props) {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: srarchParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}