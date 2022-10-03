import React from "react";


export default function Input({ name, id, value, type, inputAction, r, placeholder }) {
    return (
        <>
            <div>
                <input type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={inputAction}
                    required={r}
                    className=" border border-gray-500 p-2 rounded placeholder:text-gray-500 placeholder:text-sm w-full file:cursor-pointer file:rounded-full file:border-none file:py-1 file:px-2 file:bg-gray-300 hover:file:bg-gray-400 file:text-sm file:font-semibold"
                />
            </div>
        </>
    )
}