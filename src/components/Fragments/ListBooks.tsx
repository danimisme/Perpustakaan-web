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
import { useEffect, useState } from "react";
import FilterOption from "../FormElements/FilterOption";

export default function ListBooks() {
  const books = useAppSelector((state) => state.book.books);
  const dispacth = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchGenre, setSearchGenre] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [message, setMessage] = useState<string>("");
  const [sortby, setSortby] = useState<string>("");
  const [booksYear, setBooksYear] = useState<string[]>([]);

  useEffect(() => {
    const years: string[] = [];
    books.forEach((book) => {
      if (!years.includes(book.year.toString())) {
        years.push(book.year.toString());
      }
    });
    setBooksYear(years);
  }, [books]);

  useEffect(() => {
    let filtered = books;
    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (searchGenre) {
      filtered = filtered.filter((book) => book.genre === searchGenre);
    }
    if (searchYear) {
      filtered = filtered.filter((book) => book.year.toString() === searchYear);
      console.log("year search", filtered);
    }
    if (sortby === "year-asc") {
      filtered = [...filtered].sort((a, b) => {
        return a.year - b.year;
      });
    } else if (sortby === "year-desc") {
      filtered = [...filtered].sort((a, b) => {
        return b.year - a.year;
      });
    } else if (sortby === "title-asc") {
      filtered = [...filtered].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else if (sortby === "title-desc") {
      filtered = [...filtered].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    setFilteredBooks(filtered);
    if (filtered.length === 0) {
      setMessage(
        `Buku ${
          searchQuery ? `dengan judul atau pengarang "${searchQuery}"` : ""
        } ${searchGenre ? `genre "${searchGenre}"` : ""} ${
          searchYear ? `tahun terbit ${searchYear}` : ""
        } tidak ditemukan`
      );
    } else {
      setMessage("");
    }
  }, [books, searchQuery, searchGenre, searchYear, sortby]);

  const handleReset = () => {
    setSearchQuery("");
    setSearchGenre("");
    setSearchYear("");
    setSortby("");
    const filterGenre = document.getElementById("genre") as HTMLSelectElement;
    const filterYear = document.getElementById("year") as HTMLSelectElement;
    const filterSort = document.getElementById("sort") as HTMLSelectElement;
    filterGenre.selectedIndex = 0;
    filterYear.selectedIndex = 0;
    filterSort.selectedIndex = 0;
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2  gap-4 items-center ">
          <div className="p-4">
            <SearchInput
              name="search"
              placeholder="Cari judul atau pengarang..."
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mx-4">
            <FilterOption
              name="genre"
              label="Filter Genre"
              options={["education", "history", "science"]}
              onChange={(event) => {
                setSearchGenre(event.target.value);
              }}
            />
            <FilterOption
              name="year"
              label="Filter Tahun"
              options={booksYear}
              onChange={(event) => {
                setSearchYear(event.target.value);
              }}
            />
            <div>
              <select
                id="sort"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(event) => setSortby(event.target.value)}
              >
                <option value="">Urutkan</option>
                <option value="year-asc">Tahun &#8648;</option>
                <option value="year-desc">Tahun &#8650;</option>
                <option value="title-asc">Judul &#8648;</option>
                <option value="title-desc">Judul &#8650;</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-4 mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset Filter
          </button>
        </div>
        {message && (
          <div className=" border border-red-400 text-red-700 px-4 py-3 rounded m-4 p-4">
            <p>{message}</p>
          </div>
        )}
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
