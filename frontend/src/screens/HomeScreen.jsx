import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import  {Link, useParams} from 'react-router-dom';
//import products from '../products'
import Product from "../components/Product";
import ProductScreen from "../screens/ProductScreen";
import axios from "axios";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //    const fetchProduct = async () => {
  //       const { data } = await axios.get('/api/products');
  //       setProducts(data);
  //    }
  //    fetchProduct();
  // }, [])
  const { pageNumber , keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });
  console.log("*********  keyword  **********", keyword)

  //console.log("prod**** ",products);
  return (
    <div>
      { keyword && <Link to='/' className="btn btn-light mb-4">Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <div>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* <h3>{product.name}</h3> */}
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate 
             pages={data.pages}
             page={data.page}
             keyword = {keyword ? keyword :''}
          />

        </div>
      )}
    </div>
  );
};
export default HomeScreen;
