import { createClient } from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
    MicroCMSContentId,
} from 'microcms-js-sdk';   

export type member = {
    name: string;
    position: string;
    plofile: string;
    Image: string;
} & MicroCMSContentId;

export type Category = {
    name: string;
 } & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category?: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if(!process.env.MICROCMS_API_KEY){
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listDate = await client
    .getList<member>({
        endpoint: "members",
        queries,
    });
    return listDate;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listDate = await client
    .getList<News>({
        endpoint: "news",
        queries,
    });
    return listDate;
};