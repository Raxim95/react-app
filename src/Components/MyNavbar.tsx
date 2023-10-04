import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar className="bg-dark">
      <Nav className="d-flex gap-3 px-3">
        <Link to="/" className="text-decoration-none text-secondary">
          Build your pizza
        </Link>
        <Link to="" className="text-light">
          Ingredients
        </Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
