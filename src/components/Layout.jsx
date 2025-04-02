import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-emerald-200 flex flex-col">
      <nav className="w-full p-6 bg-lime-900 font-semibold text-lime-100">
        <ul className="flex gap-6 justify-end">
          <li>
            <Link to="/" className="hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="hover:text-amber-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
