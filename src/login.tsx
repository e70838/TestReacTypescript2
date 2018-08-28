import * as React from "react";
import Input from "./Input";

interface Props {
  name: String;
  onChange: (name: string) => console.log('onChange ' + name;);
  onSave: () => console.log('onSave ' + name);
}

export const Login: React.StatelessComponent<Props> = props => {
  return (
    <form>
      <h1>Magic happen {"\u2728"}</h1>
      <Input name="login"
      value={props.name}
      onChange={props.onChange}
    </form>
  );
}