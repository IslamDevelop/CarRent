import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Routing } from "./Routing/Routing";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isauth, setAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      {isauth ? <Routing /> : <AuthPage/>}
    </>
  );
}

export default App;
