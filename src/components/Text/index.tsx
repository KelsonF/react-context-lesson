import { PropsWithChildren, useContext } from "react";
import { TextStyleContext } from "../../contexts/TextStyleContext";

export default function Text({ children }: PropsWithChildren) {
  const style = useContext(TextStyleContext);
  return <span style={style}>{children}</span>;
}
