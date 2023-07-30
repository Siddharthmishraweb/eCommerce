import { useParams,Link, useNavigate } from 'react-router-dom'
// import products from '../products';
import { Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { addToCart } from '../slices/cartSlice'

const ProductScreen = () => {
   // const [product, setProduct] = useState([]);
   // const {id: productId } = useParams();

   // useEffect(() => {
   //    const fetchProduct = async () => {
   //       const { data } = await axios.get(`/api/products/${productId}`);
   //       setProduct(data);
   //    }
   //    fetchProduct();
   // }, [])
   const {id: productId } = useParams();
   const { data: product , isLoading, error } = useGetProductDetailsQuery(productId);
   const [ qty, setQty ] = useState(1);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const addToCartHandler = () => {
     dispatch(addToCart({ ...product, qty }));
     navigate('/cart')
   }

   return(
      <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>

        { isLoading ? (
            <Loader/>
         ) : error ? ( <Message variant='danger'>{error?.data?.message || error ?.error}</Message>) : (
   <div>
   <Row>
            <Col md={5}>
               <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={4}>
               <ListGroup variant='flush'>
                  <ListGroup.Item>
                     {product.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                     <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Price: ₹ {product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Description : {product.description}
                  </ListGroup.Item>
               </ListGroup>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup>
                     <ListGroup.Item>
                        <Row>
                           <Col> Price : ₹</Col>
                           <Col><strong>{product.price}</strong> </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Row>
                           <Col> Status </Col>
                           <Col><strong> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </strong> </Col>
                        </Row>
                     </ListGroup.Item>
                     {product.countInStock > 0 && (
                        <ListGroup.Item>
                           <Row>
                              <Col>Qty</Col>
                              <Col>
                                <Form.Control
                                  as='select'
                                  value={qty}
                                  onChange = { ((e) => {setQty(Number(e.target.value))} )}
                                >
                                 {[...Array(product.countInStock).keys()].map((x) => (
                                    <option key = {x+1} value={x+1}>
                                       {x+1}
                                    </option>
                                 )) }
                                </Form.Control>
                              </Col>
                           </Row>
                        </ListGroup.Item>
                     )}                     
                     <ListGroup.Item>
                        <Button 
                           className='btn btn-block'
                           type='button'
                           disabled = { product.countInStock === 0 }
                           onClick={addToCartHandler}
                        >
                        Add To Cart
                        </Button>
                     </ListGroup.Item>                 
                  </ListGroup>
               </Card>
            </Col>   
         </Row>
   </div>
         )}
      </>
   );
}
export default ProductScreen;