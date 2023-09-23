// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

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
      <div>
        <h1>{ data_item.id }</h1>
        <p>{ data_item.cat }</p>
        <p>{ data_item.class }</p>
        <p>{ data_item.unit }</p>
      </div>
    );
  }
  
  export default Details;