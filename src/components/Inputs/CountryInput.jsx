import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { } from 'react-icons/rx'
import nigeria from '../../assets/images/Nigeria.png'

const CountryInput = ({ disabled, labelClass, defaultValue, ...rest }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className={`text-sm font-medium ${labelClass}`} htmlFor={"id"}>
                Phone Number
            </label>
            <div className="p-3.5 rounded-md border focus-within:border-primary-green relative flex items-center">
                <button type="button" className="items-center gap-1 flex">
                    <img src={nigeria} alt="nigeria" />
                    <RxCaretDown />
                </button>
                <input
                    type={"text"}
                    disabled={disabled}
                    id={"id"}
                    className={` ml-3 flex-1  w-full text-sm rounded-md outline-none`}
                    placeholder={"0.00"}
                    defaultValue={defaultValue}
                    {...rest}
                />
            </div>
        </div>
    );
};

export default CountryInput;
