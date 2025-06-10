import { prisma } from "~/server/database";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brown Social" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const result = await prisma.user.findMany();

  console.log("Fetched users:", result);

  return {
    message: "Welcome to Brown Social!",
    timestamp: new Date().toISOString(),
    users: result || [],
  };
}

export default function Home(props: Route.ComponentProps) {

  const { message, timestamp } = props.loaderData;

  return <div>
    <h1 className="text-3xl font-bold underline">Welcome to Brown Social!</h1>
    <p className="mt-4">This is a simple social media application built with React and TypeScript.</p>
    <p className="mt-2">Explore the features and enjoy your stay!</p>
    <p className="mt-2">Message: {message}</p>
    <p className="mt-2">Timestamp: {timestamp}</p>
    <h2 className="mt-6 text-2xl font-semibold">Users:</h2>
    <ul className="mt-2">
      {props.loaderData.users.map((user) => (
        <li key={user.id} className="mt-1">
          {user.username} ({user.id})
        </li>
      ))}
    </ul>
  </div>
}
