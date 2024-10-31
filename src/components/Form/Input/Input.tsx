import { Path, FieldValues, UseFormRegister } from "react-hook-form";

// define the prop types
type TInputProps<TFieldValue extends FieldValues> = {
    label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;

};

const Input = <TFieldValue extends FieldValues>({
    label,
    name, 
    type = 'text', 
    register, 
   
    error
}: TInputProps<TFieldValue>) => {
  return (
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium">
            {label}
          </label>
          <input
            type={type}
            className={`bg-gray-50 border ${
              error ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Jone"
            {...register(name)}
          />
          {error && (
            <p className="mt-1 text-xs text-red-600">
              {error}
            </p>
          )}

        </div>
  )
}

export default Input