import type { NextApiRequest, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NextRequest } from 'next/server'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const start = process.hrtime.bigint()
  const geo = JSON.parse(ctx.query['geo'] as string)
  const chiseloc = ['Belgrade', 'Helsinki'].includes(geo.city) ? 'abc' : 'yyz'
  const endpoint = `https://${chiseloc}-dekimir.chiselstrike.io/main/hello`
  const response = await fetch(endpoint)
  const end = process.hrtime.bigint()
  return {
    props: { 
      local: ctx.req?.socket.localAddress, 
      remote: ctx.req?.socket.remoteAddress,
      geo,
      endpoint,
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

      <main className={styles.code}>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
    </div>
  )
}

export default Home
