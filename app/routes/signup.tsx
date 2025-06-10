import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import type { Route } from '../+types/root';
import { FaAt, FaUser } from 'react-icons/fa';
import { useFetcher } from 'react-router';
import { useEffect, useState } from 'react';

export async function action({}: Route.ActionArgs) {
  return null;
}

export default function Signup() {
  const { isLoading, error, data: visitorData } = useVisitorData({ extendedResult: true }, { immediate: true });
  const [initialised, setInitialised] = useState(false);

  const { data, submit } = useFetcher();

  useEffect(() => {
    if (!visitorData) return;
    submit({ visitorId: visitorData.visitorId }, { method: 'post', action: '/auth/login', encType: 'application/json' });
    setInitialised(true);
  }, [visitorData]);

  if (!initialised) {
    console.error('Error fetching visitor data:', error);
    return <div>Loading</div>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const handle = formData.get('handle') as string;
    const visitorId = visitorData?.visitorId;

    if (!visitorId || !username || !handle) {
      console.error('Missing required fields:', { visitorId, username, handle });
      return;
    }

    console.log('Visitor ID:', visitorId);
    console.log('Username:', username);
    console.log('Handle:', handle);

    submit({ visitorId, username, handle }, { method: 'post', action: '/auth/signup', encType: 'application/json' });
  };

  return (
    <main className="bg-cream h-screen flex-1 flex flex-col items-center justify-center p-6">
      <div id="login-form-container" className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 shadow-lg border-2 border-fancy-brown transform rotate-1 hover:rotate-0 transition-all duration-300"
        >
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
                <FaUser className="text-gray-500" />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-light-brown focus:border-fancy-brown focus:outline-none text-black"
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
                <FaAt className="text-gray-500" />
              </span>
              <input
                type="text"
                id="handle"
                name="handle"
                className="text-black w-full pl-10 pr-4 py-3 rounded-lg border-2 border-light-brown focus:border-fancy-brown focus:outline-none"
                placeholder="@kieronbrown"
              />
            </div>
          </div>

          <button
            id="login-button"
            className="w-full bg-fancy-brown text-white py-3 rounded-lg font-bold hover:bg-dark-brown transition-colors duration-300 flex items-center justify-center"
          >
            <span>Create Account</span>
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </form>
      </div>
    </main>
  );
}
