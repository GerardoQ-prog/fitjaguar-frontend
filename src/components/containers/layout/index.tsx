import Aside from "@/components/ui/aside";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HeaderAdmin from "@/components/ui/header-admin";

interface ILayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children, className }) => {
  const isAdmin = false;

  return (
    <body className={className}>
      {!isAdmin ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <HeaderAdmin />
          <Aside>{children}</Aside>
        </>
      )}
    </body>
  );
};

export default Layout;
