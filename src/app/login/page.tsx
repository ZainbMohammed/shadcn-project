import React from 'react'

const Login = () => {
  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <form className="max-w-sm mx-auto">
         <div className="mb-5">
          <label className="block mb-2 text-sm font-medium   dark:text-white">
            Email Address
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="example@gmail.com"
            required
            name="email"
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
            name="password"
          />
        </div> 
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login