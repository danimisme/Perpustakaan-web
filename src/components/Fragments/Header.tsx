export default function Header() {
  return (
    <div className="px-5 md:px-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 space-y-2">
        <h1 className="text-xl md:text-3xl font-semibold">
          Simple Library System
        </h1>
        <p className="text-sm md:text-lg mb-5">
          Simpan dan kelola buku Anda dengan mudah. Mulailah sekarang dan
          nikmati akses cepat ke koleksi buku Anda!
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "#listbooks")}
        >
          Mulai
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src="images/book-ilustration.png" alt="" />
      </div>
    </div>
  );
}
