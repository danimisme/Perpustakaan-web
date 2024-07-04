import { IoIosAddCircleOutline } from "react-icons/io";
import CardBook from "./CardBook";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AddBook from "../Form/AddBook";
import { showForm } from "../../redux/features/formAddSlice";
import ModalDelete from "../Modals/ModalDelete";
import EditBook from "../Form/EditBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "../FormElements/SearchInput";
import { useState } from "react";

export default function ListBooks() {
  const books = useAppSelector((state) => state.book.books);
  const dispacth = useAppDispatch();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
    console.log(filtered);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-24">
        <div className="flex gap-4 justify-center">
          <h1 className="text-3xl font-semibold">Daftar Buku</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => dispacth(showForm())}
          >
            <IoIosAddCircleOutline className="inline h-6 w-6 mr-1" /> Tambah
            Buku
          </button>
        </div>
        <div className="mt-8 ">
          <div>
            <SearchInput
              name="search"
              placeholder="Cari judul atau pengarang..."
              onChange={(event) => handleSearch(event)}
            />
          </div>
        </div>
        <div className="mt-8 mb-20 min-h-72 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredBooks.map((book) => (
              <CardBook key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
      <AddBook />
      <EditBook />
      <ModalDelete />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
