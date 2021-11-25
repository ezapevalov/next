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

// export async function getStaticProps(context) {
//   const { params } = context;
//   const productID = params.id;
//
//
//   return {
//     props: {
//       productID: productID
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: 1 } },
//       { params: { id: 2 } },
//       { params: { id: 3 } }
//     ],
//     fallback: true
//   }
// }

export default ProductViewPage;