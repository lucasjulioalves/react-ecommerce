import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <Header />
        <div className="app-container">
          <Outlet></Outlet>
        </div>
      <Footer />
    </>

  )
}

export default App
