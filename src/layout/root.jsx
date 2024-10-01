import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default Root;
