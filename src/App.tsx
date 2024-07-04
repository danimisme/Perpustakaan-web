import "./App.css";
import Footer from "./components/Fragments/Footer";
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
        <Footer />
      </div>
    </>
  );
}

export default App;
