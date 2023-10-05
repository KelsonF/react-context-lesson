import { createContext } from "react";

type TextStyle = React.CSSProperties

export const TextStyleContext = createContext<TextStyle>({});