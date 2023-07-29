import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
//import products from '../products'
import Product from '../components/Product'
import ProductScreen from '../screens/ProductScreen';
import axios from 'axios';

const HomeScreen = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProduct = async () => {
         const { data } = await axios.get('/api/products');
         setProducts(data);
      }
      fetchProduct();
   }, [])
 
   console.log("prod**** ",products);
   return(
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
   )
}
export default HomeScreen;