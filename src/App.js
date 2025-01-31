import { Provider } from "react-redux";
import "./App.scss";
import Body from "./Components/Body";

//@ts-ignore
import appstore from "./Utils/appstore";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
