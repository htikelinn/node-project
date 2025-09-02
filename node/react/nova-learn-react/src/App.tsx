import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { isLoggedIn } from "./service/AuthService";
import Login from "./component/Login";
import type { ReactElement } from "react";
import Register from "./component/Register";

export default function App() {
  const beLogin = isLoggedIn();

  const AuthenticatedRoute = ({ children }: { children: ReactElement }) => {
    return beLogin ? children : <Login />;
    // java programmer write like this
    // if (beLogin) {
    //   return children;
    // }
    // return <Navigate to="/login" />
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <AuthenticatedRoute>
                  <Home />
                </AuthenticatedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
