import { Link, UIMatch, useMatches } from "react-router-dom";

function Breadcrumbs() {
  let matches = useMatches() as UIMatch[];
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <>
      <Link to={"/"}>Home</Link>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {"  /  "}
          {crumb}
        </span>
      ))}
    </>
  );
}

function Header() {
  return (
    <div className="p-4 rounded bg-light header">
      <h1>React Router Dom</h1>
      <Breadcrumbs></Breadcrumbs>
    </div>
  );
}

export default Header;
