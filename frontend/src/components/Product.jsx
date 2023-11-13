import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <div style={{height:'200px'}}>
          <Card.Img src={product.image} variant="top" style={{height:'100%', width:'100%', objectFit:'cover'}}/>
        </div>
        
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">₹ {product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;
