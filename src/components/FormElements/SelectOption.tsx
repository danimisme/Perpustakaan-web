export default function SelectOption({
  name,
  label,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <select
        id={name}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value="">{label}</option>
        {options.map((option, i) => (
          <option
            className="bg-transparent"
            key={i}
            value={option.toLowerCase()}
            selected={defaultValue === option.toLocaleLowerCase()}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
