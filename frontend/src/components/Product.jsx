// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Rating from "../components/Rating";

// const Product = ({ product }) => {
//   console.error("product    ", product);
//   return (
//     <Card className="my-3 p-3 rounded">
//       <Link to={`/product/${product._id}`}>
//         <div style={{height:'200px'}}>
//           <Card.Img src={product.image} variant="top" style={{height:'100%', width:'100%', objectFit:'cover'}}/>
//         </div>
        
//         <Card.Body>
//           <Link to={`/product/${product._id}`}>
//             <Card.Title as="div" className="product-title">
//               <strong>{product.name}</strong>
//             </Card.Title>
//           </Link>
//           <Card.Text as="div">
//             <Rating
//               value={product.rating}
//               text={`${product.numReviews} reviews`}
//             />
//           </Card.Text>
//           <Card.Text as="h3">₹ {product.price}</Card.Text>
//         </Card.Body>
//       </Link>
//     </Card>
//   );
// };

// export default Product;
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  console.error("product    ", product);

  const renderCarouselItems = () => {
    return product?.image?.slice(0, 5).map((image, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image}
          alt={`Product ${index}`}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    ));
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Carousel interval={1000} pause="hover">
          {renderCarouselItems()}
        </Carousel>
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
