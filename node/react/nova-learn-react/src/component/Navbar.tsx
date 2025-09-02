import { Link } from "react-router-dom";
import { getToken, isLoggedIn, logoutApicall } from "../service/AuthService";

export default function Navbar() {
  const beLogin = isLoggedIn();
  console.log(getToken());

  const logoutHandler = () => {
    logoutApicall();
    window.location.reload();
  };
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
        borderRadius: "0.75rem",
        margin: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: "0.5rem 1rem",
        color: "#fff",
      }}
    >
      <div className="navbar flex items-center justify-between">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black font-bold menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                {beLogin && <a className="hover:text-blue-600">Homepage</a>}
              </li>
              <li>
                {beLogin && <a className="hover:text-blue-600">Portfolio</a>}
              </li>
              <li>
                {!beLogin && <a className="hover:text-blue-600">Login</a>}
              </li>
              <li>
                {!beLogin && (
                  <Link to={"/register"} className="hover:text-blue-600">
                    Register
                  </Link>
                )}
              </li>
              <li>
                {beLogin && (
                  <Link
                    to={"/logout"}
                    onClick={logoutHandler}
                    className="hover:text-blue-600"
                  >
                    Logout
                  </Link>
                )}
              </li>
              <li>
                <a className="hover:text-blue-600">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="btn btn-ghost text-xl font-bold tracking-wide hover:bg-blue-200"
            style={{ color: "#fff" }}
          >
            NovaLearn
          </a>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button className="btn btn-ghost btn-circle hover:bg-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-blue-200">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
