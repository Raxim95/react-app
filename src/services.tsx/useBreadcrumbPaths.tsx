import { useLocation } from "react-router-dom";

function useBreadcrumbPaths() {
  let location = useLocation();

  const paths = location.pathname.split("/");
  paths.splice(0, 1);

  const routes = new Map();
  paths.forEach((v, i) => {
    if (v === "") return;
    routes.set(v, paths.slice(0, i + 1).join("/"));
  });

  const routesArray = Array.from(routes);
  return routesArray;
}

export default useBreadcrumbPaths;
