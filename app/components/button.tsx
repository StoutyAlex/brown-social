import { Link } from 'react-router';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

export const Button = (props: ButtonProps) => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className="w-full bg-fancy-brown text-white py-3 rounded-lg font-bold hover:bg-dark-brown transition-colors duration-300 flex items-center justify-center"
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button className="w-full bg-fancy-brown text-white py-3 rounded-lg font-bold hover:bg-dark-brown transition-colors duration-300 flex items-center justify-center">
      {props.children}
    </button>
  );
};
