import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";

type TLayout = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <main className="container mx-auto flex-1 py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
