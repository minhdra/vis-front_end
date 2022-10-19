import React from "react";
import { Outlet } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import FooterAdmin from "../components/Footers/FooterAdmin";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100 min-h-screen">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="mx-auto w-full">
          <Outlet/>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
