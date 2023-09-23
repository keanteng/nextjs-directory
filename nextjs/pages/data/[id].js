// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticPaths = async() => {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);
  
    // map data to an array of path objects with params (id)
    const paths = data.map(item => {
      return {
        params: { id: item.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);
    const data1  = data[id];
  
    return {
      props: { data_item : data1 }
    }
  }
  
  const Details = ({ data_item }) => {
    return (
      <div class="row">

        <h5><b>Item: </b>{data_item.id}</h5>
        <h1>{ data_item.dat_item }</h1>
        <div class="column">
          <p><b>Category/Metric: </b> { data_item.cat}</p>
          <p><b>Methodology/ Standard/ Classification/ Taxonomy/ Reference:</b></p>
          <p>{ data_item.class }</p>
          <p><b>Unit: </b>{ data_item.unit }</p>
        </div>

        <div class="column">
          <p><b>Data Source Provider: </b>{ data_item.dat_provider }</p>
          <p><b>Data Source: </b>{ data_item.dat_source }</p>
          <a href="url"><b>Link: </b>{ data_item.link }</a>
          <p><b>Accessibility: </b>{ data_item.access }</p>
          <p><b>Frequency: </b>{ data_item.freq }</p>
          <p><b>Time Series: </b>{ data_item.time_series }</p>
          <p><b>Observations On Data Availability/Gaps: </b></p>
          <p>{ data_item.remarks }</p>
        </div>
      </div>
    );
  }
  
  export default Details;