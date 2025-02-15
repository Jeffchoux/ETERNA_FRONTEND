import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import Button from "./components/Button";

function App() {
  useEffect(() => {
    // Vérification de l'authentification Firebase
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Utilisateur connecté :", user);
      } else {
        console.log("Utilisateur déconnecté");
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <h1>Bienvenue sur ETERNA.APP</h1>
        <Button>Commencer</Button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Page d'accueil</h2>;
}

function Login() {
  return <h2>Page de connexion</h2>;
}

export default App;
