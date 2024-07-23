import { RxCaretDown } from "react-icons/rx";

const SelectBank = ({
  options,
  className,
  label,
  labelClass,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <p className={`text-sm font-medium ${labelClass}`}>{label}</p>
      <div className="relative">
        <select
          className={`focus-within:border-primary-green outline-none w-full border rounded-lg p-3 pr-4 appearance-none text-sm ${className}`}
          onChange={onChange}
          value={value}
          {...rest}
        >
          {options?.map((item, idx) => (
            <option key={idx} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="absolute top-1/2 -translate-y-1/2 right-2">
          <RxCaretDown />
        </span>
      </div>
    </div>
  );
};

export default SelectBank;
