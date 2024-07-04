import Input from "./Input";
import Label from "./Label";

export default function InputForm({
  name,
  label,
  type,
  onChange,
  defaultValue = "",
}: {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <Input
        name={name}
        type={type}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <Label name={name} label={label} />
    </div>
  );
}
