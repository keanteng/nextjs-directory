import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'


// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: { data_item: data }
  }
}

const Data = ({ data_item }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>Climate Data Catalogue</h1>
      {data_item.map(item => (
        (<Link href={'/data/' + item.id} key={item.id} className={styles.single}>

          <h3>{ item.dat_item }</h3>
          <p>{ item.class }</p>

        </Link>)
      ))}
    </div>
  );
}
 
export default Data;