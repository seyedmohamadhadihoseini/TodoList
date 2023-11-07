import "./style.css";
import Header from "./Components/Header";
import Title from "./Components/Title";

import { Provider } from "react-redux";
import Main from "./Pages/Main";
import { store } from "./Redux/StoreManagement";

function App() {
  
  return (
    <>
      <Header />
      <Title />
      <Provider store={store}>
        <Main/>
      </Provider>
    </>
  );
}

export default App;