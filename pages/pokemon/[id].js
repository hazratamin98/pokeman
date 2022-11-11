import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const signalImage = ({ data }) => {
  console.log(data, "show");

  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="title" content={data.name} />
        <meta name="description" content={data.name} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.name} />
        <meta property="og:image" content={data.sprites.front_default} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={data.name} />
        <meta property="twitter:description" content={data.name} />
        <meta property="twitter:image" content={data.sprites.front_default} />
      </Head>
      <Image src={data.sprites.front_default} width={250} height={250} />
      <div className={styles.text}>{data.name}</div>
    </div>
  );
};

export default signalImage;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return { props: { data } };
}
