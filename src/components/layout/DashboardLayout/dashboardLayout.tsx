import { ReactNode } from "react";
import { Footer } from "../Footer/footer";
import { Navbar } from "../Navbar/navbar";
import "./dashboard-layout.css"

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard__wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
