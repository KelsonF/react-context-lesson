import { TextStyleContext } from "../../contexts/TextStyleContext";
import Button from "../Button";
import Text from "../Text";

export default function Article() {
  return (
    <TextStyleContext.Provider value={{ color: "black", fontSize: "16px" }}>
      <Text>
        <p>sdasda</p>
        <p>Lorem Ipsum</p>
      </Text>
      <Button>
        <Text>Salvar</Text>
      </Button>
    </TextStyleContext.Provider>
  );
}
