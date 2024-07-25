// import { useFormik } from 'formik'
import React from 'react'

const Input = ({ disabled, label, id, type, placeholder, className, labelClass, value, defaultValue, onChange, ...rest }) => {

    return (
        <div className='text-sm flex flex-col'>
            <label className={`font-normal mb-0.5 ${labelClass}`} htmlFor="first_name">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={`disabled:text-primary-gray focus-within:border-primary-light-green rounded text-sm p-3 py-3 border outline-none ${className}`}
                value={value}
                onChange={onChange}
                disabled={disabled}
                defaultValue={defaultValue}
                {...rest}
            />
        </div>
    )
}

export default Input
