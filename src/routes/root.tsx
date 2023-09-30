import { Outlet, NavLink } from "react-router-dom";
import useOnlineStatus from "../services.tsx/useOnlineStatus";
import { Container } from "react-bootstrap";

const routes = ["/", "about", "contact"];

export default function Root() {
  const isOnline = useOnlineStatus();

  if (!isOnline) return <h1>You are OFFLINE</h1>;

  return (
    <div className="p-4">
      <Container className="w-50">
        <div className="d-flex gap-2 mb-4 border bg-light p-2 rounded">
          {routes.map((to, i) => {
            return (
              <NavLink
                key={i}
                to={to}
                style={{ textTransform: "uppercase", textDecoration: "none" }}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn btn-primary w-100"
                    : isPending
                    ? "bg-secondary"
                    : "btn bg-white border w-100"
                }
              >
                {to === "/" ? "home" : to}
              </NavLink>
            );
          })}
        </div>
        <Outlet></Outlet>
      </Container>
    </div>
  );
}
