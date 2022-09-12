import Head from "next/head";
import styles from "@styles/Home.module.css"
import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@libs/getLatestRepos";
import userData from "@constants/data";
import React from "react";

export default function Home({ repositories }){
    return (
        <ContainerBlock title={"Vincent Kioko - Developer, Creator"} description={"This is a template built as a practise of my skills."}>
            <Hero />
            <FavouriteProjects />
            <LatestCode repositories={repositories} />
        </ContainerBlock>
    )
}

export const getServerSideProps = async () => {
    console.log(process.env.GITHUB_AUTH_TOKEN)
    let token = process.env.GITHUB_AUTH_TOKEN

    const repositories = await getLatestRepos(userData, token)

    return {
        props: {
            repositories,
        },
    };
};