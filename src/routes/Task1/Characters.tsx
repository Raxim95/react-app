import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getCharacters } from "./Model";
import CharacterType from "./CharacterType";
import { Button } from "react-bootstrap";

export async function loader() {
  let characters = await getCharacters();
  return characters;
}

function Characters() {
  const navigate = useNavigate();
  const characters = useLoaderData() as CharacterType[];

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <div className="charactersContainer">
        {characters.map((character, i) => (
          <Link className="link" to={character.character} key={i}>
            {character.character}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;
