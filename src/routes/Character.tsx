import { Button, Card, Col, Row } from "react-bootstrap";
import CharacterType from "./CharacterType";
import { getCharacters } from "../services.tsx/Model";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import useLoadingStyle from "../services.tsx/useLoadingStyle";

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
  const loadingStyle = useLoadingStyle();

  return (
    <div className="p-4" style={loadingStyle}>
      <Button onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <Card className="p-4">
        <Row>
          <Col md={3} className="p-4">
            <img
              src={character.image}
              className="object-fit-contain w-100"
            ></img>
          </Col>
          <Col md={9}>
            <Card.Title>{character.character}</Card.Title>
            <Card.Text>{character.quote}</Card.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Character;
