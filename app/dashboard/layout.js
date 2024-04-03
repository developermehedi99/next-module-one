import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <ul className="flex p-4 gap-5">
        <li>setting</li>
        <li>analytic</li>
      </ul>
      {children}
    </>
  );
};

export default DashboardLayout;
