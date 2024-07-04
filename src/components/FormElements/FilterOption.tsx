export default function FilterOption({
  name,
  label,
  options,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div>
      <select
        id={name}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        onChange={onChange}
      >
        <option value="">{label}</option>
        {options.map((option, i) => (
          <option
            className="bg-transparent"
            key={i}
            value={option.toLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
