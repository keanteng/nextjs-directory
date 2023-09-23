import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles1 from '../styles/Ninjas.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Climate Data Catalogue</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div class="row">
        <h1 className={styles.title}>Start Exploring</h1>

        <div class="column3">
            <Link href="/cases/" className={styles1.single}>
            <p>By Use Cases</p>
            </Link>
        </div>
        <div class="column3">
            <Link href="/metrics/" className={styles1.single}>
            <p>By Metrics</p>
            </Link>
        </div>

    </div>
  </>;
}
