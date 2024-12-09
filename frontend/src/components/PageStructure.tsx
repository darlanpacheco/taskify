import Header from "./Header";
import Footer from "./Footer";

interface PageStructureProps {
  children: React.ReactNode;
}

const PageStructure: React.FunctionComponent<PageStructureProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageStructure;
