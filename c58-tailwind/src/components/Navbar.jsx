import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <div className="bg-cyan-800 flex flex-col justify-center items-center gap-1">
      <img className="w-24" src={logo} alt="logo-react" />
      <ul className="flex gap-2">
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Detail</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
      </ul>
    </div>
  );
}
