import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

export default function TailwindTest() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body></Body>}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
