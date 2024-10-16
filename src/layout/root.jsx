import { Outlet } from "react-router-dom";
import Header from "./../components/header";
import Sidebar from "./../components/sidebar";
import '../sass/_root.scss'

function Root() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Root;
