import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getCharacters } from "../services.tsx/Model";
import CharacterType from "./CharacterType";
import { Button, ListGroup } from "react-bootstrap";
import useLoadingStyle from "../services.tsx/useLoadingStyle";

export async function loader() {
  let characters = await getCharacters();
  return characters;
}

function Characters() {
  const navigate = useNavigate();
  const characters = useLoaderData() as CharacterType[];
  const loadingStyle = useLoadingStyle();

  return (
    <div className="p-4" style={loadingStyle}>
      <Button onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <ListGroup>
        {characters.map((character, i) => (
          <Link
            style={{ textDecoration: "none" }}
            to={character.character}
            key={i}
          >
            <ListGroup.Item action>{character.character}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
}

export default Characters;
