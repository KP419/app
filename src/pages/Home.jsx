import "./Home.css";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";

function Home() {
  return (
    <di className="home page">
      <h1>Home Page</h1>

      <Link className="btn btn-primary" to="/catalog">
        Check our amazing Catalog {">"}
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut
        maiores molestias consequuntur tempore minima quos perferendis cumque
        provident dignissimos, ipsam facilis libero recusandae sunt natus
        explicabo corporis id optio?.
      </p>
    </di>
  );
}

export default Home;
