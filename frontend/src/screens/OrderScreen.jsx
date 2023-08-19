import { Link, useParams} from 'react-router-dom';
import {
   Row, Col, ListGroup, Image, Form, Button, Card
 } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';

const OrderScreen = () => {
   const { id: orderId } = useParams();
   const {
      data: order,
      refetch,
      isLoading,
      error
   } = useGetOrderDetailsQuery(orderId);
   

  return isLoading ? <Loader /> : error ? <Message variant="danger" />
  :(
   <>
     <h3>Order {order._id}</h3>
     <Row>
      <Col md={8}>
         <ListGroup variant='flush'>
            <ListGroup.Item>
               <h4>Shipping</h4>
               <p><strong>Name: </strong>{order.user.name}</p>
               <p><strong>Email: </strong>{order.user.email}</p>
               <p>
                  <strong>Address: </strong>
                  { order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                  { order.shippingAddress.postalCode }, { order.shippingAddress.country}
               </p>
               { order.isDelivered ? (
                  <Message variant='success'>
                     Delivered on {order.deliveredAt}
                  </Message>
               ) : (
                  <Message variant='danger'>
                    Not Delivered
                  </Message>
               ) }
            </ListGroup.Item>
            <ListGroup.Item>
               <h4>Payment Method</h4>
               <p><strong>Method: </strong>{order.paymentMethod}</p>

               { order.isPaid ? (
                  <Message variant='success'>
                     Paid on {order.paidAt}
                  </Message>
               ) : (
                  <Message variant='danger'>
                    Not Paid
                  </Message>
               ) }

            </ListGroup.Item>
            <ListGroup.Item>
               <h4>Order Items</h4>
               {
                  order?.orderItems?.map( (item, index)=> (
                     <ListGroup.Item key={index}>
                        <Row>
                           <Col md={1}>
                              <Image src={item.image} alt={item.name} fluid rounded>

                              </Image>
                           </Col>
                           <Col>
                             <Link to={`/product/${item.product}`}> {item.name}</Link>
                           </Col>
                           <Col md={4}>
                              {item.qty} * ₹{item.price} = ₹{item.qty * item.price}
                           </Col>
                        </Row>
                     </ListGroup.Item>
                  ))
               }
            </ListGroup.Item>


         </ListGroup>
      </Col>
      <Col md={4}>
         <Card>
            <ListGroup variant='flush'>
               <ListGroup.Item>
                  <h4>Order Summary</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                  <Row>
                     <Col>Items </Col>
                     <Col>₹{order.itemsPrice}</Col>
                  </Row>
                  <Row>
                     <Col>Shipping </Col>
                     <Col>₹{order.shippingPrice}</Col>
                  </Row>
                  <Row>
                     <Col>Tax </Col>
                     <Col>₹{order.taxPrice}</Col>
                  </Row>
                  <Row>
                     <Col>Total </Col>
                     <Col>₹{order.totalPrice}</Col>
                  </Row>
               </ListGroup.Item>
               {/* Pay Order Placeholder */}
               {/* Mark as Delivered Placeholder */}
            </ListGroup>
         </Card>
      </Col>
     </Row>
   </>
  );
}

export default OrderScreen;