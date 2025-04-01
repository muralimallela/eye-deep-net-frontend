import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-black">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-400 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
}
