import { Nav, Navbar } from "react-bootstrap";

export function MyNavbar() {
  return (
    <Navbar className="bg-dark">
      <Nav>
        <Nav.Link className="text-secondary">Build your pizza</Nav.Link>
        <Nav.Link className="text-light">Ingredients</Nav.Link>
      </Nav>
    </Navbar>
  );
}
