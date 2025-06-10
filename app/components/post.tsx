import { Card } from './card';

interface PostProps {}

export const Post = ({}) => (
  <Card>
    <div className="flex items-center mb-3">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-fancy-brown">
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e5a54046ba-3645de367b83038a091b.png"
          alt="cartoon man with brown skin smiling, comic style avatar"
        />
      </div>
      <div>
        <p className="font-bold text-fancy-brown">Kieron Brown</p>
        <p className="text-sm text-gray-500">@TheOnlyPoster</p>
      </div>
      <div className="ml-auto">
        <i className="fa-solid fa-crown text-yellow-500 text-xl animate-pulse"></i>
      </div>
    </div>
    <p className="text-dark-brown mb-2">
      "Join my town where I'm the only one who can share thoughts! It's all about me, myself, and I!"
    </p>
  </Card>
);
