import books from "../../data/books.json";

export default function ListBooks() {
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <div className="flex gap-4 justify-center">
        <h1 className="text-3xl font-semibold">Daftar Buku</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          + Tambah Buku
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {books.map((book) => (
          <div className="bg-blue-300 p-4 rounded-lg">
            <h1 className=" text-lg md:text-xl font-bold">{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
