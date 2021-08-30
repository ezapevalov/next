import { useRouter } from 'next/router'

function ProductViewPage() {
  const router = useRouter();
  
  console.log(router.query);
  
  return (
    <div>
      <h1>Product [{router.query.id}]</h1>
    </div>
  );
}

export default ProductViewPage;