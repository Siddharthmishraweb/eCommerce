import { Row, Col } from "react-bootstrap";
import  {Link, useParams} from 'react-router-dom';
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
const duplicateArr = (arr, times) => Array(times).fill([...arr]).reduce((a, b) => a.concat(b));

const HomeScreen = () => {
  const { pageNumber , keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber })
  // const products = data ? duplicateArr(data.products, 2) : []
  // console.log("products:: ", products)
  let products =[
    {
      "_id": "6610ee6600b17c2c6b0f07a9",
      "user": "6610ee6500b17c2c6b0f07a5",
      "name": "Panda Bag",
      "image": [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhZ3xlbnwwfHx8fDE2NzU4MjQzNjY&ixlib=rb-1.2.1&q=80&w=200",
        "https://images.unsplash.com/photo-1532543171985-0d7b99c2c44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJhZ3xlbnwwfHx8fDE2NzU4MjQzNjY&ixlib=rb-1.2.1&q=80&w=200"
      ],
      "brand": "Panda",
      "category": "Bags",
      "description": "A cute panda-themed school bag for kids. Suitable for ages 2-6.",
      "rating": 4.5,
      "numReviews": 10,
      "price": 320,
      "countInStock": 100,
      "reviews": [],
      "__v": 3,
      "createdAt": "2024-04-06T06:40:38.152Z",
      "updatedAt": "2024-04-06T11:49:57.677Z"
    },
    {
      "_id": "6610fdb3aa4f3e498ed3c7b6",
      "user": "6610ee6500b17c2c6b0f07a5",
      "name": "Luxury Hand Clock",
      "image": [
        "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?cs=srgb&dl=pexels-pixabay-277319.jpg&fm=jpg",
        "https://images.unsplash.com/photo-1508960012827-94a96b355f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHdhdGNofGVufDB8fHx8MTY3NTgyNDM2Ng&ixlib=rb-1.2.1&q=80&w=200"
      ],
      "brand": "Men",
      "category": "Accessories",
      "description": "Luxury hand clock for men with an elegant design.",
      "rating": 4.0,
      "numReviews": 5,
      "price": 1200,
      "countInStock": 50,
      "reviews": [],
      "__v": 5,
      "createdAt": "2024-04-06T07:45:55.623Z",
      "updatedAt": "2024-04-06T09:57:13.231Z"
    },
    {
      "_id": "6610fdbaaa4f3e498ed3c7b7",
      "user": "6610ee6500b17c2c6b0f07a5",
      "name": "Wireless Headphones",
      "image": [
        "https://avstore.in/cdn/shop/products/white_3_3093d672-26df-4383-99eb-1684f8423e29.png?v=1628788651",
        "https://images.unsplash.com/photo-1594179044365-e63eeef57ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhlYWRwaG9uZXN8ZW58MHx8fHwxNjc1ODI0MzY2&ixlib=rb-1.2.1&q=80&w=200"
      ],
      "brand": "Sony",
      "category": "Electronics",
      "description": "High-quality wireless headphones with noise cancellation.",
      "rating": 4.7,
      "numReviews": 20,
      "price": 3999,
      "countInStock": 30,
      "reviews": [],
      "__v": 2,
      "createdAt": "2024-04-06T08:00:15.123Z",
      "updatedAt": "2024-04-06T10:30:25.456Z"
    },
    {
      "_id": "6610fdb7aa4f3e498ed3c7b8",
      "user": "6610ee6500b17c2c6b0f07a5",
      "name": "Smart Watch",
      "image": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8fHwxNjc1ODI0MzY2&ixlib=rb-1.2.1&q=80&w=200",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8fHwxNjc1ODI0MzY2&ixlib=rb-1.2.1&q=80&w=200"
      ],
      "brand": "Apple",
      "category": "Wearables",
      "description": "Apple smart watch with fitness tracking and heart rate monitor.",
      "rating": 5.0,
      "numReviews": 50,
      "price": 25999,
      "countInStock": 20,
      "reviews": [],
      "__v": 6,
      "createdAt": "2024-04-06T09:45:55.623Z",
      "updatedAt": "2024-04-06T11:00:13.231Z"
    },
    {
      "_id": "6610ff00aa4f3e498ed3c7b9",
      "user": "6610ee6500b17c2c6b0f07a5",
      "name": "Running Shoes",
      "image": [
        "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHx8fDE2NzU4MjQzNjY&ixlib=rb-1.2.1&q=80&w=200",
        "https://images.unsplash.com/photo-1542293787938-c9e299b88050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHx8fDE2NzU4MjQzNjY&ixlib=rb-1.2.1&q=80&w=200"
      ],
      "brand": "Nike",
      "category": "Footwear",
      "description": "Comfortable running shoes designed for performance and durability.",
      "rating": 4.8,
      "numReviews": 60,
      "price": 4999,
      "countInStock": 45,
      "reviews": [],
      "__v": 4,
      "createdAt": "2024-04-06T10:45:55.623Z",
      "updatedAt": "2024-04-06T11:55:13.231Z"
    }
  ]
  products = data ? duplicateArr(products, 112) : []
  

  return (
    <div>
      { !keyword ? <ProductCarousel /> : <Link to='/' className="btn btn-light mb-4">Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <div>
          <h1>Latest Products</h1>
          {/* <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}
          <Row xs={2} sm={2} md={3} lg={4} xl={4} >
            {products.map((product) => (
              <Col key={product._id}>
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
