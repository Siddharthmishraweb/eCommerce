// // import { useState, useEffect } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { Form, Button } from "react-bootstrap";
// // import Message from "../../components/Message";
// // import Loader from "../../components/Loader";
// // import FormContainer from "../../components/FormContainer";
// // import { toast } from "react-toastify";
// // import {
// //   useUpdateProductMutation,
// //   useGetProductDetailsQuery,
// //   useUploadProductImageMutation,
// // } from "../../slices/productsApiSlice";

// // const ProductEditScreen = () => {
// //   const { id: productId } = useParams();

// //   const [name, setName] = useState("");
// //   const [price, setPrice] = useState(0);
// //   const [image, setImage] = useState("");
// //   const [brand, setBrand] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [countInStock, setCountInStock] = useState(0);
// //   const [description, setDescription] = useState("");

// //   const {
// //     data: product,
// //     isLoading,
// //     refetch,
// //     error,
// //   } = useGetProductDetailsQuery(productId);
// //   console.log(product);
// //   const [updateProduct, { isLoading: loadingUpdate }] =
// //     useUpdateProductMutation();
// //   const [uploadProductImage, { isLoading: loadingUpload }] =
// //     useUploadProductImageMutation();

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (product) {
// //       setName(product.name);
// //       setPrice(product.price);
// //       setImage(product.image);
// //       setBrand(product.brand);
// //       setCategory(product.category);
// //       setCountInStock(product.countInStock);
// //       setDescription(product.description);
// //     }
// //   }, [product]);

// //   const submitHandler = async (e) => {
// //     e.preventDefault();
// //     const updatedProduct = {
// //       productId,
// //       name,
// //       price,
// //       image,
// //       brand,
// //       category,
// //       countInStock,
// //       description,
// //     };

// //     const result = await updateProduct(updatedProduct);
// //     if (result.error) {
// //       toast.error(result.error);
// //     } else {
// //       toast.success("Product Updated");
// //       navigate("/admin/productlist");
// //     }
// //   };

// //   const uploadFileHandler = async (e) => {
// //     console.log(e.target.files[0]);
// //     const formData = new FormData();
// //     formData.append("image", e.target.files[0]);
// //     try {
// //       const res = await uploadProductImage(formData).unwrap();
// //       toast.success(res.message);
// //       setImage(res.image);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error(err?.data?.message || err?.error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Link to="/admin/productList" className="btn btn-light my-3">
// //         Go Back
// //       </Link>
// //       <FormContainer>
// //         <h3>Edit Product</h3>
// //         {loadingUpdate && <Loader />}
// //         {isLoading ? (
// //           <Loader />
// //         ) : error ? (
// //           <Message variant="danger">{error}</Message>
// //         ) : (
// //           <Form onSubmit={submitHandler}>
// //             <Form.Group controlId="name" className="my-2">
// //               <Form.Label> Name </Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               ></Form.Control>
// //             </Form.Group>

// //             <Form.Group controlId="price" className="my-2">
// //               <Form.Label> Price </Form.Label>
// //               <Form.Control
// //                 type="number"
// //                 placeholder="Enter Price"
// //                 value={price}
// //                 onChange={(e) => setPrice(e.target.value)}
// //               ></Form.Control>
// //             </Form.Group>

// //             {/* Image Input Placeholder */}

// //             <Form.Group controlId="image" className="my-2">
// //               <Form.Label>Image</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter Image URL"
// //                 value={image}
// //                 onChange={(e) => setImage}
// //               ></Form.Control>
// //               <Form.Control
// //                 type="file"
// //                 label="Choose file"
// //                 onChange={uploadFileHandler}
// //               ></Form.Control>
// //             </Form.Group>

// //             { loadingUpdate && <Loader />}

// //             <Form.Group controlId="brand" className="my-2">
// //               <Form.Label> Brand </Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter Brand Name"
// //                 value={brand}
// //                 onChange={(e) => setBrand(e.target.value)}
// //               ></Form.Control>
// //             </Form.Group>

// //             <Form.Group controlId="category" className="my-2">
// //               <Form.Label> Category </Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter Category Name"
// //                 value={category}
// //                 onChange={(e) => setCategory(e.target.value)}
// //               ></Form.Control>
// //             </Form.Group>

// //             <Form.Group controlId="countInStock" className="my-2">
// //               <Form.Label> Count In Stock </Form.Label>
// //               <Form.Control
// //                 type="number"
// //                 placeholder="Enter Count In Stock"
// //                 value={countInStock}
// //                 onChange={(e) => setCountInStock(e.target.value)}
// //               ></Form.Control>
// //             </Form.Group>
// //             <Button type="submit" variant="primary" className="my-2">
// //               Update
// //             </Button>
// //           </Form>
// //         )}
// //       </FormContainer>
// //     </>
// //   );
// // };

// // export default ProductEditScreen;



// import { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// import Message from "../../components/Message";
// import Loader from "../../components/Loader";
// import FormContainer from "../../components/FormContainer";
// import { toast } from "react-toastify";
// import {
//   useUpdateProductMutation,
//   useGetProductDetailsQuery,
//   useUploadProductImageMutation,
// } from "../../slices/productsApiSlice";

// const ProductEditScreen = () => {
//   const { id: productId } = useParams();

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [images, setImages] = useState([]);
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState("");

//   const {
//     data: product,
//     isLoading,
//     refetch,
//     error,
//   } = useGetProductDetailsQuery(productId);

//   const [updateProduct, { isLoading: loadingUpdate }] =
//     useUpdateProductMutation();
//   const [uploadProductImage, { isLoading: loadingUpload }] =
//     useUploadProductImageMutation();

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (product) {
//       setName(product.name);
//       setPrice(product.price);
//       setImages(product.images || []); // Ensure it's an array
//       setBrand(product.brand);
//       setCategory(product.category);
//       setCountInStock(product.countInStock);
//       setDescription(product.description);
//     }
//   }, [product]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.warn("images::", images)
//     const updatedProduct = {
//       productId,
//       name,
//       price,
//       images,
//       brand,
//       category,
//       countInStock,
//       description,
//     };

//     const result = await updateProduct(updatedProduct);
//     if (result.error) {
//       toast.error(result.error);
//     } else {
//       toast.success("Product Updated");
//       navigate("/admin/productlist");
//     }
//   };

//   const uploadFileHandler = async (e) => {
//     const files = e.target.files;
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("images", files[i]);
//     }

//     try {
//       const res = await uploadProductImage(formData).unwrap();
//       toast.success(res.message);
//       setImages([...images, res.image]); // Append new images to existing images array
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.data?.message || err?.error);
//     }
//   };

//   return (
//     <>
//       <Link to="/admin/productList" className="btn btn-light my-3">
//         Go Back
//       </Link>
//       <FormContainer>
//         <h3>Edit Product</h3>
//         {loadingUpdate && <Loader />}
//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant="danger">{error}</Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name" className="my-2">
//               <Form.Label> Name </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="price" className="my-2">
//               <Form.Label> Price </Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="image" className="my-2">
//               <Form.Label>Images</Form.Label>
//               <Form.Control
//                 type="file"
//                 label="Choose file"
//                 multiple // Allow multiple files to be selected
//                 onChange={uploadFileHandler}
//               ></Form.Control>
//               {images.map((image, index) => (
//                 <img key={index} src={image} alt={`Product ${index}`} />
//               ))}
//             </Form.Group>

//             {loadingUpdate && <Loader />}

//             <Form.Group controlId="brand" className="my-2">
//               <Form.Label> Brand </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Brand Name"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="category" className="my-2">
//               <Form.Label> Category </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Category Name"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="countInStock" className="my-2">
//               <Form.Label> Count In Stock </Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter Count In Stock"
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               ></Form.Control>
//             </Form.Group>
//             <Button type="submit" variant="primary" className="my-2">
//               Update
//             </Button>
//           </Form>
//         )}
//       </FormContainer>
//     </>
//   );
// };

// export default ProductEditScreen;


import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
  useUploadProductImageMutation,
} from "../../slices/productsApiSlice";

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  console.log("images::::::",images);

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImages(product.images || []); // Ensure it's an array
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.error("images:: ", images);
    const updatedProduct = {
      productId,
      name,
      price,
      images,
      brand,
      category,
      countInStock,
      description,
    };

    const result = await updateProduct(updatedProduct);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Product Updated");
      navigate("/admin/productlist");
    }
  };

  // const uploadFileHandler = async (e) => {
  //   const files = e.target.files;
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     console.log("ith file:::  ", files[i]);
  //     formData.append("images", files[i]);
  //   }
  
  //   try {
  //     const res = await uploadProductImage(formData).unwrap();
  //     console.log("Uploaded image response:", res); // Log the response for debugging
  //     toast.success(res.message);
  //     setImages([...images, res.images]); // Append new images to existing images array
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err?.data?.message || err?.error);
  //   }
  // };
  const uploadFileHandler = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
  
    try {
      const res = await uploadProductImage(formData).unwrap();
      console.log("Uploaded image response:", res); // Log the response for debugging
      toast.success(res.message);
      // Append new images to existing images array
      setImages((prevImages) => [...prevImages, ...res.images]);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err?.error);
    }
  };
  

  return (
    <>
      <Link to="/admin/productList" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h3>Edit Product</h3>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-2">
              <Form.Label> Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="price" className="my-2">
              <Form.Label> Price </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="image" className="my-2">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                label="Choose file"
                multiple
                onChange={uploadFileHandler}
              />
              <div className="image-preview">
                {images.map((image, index) => (
                  <img
                    key={index}
                    style={{height: "100px", width:"100px", padding:"20px"}}
                    src={image}
                    alt={`Product ${index}`}
                    className="preview-image"
                  />
                ))}
              </div>
            </Form.Group>

            {loadingUpload && <Loader />}

            <Form.Group controlId="brand" className="my-2">
              <Form.Label> Brand </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand Name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="category" className="my-2">
              <Form.Label> Category </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="countInStock" className="my-2">
              <Form.Label> Count In Stock </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Count In Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="my-2">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
