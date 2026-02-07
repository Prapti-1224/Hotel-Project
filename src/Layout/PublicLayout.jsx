import { Outlet, useLocation } from "react-router";
import Footer from "../Component/Footer";

export default function PublicLayout() {
  const { pathname } = useLocation();

  const Navlinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "RoomSuite", url: "/room" },
    { title: "Dining", url: "Dining" },
    { title: "Services", url: "/service" },
  ];

  return (
    <div className="h-dvh">
      <div className="flex justify-center gap-10 items-center bg-[#F3EDE4] border-b shadow-md z-10 fixed top-0 w-full h-20 border-gray-100 py-4">
        {Navlinks.map((el, idx) => (
          <a
            href={el.url}
            key={idx}
            className={`text-lg hover:text-[#5A4634] ease-in-out duration-500 ${
              (
                el.url === "/"
                  ? pathname === el?.url
                  : pathname?.includes(el.url)
              )
                ? " font-bold"
                : " font-semibold"
            }`}
          >
            {el.title}
          </a>
        ))}

        <div>
          <button className="bg-[#463829] text-white px-5 py-2 rounded-full hover:bg-[#18140f] cursor-pointer  duration-500 ease-in-out">
            Book Now
          </button>
        </div>
      </div>
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
