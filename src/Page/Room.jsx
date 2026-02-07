import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import PublicLayout from "./Layout/Publiclayout";
import About from "./Page/About";
import RoomSuite from "../Component/RoomSuite";
// import Contact from "./Page/contact";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="room" element={<RoomSuite/>} />

        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
