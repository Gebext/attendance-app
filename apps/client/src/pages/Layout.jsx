import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
