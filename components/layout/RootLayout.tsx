import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
// - PropsWithChildren: children이 포함된 Props 를 위한 타입

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;

