import "./App.css";
import Header from "./components/Fragments/Header";
import ListBooks from "./components/Fragments/ListBooks";
import Navbar from "./components/Fragments/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <ListBooks />
      </div>
    </>
  );
}

export default App;
