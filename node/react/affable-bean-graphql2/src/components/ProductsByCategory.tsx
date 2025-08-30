import { useParams } from 'react-router-dom'
import { useProductsByCategory } from '../apollo/ProductByCategoryName';

export default function ProductsByCategory() {
    const {name} = useParams();
    const {products, loading, error} = useProductsByCategory(name!);

    console.log(products);
  return (
    <>
    <div className='width-full'>
        {
            loading && <p>Loading...</p>
        }
        {
            error && <p>Error: {error.message}</p>
        }
        {
            products && products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}
