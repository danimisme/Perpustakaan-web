import { hideDeleteModal } from "../../redux/features/modalDeleteSlice";
import { deleteBook } from "../../redux/features/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function ModalDelete() {
  const isShow = useAppSelector((state) => state.modalDelete.isShow);
  const book = useAppSelector((state) => state.modalDelete.book);
  const dispacth = useAppDispatch();

  const handleDelete = () => {
    dispacth(deleteBook(book.id));
    dispacth(hideDeleteModal());
  };

  return (
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
        <h1 className="text-xl font-semibold mb-4">Hapus Buku</h1>
        <p>
          Yakin Ingin Menghapus buku
          <span className="font-semibold">"{book.title}"</span> ?
        </p>
        <div className="flex gap-4 mt-4 justify-end">
          <button
            className="text-sm bg-red-500 hover:bg-red-700 hover:translate-y-2 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            onClick={handleDelete}
          >
            Hapus
          </button>
          <button
            className="text-sm bg-blue-500 hover:bg-blue-700 hover:translate-y-2 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            onClick={() => dispacth(hideDeleteModal())}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
