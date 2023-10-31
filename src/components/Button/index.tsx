import { BotaoStyled } from "./styled";

interface ButtonProps {
  title: string;
 clickFunction: any;
}

export function Button(props: ButtonProps) {
  return <BotaoStyled style={{background: props.title == "Excluir" ? "#a16207": "#6ee7b7"}}
  onClick={props.clickFunction}>
    {props.title}
    </BotaoStyled>;
}

