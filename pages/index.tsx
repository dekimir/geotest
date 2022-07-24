import type { NextApiRequest, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NextRequest } from 'next/server'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const start = process.hrtime.bigint()
  // TODO: pick this URL dynamically, based on geolocation.
  const response = await fetch('https://yyz-dekimir.chiselstrike.io/main/hello')
  const end = process.hrtime.bigint()
  return {
    props: { 
      local: ctx.req?.socket.localAddress, 
      remote: ctx.req?.socket.remoteAddress,
      query: ctx.query,
      status: response.status,
      resp: await response.text() ?? '',
      duration: ((end - start) / BigInt(1000000)).toString() + 'ms',
    },
  }
}

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global chiseld Hello World</title>
        <meta name="description" content="Pick a chiseld close by and print some stats" />
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
