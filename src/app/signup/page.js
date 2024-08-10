import Home from "@/app/page";
function SignUpPage() {
  return (
    <Home>
      <div className="grid grid-cols-2 gap-2 content-center h-[600px]">
        <div className="col">
          <img
            className="max-w-full"
            src={`/asset/asset1.jpg`}
            alt="image description"
          />
        </div>
        <div className="h-full">
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-full">
            <div className="space-y-3 mb-4">
              <label className="text-lg font-semibold text-black">
                Create An Account
              </label>
              <p className="text-sm font-semibold  text-black">
                Enter your details below
              </p>
            </div>
            <div className="space-y-3">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className="mb-6 ">
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <p className="text-red-500 text-xs italic mb-4">
                  Please choose a password.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between space-y-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Create Account
              </button>
              <div className="flex ">
                <span className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 me-2">
                  Already have account?
                </span>
                <a className="text-sm text-blue-500 hover:text-blue-800 font-semibold">
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Home>
  );
}

export default SignUpPage;
