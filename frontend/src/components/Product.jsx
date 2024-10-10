// import { Card, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Rating from "../components/Rating";

// const Product = ({ product }) => {
//   console.log("product:: ", product);
//   const renderCarouselItems = () => {
//     return product?.image?.slice(0, 5).map((image, index) => (
//       <Carousel.Item key={index}>
//         <img
//           className="d-block w-100"
//           src={image}
//           alt={`Product ${index}`}
//           style={{ height: '200px', objectFit: 'cover' }}
//         />
//       </Carousel.Item>
//     ));
//   };

//   return (
//     <Card className="my-3 p-3 rounded">
//       <Link to={`/product/${product._id}`}>
//         <Carousel interval={1000} pause="hover">
//           {renderCarouselItems()}
//         </Carousel>
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




// import { Card, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Rating from "../components/Rating";
// import './Product.css'; // for custom styles

// const Product = ({ product }) => {
//   const renderCarouselItems = () => {
//     return product?.image?.slice(0, 5).map((image, index) => (
//       <Carousel.Item key={index}>
//         <img
//           className="d-block w-100 product-image"
//           src={image}
//           alt={`Product ${index}`}
//         />
//       </Carousel.Item>
//     ));
//   };

//   return (
//     <Card className="my-2 p-2 product-card">
//       <Link to={`/product/${product._id}`}>
//         <Carousel interval={2000} pause="hover" indicators={false} className="image-carousel">
//           {renderCarouselItems()}
//         </Carousel>
//       </Link>
//       <Card.Body className="text-center p-2">
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as="h6" className="product-title">
//             {product.name}
//           </Card.Title>
//         </Link>
//         <Card.Text as="div" className="my-1">
//           <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//         </Card.Text>
//         <Card.Text as="h5" className="product-price">
//           ₹ {product.price}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Product;





















// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import './Product.css'; // Custom styles for better layout



// const Product = ({ product }) => {
//   // product = duplicateArr(product, 2)
//   return (
//     <Card className="my-2 p-1 product-card">
//       <Link to={`/product/${product._id}`}>
//         <div className="product-image-container">
//           <img
//             src={product?.image[0]}
//             alt={product.name}
//             className="product-image"
//           />
//         </div>
//       </Link>
//       <div>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as="h6" className="product-title">
//             {product.name}
//           </Card.Title>
//         </Link>
//         <Card.Text as="h5" className="product-price">
//           ₹ {product.price}
//         </Card.Text>
//       </div>
//     </Card>
//   );
// };

// export default Product;

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Product.css'; // Custom styles for better layout


const Product = ({ product }) => {
  return (
    <Card className="my-1 p-2 product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image-container">
          <img
            src={product?.image[0]}
            alt={product.name}
            className="product-image"
          />
        </div>
      </Link>
      {/* <div className="product-info">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="p6" className="product-title">
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text as="p6" className="product-price">
          ₹ {product.price}
        </Card.Text>
      </div> */}
<div className="product-info">
  <Link to={`/product/${product._id}`}>
    <Card.Title as="h6" className="product-title">
      {product.name}
    </Card.Title>
  </Link>
  <Card.Text as="h6" className="product-price">
    ₹ {product.price}
  </Card.Text>
</div>

    </Card>
  );
};
export default Product;