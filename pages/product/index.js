import fs from 'fs/promises';
import path from 'path';

function ProductsPage(props) {
  const { products } = props;
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);
  
  return {
    props: {
      products: data.products
    }
    // revalidate: 10 (seconds)
    // notFound: true/false
    // redirect: {destination: '/'}
  }
}

export default ProductsPage;