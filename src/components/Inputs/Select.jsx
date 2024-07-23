import React from "react";
import {RxCaretDown} from "react-icons/rx";

const Select = ({options, className, label, labelClass, value, onChange, ...rest}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <p className={`text-sm ${labelClass}`}>{label}</p>
      <div className="relative">
        <select
          className={`focus-within:border-primary-green outline-none w-full border rounded p-3 pr-4 appearance-none text-sm ${className}`}
          onChange={onChange}
          value={value}
          {...rest}
        >
          <option value={""}>Select</option>
          {options?.map((item, idx) => (
            <option key={idx} value={item.value ?? item.id}>
              {item.label ?? item.text ?? item.name}
            </option>
          ))}
        </select>
        <span className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none ">
          <RxCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Select;
