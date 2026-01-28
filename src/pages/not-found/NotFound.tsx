import { Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

function NotFound() {
  return (
    <div className="grow flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-xl">
        Oops! The page you're looking for does not exist
      </h2>
      <Link to={"/"} className="text-blue-500 flex items-center gap-2">
        <IoMdArrowRoundBack />
        <span> Go to Home</span>
      </Link>
    </div>
  );
}

export default NotFound;
