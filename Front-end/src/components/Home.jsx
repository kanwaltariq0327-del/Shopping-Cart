import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsAPI";
import { addToCart, getTotals } from "../features/cartSlice";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  }

  return (
    <div className="home-container">
      {isLoading ? (
        <p className="msg">Loading...</p>
      ) : error ? (
        <p className="msg">An Error Occurred</p>
      ) : (
        <>
          <h1>New Arrivals</h1>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <p>{product.description}</p>
                  <p className="price">$ {product.price}</p>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
