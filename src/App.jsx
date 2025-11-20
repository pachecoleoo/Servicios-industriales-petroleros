// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Contacto from "./pages/contacto.jsx";
import Servicios from "./pages/servicios.jsx";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/nosotros"
        element={
          <Layout>
            <Nosotros />
          </Layout>
        }
      />
      <Route
      path="/contacto"
      element={
        <Layout>
          <Contacto/>
        </Layout>
      }>
      </Route>
       <Route
      path="/servicios"
      element={
        <Layout>
          <Servicios/>
        </Layout>
      }>
      </Route>
      {/* Cuando tengas más páginas, las sumás acá igual */}
      {/* <Route path="/servicios" element={<Layout><Servicios /></Layout>} /> */}
    </Routes>
  );
}
