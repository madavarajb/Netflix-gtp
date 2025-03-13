import { Provider } from "react-redux";
import "./App.scss";
import Body from "./Pages/Body";

//@ts-ignore
import appstore from "./Utils/appstore";
import { AuthProvider } from "./Utils/Auth";

function App() {
  return (
    <Provider store={appstore}>
      <AuthProvider>
        <Body />
      </AuthProvider>
    </Provider>
  );
}

export default App;
