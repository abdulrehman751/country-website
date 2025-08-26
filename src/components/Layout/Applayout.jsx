import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Applayout;
