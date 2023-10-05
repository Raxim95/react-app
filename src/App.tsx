import store from "./redux/store";
import { Provider } from "react-redux";
import MyRoot from "./routes/MyRoot";

function App() {
  return (
    <Provider store={store}>
      <MyRoot></MyRoot>
    </Provider>
  );
}

export default App;
