import type { NextApiRequest, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NextRequest } from 'next/server'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { 
      local: ctx.req?.socket.localAddress, 
      remote: ctx.req?.socket.remoteAddress,
      query: ctx.query,
    },
  }
}

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Find server&apos;s IP and geo</title>
        <meta name="description" content="A demo app to discover the location of the NextJS frontend server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.code}>
          {JSON.stringify(props)}
        </p>
      </main>
    </div>
  )
}

export default Home
