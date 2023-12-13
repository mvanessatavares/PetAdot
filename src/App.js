import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/Sobre/Sobre";
import Post from "./pages/Post/Post";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostAnimal from "./pages/PostAnimal/PostAnimal";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Historico/Historico";
import EditPost from "./pages/EditPet/EditPost";

// context
import { AuthProvider } from "./contexts/AuthContext";
import Ongs from "./pages/FormAdoção"
import Adote from "./pages/Adote";
import Ajude from "./pages/Ajude";
import FormAdocao from "./pages/FormAdoção";
import Quiz from "./pages/Quizz/index";
import Informações from "./pages/Informações/index";


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ongs" element={<Ongs />} />
              <Route path="/formadocao" element={<FormAdocao/>} />
              <Route path="/adote" element={<Adote />} />
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/ajude" element={<Ajude />} />
              <Route path="/about" element={<About />} />
              <Route path="/informacoes" element={<Informações />} />
              <Route path="/posts/create" element={user ? <PostAnimal /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
               
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
