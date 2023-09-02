import AuthProvider from "../Component/Hoc/AuthProvider";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
