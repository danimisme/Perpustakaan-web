import Input from "./Input";
import Label from "./Label";

export default function InputForm({
  name,
  label,
  type,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <Input name={name} type={type} onChange={onChange} />
      <Label name={name} label={label} />
    </div>
  );
}
