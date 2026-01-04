
const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-sm text-gray-300">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
      />


    </div>
  );
};

export default Input;
