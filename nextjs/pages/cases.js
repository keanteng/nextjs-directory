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

        <div class="column2">
            <Link href="/data/" className={styles1.single}>
            <p>Climate-related disclosures</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Exposure Quantification</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Financial Stability Monitoring</p>
            </Link>
        </div>
        <div class="column2">
            <Link href="/data/" className={styles1.single}>
            <p>Investment and Lending Decsions</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Macroeconomic Modelling</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Product Development</p>
            </Link>
        </div>
        <div class="column2">
            <Link href="/data/" className={styles1.single}>
            <p>Scenario Analysis</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>Stress Testing</p>
            </Link>
            <Link href="/data/" className={styles1.single}>
            <p>CCPT Implementation</p>
            </Link>
        </div>

    </div>
  </>;
}
