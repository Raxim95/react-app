import CharacterType from "./CharacterType";

export async function getCharacters() {
  const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=30";
  const response = await fetch(url);
  const characters: CharacterType[] = await response.json();
  return characters;
}
