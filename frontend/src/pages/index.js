import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitsy App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout />
    </>
  );
}
