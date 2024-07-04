import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  name,
  placeholder,
  onChange,
}: {
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaSearch />
      </div>
      <input
        type="text"
        id={name}
        name={name}
        className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
