import { Button } from '~/components/button';
import type { Route } from './+types/home';
import { Post } from '~/components/post';
import { getSession } from '~/server/session.service';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Brown Social' }];
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const data = await request.json();

};

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const user = session.get('user');
  if (user) {
    return redirect('/feed');
  }

  return null;
}

export default function Home(props: Route.ComponentProps) {

  return (
    <main className="h-screen flex-1 flex bg-cream flex-col items-center justify-between p-6">
      <div id="logo-section" className="w-full flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-light-brown border-4 border-dark-brown overflow-hidden flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-all duration-300">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/aa87a2f3f9-2a968c1bf345bf5ed8a0.png"
            alt="cartoon mascot character with brown skin and big smile, goofy expression, comic style"
          />
        </div>

        <h2 className="text-3xl font-bold text-fancy-brown mb-3 text-center">Welcome to Brown Town!</h2>
        <p className="text-dark-brown text-center mb-8 max-w-xs">
          The only social app where <span className="font-bold text-fancy-brown">Kieron Brown</span> has the power to post!
        </p>
        <Post />
        <Button to="/signup">Enter Brown Social</Button>
      </div>
    </main>
  );
}
