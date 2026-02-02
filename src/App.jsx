import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import PublicLayout from "../Layout/PublicLayout";
// import Contact from "./Page/contact";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
