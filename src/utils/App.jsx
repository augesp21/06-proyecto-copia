import { BrowserRouter as Router } from "react-router-dom";
import { ItemsProvider } from "../context/ItemsContext";
import RoutesIndex from "../routes";
import NavBar from "../Layouts/NavBar";
import Pagination from "../Layouts/Pagination";
import AuthContextProvider from "../context/AuthContext";
import "./App.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ItemsProvider>
          <Router>
            <NavBar />
            <RoutesIndex />
            <Pagination />
          </Router>
        </ItemsProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
