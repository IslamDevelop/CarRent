import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Routing } from "./Routing/Routing";
import { AuthPage } from "./pages/AuthPage/AuthPage";
<<<<<<< HEAD
import { getAuth, onAuthStateChanged } from "firebase/auth";
=======
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3

function App() {
  const [auth, setAuth] = useState(false);
  const authLogin = () => {
    setAuth(true);
  };
<<<<<<< HEAD

=======
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
  return (
    <>
      <Header />
      {auth ? <Routing /> : <AuthPage authLogin={authLogin} />}
    </>
  );
}

export default App;
