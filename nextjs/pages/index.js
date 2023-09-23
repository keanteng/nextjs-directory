import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Climate Data Catalogue</h1>
      <p className={styles.text}>
Welcome to our Climate Data Catalogue, your gateway to a wealth of information on climate patterns, trends, and environmental data. In an era where climate change has become a 
critical global concern, access to accurate and comprehensive climate data is more crucial than ever. Our catalogue serves as a comprehensive repository, offering a diverse array 
of datasets, reports, and analyses from trusted sources worldwide. Whether you're a researcher, policymaker, educator, or simply curious about the state of our planet, this catalogue 
provides the tools you need to explore, understand, and address the complex challenges posed by our changing climate. Dive in and discover the knowledge needed to make informed decisions
 and take meaningful action in the face of climate uncertainty.
 </p>
      <p className={styles.text}>Explore the data items curated for the assessment of climate-related risks and opportunities in the financial sector.</p>
      <Link href="/ninjas/" className={styles.btn}>
        Explore Data Items
      </Link>
    </div>
  </>;
}
