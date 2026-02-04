import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
export default function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
