import CharacterType from "./CharacterType";
import { getCharacters } from "./Model";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  let characters = await getCharacters();
  let character = characters.find(
    (character) => character.character === (params.characterName as string)
  );
  return character;
}

function Character() {
  const navigate = useNavigate();
  const character = useLoaderData() as CharacterType;

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="card">
        <img src={character.image}></img>
        <div className="con">
          <div className="name">{character.character}</div>
          <div className="quote">{character.quote}</div>
        </div>
      </div>
    </>
  );
}

export default Character;
