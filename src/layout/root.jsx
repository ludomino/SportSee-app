import { Outlet } from "react-router-dom";
import Header from "./../components/header";
import Sidebar from "./../components/sidebar";

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
