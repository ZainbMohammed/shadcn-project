import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required"),

  lastName: z
    .string()
    .min(1, { message: "Last Name is required" }),

  email: z
    .string()
    .min(1, { message: "email address is required" })
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),

  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Password and Confirm Password do not match",
  path: ["confirmPassword"],
});

// drfine the type of the form inputs using from schema using z.infer
type TFormInputs = z.infer<typeof signupSchema>;

// type TFormInputs = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };
const Signup = () => {
  const { register, handleSubmit ,formState: { errors } } = useForm<TFormInputs>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });
  const submitForm: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(submitForm)} className="max-w-sm mx-auto">
        <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">
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
            className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
            {...register("lastName")}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Email Address
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@gmail.com"
            required
            {...register("email")}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Password
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="******"
            required
            {...register("password")}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Confirm Password
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            {...register("confirmPassword")}
          />
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
