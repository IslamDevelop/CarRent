import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Routing } from "./Routing/Routing";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [auth, setAuth] = useState(false);
  const authLogin = () => {
    setAuth(true);
  };

  return (
    <>
      <Header />
      {auth ? <Routing /> : <AuthPage authLogin={authLogin} />}
    </>
  );
}

export default App;
