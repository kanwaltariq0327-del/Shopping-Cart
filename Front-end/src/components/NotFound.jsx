import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>404!</h1>
      <h3>Page Not Found</h3>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default NotFound;
