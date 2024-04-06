import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Meta from '../components/Meta';
import { useGetProductDetailsQuery, useCreateReviewMutation } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import "./ProductScreen.css"

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review Submitted!");
      setRating(0);
      setComment("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(product?.image[0]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.image[0]);
    }
  }, [product]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {isLoading && !product ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <div>
          <Meta title={product.name}/>
          
          <Row>
          <div className="flex-container">
              <Col md={4} className="image-thumbnails overflow-auto" style={{width:"7rem"}}>
                {product.image.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={product.name}
                    fluid
                    className={`product-thumbnail ${
                      image === selectedImage ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(image)}
                    style={{ border: '1px solid lightgrey' }}
                  />
                ))}
              </Col>
              {/* <Col md={5} className="main-image" style={{width: "53%"}}> */}
              <Col className="main-image" >
                <Image src={selectedImage} alt={product.name} fluid style={{height:"22rem", width:"100%"}}/>
              </Col>
            </div>
          
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>{product.name}</ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ₹ {product.price}</ListGroup.Item>
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
                      <Col>
                        <strong>{product.price}</strong>{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col> Status </Col>
                      <Col>
                        <strong>
                          {" "}
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}{" "}
                        </strong>{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => {
                              setQty(Number(e.target.value));
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="review">
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a customer review</h2>
                  {loadingProductReview && <Loader />}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating" className="my-2">
                        <Form.Label> Rating </Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value=""> Select...</option>
                          <option value="1"> 1 - Poor </option>
                          <option value="2"> 2 - Fair </option>
                          <option value="3"> 3 - Good </option>
                          <option value="4"> 4 - Very Good </option>
                          <option value="5"> 5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment" className="my-2">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">Sign in</Link> to write review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default ProductScreen;
