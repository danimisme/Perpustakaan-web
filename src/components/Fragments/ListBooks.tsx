import { IoIosAddCircleOutline } from "react-icons/io";
import CardBook from "./CardBook";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AddBook from "../Form/AddBook";
import { showForm } from "../../redux/features/formSlice";
import ModalDelete from "../Modals/ModalDelete";

export default function ListBooks() {
  const books = useAppSelector((state) => state.book.books);
  const dispacth = useAppDispatch();
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <div className="flex gap-4 justify-center">
        <h1 className="text-3xl font-semibold">Daftar Buku</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => dispacth(showForm())}
        >
          <IoIosAddCircleOutline className="inline h-6 w-6 mr-1" /> Tambah Buku
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
      <ModalDelete />
    </div>
  );
}
