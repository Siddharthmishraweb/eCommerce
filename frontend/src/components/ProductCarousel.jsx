// import { Carousel, Image } from "react-bootstrap";
// import Loader from "./Loader";
// import Message from "./Message";
// import { useGetTopProductsQuery } from "../slices/productsApiSlice";
// import { Link } from "react-router-dom";

// const ProductCarousel = () => {
//     const { data: products, isLoading, error } = useGetTopProductsQuery();
    
//     return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
//     : (
//         <Carousel pause='hover' className="bg-primary mb-4">
//             {
//                 products.map(product => (
//                     <Carousel.Item key={product._id}>
//                         <Link to={`/product/${product._id}`} >
//                             <Image src={product.image} alt={product.name} fluid />
//                              <Carousel.Caption className="carousel-caption">
//                                 <h2>{product.name} (₹{product.price})</h2>
//                              </Carousel.Caption>
//                         </Link>
//                     </Carousel.Item>
//                 ))
//             }
//         </Carousel>
//     )

// }
// export default ProductCarousel;

import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();

    return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
            <Carousel pause='hover' className="bg-primary mb-4" style={carouselStyle}>
                {
                    products.map(product => (
                        <Carousel.Item key={product._id} style={carouselItemStyle}>
                            <Link to={`/product/${product._id}`} style={linkStyle}>
                                <Image src={product.image} alt={product.name} fluid style={imageStyle} />
                                <Carousel.Caption className="carousel-caption" style={captionStyle}>
                                    {/* <h2 style={titleStyle}>{product.name} (₹{product.price})</h2> */}
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        );
};

// Inline styles
const carouselStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
};

const carouselItemStyle = {
    textAlign: 'center',
    background: '#f8f9fa', // Background color for each carousel item
    borderRadius: '10px',
};

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
};

const imageStyle = {
    height: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
};

const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
};

const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#fff',
};

export default ProductCarousel;
