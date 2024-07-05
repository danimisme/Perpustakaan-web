import InputForm from "../FormElements/InputForm";
import SelectOption from "../FormElements/SelectOption";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { hideForm } from "../../redux/features/formAddSlice";
import { addBook } from "../../redux/features/bookSlice";
import uniqid from "uniqid";
import { Book } from "../../models/Book";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddBook() {
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const bookData: Book = {
      id: uniqid(),
      title: form.booktitle.value,
      author: form.author.value,
      year: form.year.value,
      genre: form.genre.value,
    };
    const regex = /^[a-zA-Z0-9\s]*$/;
    const letters = /[a-zA-Z]/;
    if (!regex.test(bookData.title) || !letters.test(bookData.title)) {
      setMessage(
        "Judul buku tidak boleh mengandung simbol dan harus mengandung huruf"
      );
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (!regex.test(bookData.author) || !letters.test(bookData.author)) {
      setMessage(
        "Nama pengarang buku tidak boleh mengandung simbol harus mengandung huruf"
      );
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (bookData.year < 1900 || bookData.year > 2024) {
      setMessage("Tahun buku tidak valid, harus antara 1900 - 2024 !");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (!bookData.genre) {
      setMessage("Harap pilih genre buku !");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    for (const data in bookData) {
      if (!bookData[data as keyof Book]) {
        setMessage(`Harap isi semua data !`);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        return;
      }
    }

    form.reset();
    dispacth(addBook(bookData));
    dispacth(hideForm());
    toast.success("Data buku berhasil ditambahkan");
  };

  const isShow = useAppSelector((state) => state.formAdd.isShow);
  const dispacth = useAppDispatch();
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center transition duration-300 ${
          isShow ? "bg-black bg-opacity-50" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full md:max-w-sm mx-4 md:mx-auto bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-lg transition duration-300 ${
            isShow ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h1 className="text-xl font-semibold mb-4 ">Tambah Buku</h1>
          <form onSubmit={handleSubmit}>
            {message.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p className="text-red-500 text-sm">{message}</p>
              </div>
            )}
            <InputForm name="booktitle" label="Judul Buku" type="text" />
            <InputForm name="author" label="Pengarang" type="text" />
            <InputForm name="year" label="Tahun" type="number" />
            <SelectOption
              name="genre"
              label="Pilih Genre"
              options={["Education", "Science", "History"]}
            />
            <div className="flex justify-end mt-4">
              <button className="text-sm bg-blue-500 hover:translate-y-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ">
                Tambah Buku
              </button>
              <button
                type="reset"
                className="text-sm bg-red-500 hover:translate-y-1 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ml-2"
                onClick={() => dispacth(hideForm())}
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
