'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema , type TSignupInputs } from "@/validations/signupSchema";

// changes in testbranch
const Signup = () => {
  const { register, handleSubmit ,formState: { errors } } = useForm<TSignupInputs>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });
  const submitForm: SubmitHandler<TSignupInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(submitForm)} className="max-w-sm mx-auto">
        <div className="mb-5">
        <label className="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Jone"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.firstName.message}
            </p>
          )}

        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Doe"
            required
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Email Address
          </label>
          <input
            type="text"
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="example@gmail.com"
            required
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Password
          </label>
          <input
            type="text"
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="******"
            required
            {...register("password")}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Confirm Password
          </label>
          <input
            type="text"
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder=""
            required
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ms-2 text-sm font-medium   dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
