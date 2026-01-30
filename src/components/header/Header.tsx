import { Link } from "react-router";

function Header() {
  return (
    <div>
      <nav className="*:font-bold *:text-xl *:text-green-400 flex justify-center mx-auto mb-4 items-center gap-4 p-4 border-2 border-[#ffffff2d] border-dashed">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
    </div>
  );
}

export default Header;
