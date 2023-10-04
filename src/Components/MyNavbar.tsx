import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar className="bg-dark">
      <Nav>
        <Nav.Link>
          <Link to="/" className="text-decoration-none text-secondary">
            Build your pizza
          </Link>
        </Nav.Link>
        <Nav.Link className="text-light">Ingredients</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
