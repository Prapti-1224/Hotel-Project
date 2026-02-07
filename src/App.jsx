import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import About from "./Page/About";
import RoomSuite from "./Component/RoomSuite";
import Dining from "./Page/Dining "
import Service  from "./Page/Service"
import PublicLayout from "./Layout/PublicLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="room" element={<RoomSuite />} />
        <Route path="dining" element={<Dining />} />
        <Route path="service" element={<Service />} />

        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
