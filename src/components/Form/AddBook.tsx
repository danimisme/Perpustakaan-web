import InputForm from "../FormElements/InputForm";
import SelectOption from "../FormElements/SelectOption";

export default function AddBook() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full md:max-w-sm mx-auto bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-lg">
        <h1 className="text-xl font-semibold mb-4 ">Tambah Buku</h1>
        <form action="">
          <InputForm name="title" label="Judul Buku" type="text" />
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
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
