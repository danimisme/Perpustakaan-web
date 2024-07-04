import { MdDelete, MdEdit } from "react-icons/md";
import { Book } from "../../models/Book";
import { FaUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineTag } from "react-icons/ai";

export default function CardBook({ book }: { book: Book }) {
  return (
    <div className="flex flex-col  justify-between bg-blue-200 p-4 rounded-lg relative group hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <div className="space-y-1 mb-4">
        <h1 className=" text-lg md:text-xl font-bold text-gray-800 group-hover:text-black">
          {book.title}
        </h1>
        <p>
          <span>
            <FaUser className="inline h-3 w-3 mr-1" />
          </span>
          {book.author}
        </p>
      </div>
      <div className="flex gap-4">
        <p>
          <span>
            <CiCalendarDate className="inline h-5 mr-1" />
          </span>
          {book.year}
        </p>
        <p>
          <span>
            <AiOutlineTag className="inline h-5 mr-1" />
          </span>
          <span>{book.genre}</span>
        </p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button className="bg-white text-blue-700 py-2 px-2 border border-gray-400 rounded-full hover:translate-y-1 hover:bg-slate-300 transition duration-300 ">
          <MdEdit />
        </button>
        <button className="bg-white text-red-500 py-2 px-2 border border-gray-400 rounded-full hover:translate-y-1 hover:bg-slate-300 transition duration-300 ">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
