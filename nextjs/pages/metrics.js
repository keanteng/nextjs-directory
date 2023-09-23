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
            <Link href="/data/" className={styles1.single}>
            <p>Alignment</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Combined Metrics</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Footprint</p>
            </Link>
        </div>
        <div class="column3">
            <Link href="/data/" className={styles1.single}>
            <p>Mobilisation</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Physical Vulnerability</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Transition Sensitivity</p>
            </Link>
        </div>

    </div>
  </>;
}
