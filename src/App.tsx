import store from "./redux/store";
import { Provider } from "react-redux";
import Root from "./routes/Root";

function App() {
  return (
    <Provider store={store}>
      <Root></Root>
    </Provider>
  );
}

export default App;
