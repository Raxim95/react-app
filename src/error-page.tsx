import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Keshirim soraymız, kútilmegen qátelik júz berdi.</p>
      <p>{error.message || JSON.stringify(error)}</p>
    </div>
  );
}
