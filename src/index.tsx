import * as React from "react";
import { render } from "react-dom";
import Hello from "./hello";
import Input from "./input";
import {
  DefaultButton,
  IButtonProps,
  Label,
  CompoundButton
} from "office-ui-fabric-react";

// documentation is:
// https://developer.microsoft.com/en-us/fabric#/components/button
// https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664806-modernisez-votre-javascript-avec-es2015

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { user: "nemo" };
  }

  public render() {
    if (this.state.user == "nemo") {
      return (
        <div>
          <Hello name="CodeSandbox input" />
          <Input name="hjk" />
          <DefaultButton>I am a button</DefaultButton>
          <Label>Standard</Label>
          <CompoundButton
            secondaryText="You can create a new account here."
            primary="true"
          >
            Create account
          </CompoundButton>
        </div>
      );
    } else {
      return (
        <div>
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById("root"));
