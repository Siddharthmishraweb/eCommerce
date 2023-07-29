import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
//import products from '../products'
import Product from '../components/Product'
import ProductScreen from '../screens/ProductScreen';
import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
   // const [products, setProducts] = useState([]);

   // useEffect(() => {
   //    const fetchProduct = async () => {
   //       const { data } = await axios.get('/api/products');
   //       setProducts(data);
   //    }
   //    fetchProduct();
   // }, [])
   
   const { data: products , isLoading, error } = useGetProductsQuery();


   console.log("prod**** ",products);
   return(
      <div>
         { isLoading ? (
            <h2> error </h2>
         ) : error ? ( <div>{error?.data?.message || error ?.error}</div>) : (
            <div>
               <h1>Latest Products</h1>
               <Row>
                  {
                     products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                           {/* <h3>{product.name}</h3> */}
                           <Product product={product}/>
                        </Col>
                     ))
                  }
               </Row>            
            </div>
         )}

      </div>
   )
}
export default HomeScreen;