import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { routes } from "./constants/routers";
import Routers from "./routers.routes";
import GlobalStyle from "./styles/global";
function App() {
  const navigation = useNavigate();
  const handleValidAuth = async () => {
    const token = await localStorage.getItem("token");

    if (!token) {
      navigation(routes.home);
    }
  };

  useEffect(() => {
    handleValidAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
