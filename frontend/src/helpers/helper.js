import axios from "axios";

// const directCheckout = product =>
//   new Promise((resolve, reject) => {
//     axios
//       .post("/api/payment/direct-checkout", product)
//       .then(response => resolve(response.data))
//       .catch(err => console.error(err));
//   });

  const directCheckout = async (product) => {
    const res = await axios.post("/api/payment/direct-checkout", product);
    console.log("******  response  *****", res)
    return res;
  }
// const getProducts = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get("/api/product")
//       .then(response => resolve(response.data))
//       .catch(err => console.error(err));
//   });

export { directCheckout };
