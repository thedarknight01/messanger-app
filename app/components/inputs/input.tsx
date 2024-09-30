
'use client'
import clsx from "clsx";
import { FieldErrors,FieldValues,UseFormRegister } from "react-hook-form";

interface InputProps{
    lable:string;
    id:string;
    type?:string;
    required?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    disabled?:boolean;
}

const input: React.FC<InputProps> = ({
    lable,id,type,required,register,errors,disabled
}) => {
  return (
    <div>
       <label htmlFor={id} className="block text-sm font-medium loading-6 text-gray-900">{lable}</label>
       <div className="mt-2">
        <input id={id} type={type} autoComplete={id} disabled={disabled}
        {...register(id ,{required})}
        className={clsx(`
            form-input
            block 
            w-full px-3 py-2 
            border border-gray-300 
            rounded-md shadow-sm 
            sm:text-sm
            border-green-300
            placeholder-gray-300 
            focus:ring-gray-500 
            focus:border-gray-500 
            focus:ring-gray-500`,
            errors[id] && "focus:ring-rose-500" ,
            disabled && "opacity-50 cursor-default"
            )} 
        placeholder="Enter your email address"
        />
       </div>
    </div>
  )
}

export default input