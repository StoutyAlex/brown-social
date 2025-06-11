import type { Route } from '../+types/root';

import pkg from '@fingerprintjs/fingerprintjs-pro-react';
const { FpjsProvider, useVisitorData } = pkg;

export async function action({}: Route.ActionArgs) {
  // This action is not used in this component, but it can be used for server-side logic if needed.
  return null;
}

export default function Login() {
  const { isLoading, error, data } = useVisitorData({ extendedResult: true }, { immediate: true });

  return (
    <FpjsProvider
      loadOptions={{
        apiKey: import.meta.env.VITE_FPJS_API_KEY,
        region: 'eu',
      }}
    >
      <main className="bg-cream h-screen flex-1 flex flex-col items-center justify-center p-6">
        <div id="login-form-container" className="w-full max-w-sm">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-fancy-brown transform rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2 border-2 border-fancy-brown">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e5a54046ba-3645de367b83038a091b.png"
                  alt="Kieron Brown avatar"
                />
              </div>
              <p className="font-bold text-fancy-brown text-lg">Kieron is waiting!</p>
            </div>

            <div className="mb-4">
              <label className="block text-dark-brown mb-2" htmlFor="username">
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  id="username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-light-brown focus:border-fancy-brown focus:outline-none"
                  placeholder="Choose a username"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-dark-brown mb-2" htmlFor="handle">
                Handle
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <i className="fa-solid fa-at"></i>
                </span>
                <input
                  type="text"
                  id="handle"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-light-brown focus:border-fancy-brown focus:outline-none"
                  placeholder="@your_handle"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-dark-brown mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-light-brown focus:border-fancy-brown focus:outline-none"
                  placeholder="Create a password"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>

            <button
              id="login-button"
              className="w-full bg-fancy-brown text-white py-3 rounded-lg font-bold hover:bg-dark-brown transition-colors duration-300 flex items-center justify-center"
            >
              <span>Create Account</span>
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            <div className="mt-6 pt-4 border-t border-light-brown text-center">
              <p className="text-dark-brown mb-3">Already have an account?</p>
              <button
                id="login-redirect"
                className="w-full border-2 border-fancy-brown text-fancy-brown py-2 rounded-lg font-bold hover:bg-light-brown transition-colors duration-300"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </main>
    </FpjsProvider>
  );
}
