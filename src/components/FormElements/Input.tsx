import React from "react";

export default function Input({
  name,
  type,
  onChange,
}: {
  name: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
      placeholder=" "
      onChange={onChange}
    />
  );
}
