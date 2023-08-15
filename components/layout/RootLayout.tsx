import { PropsWithChildren } from "react";
import Header from "./Header";

// - PropsWithChildren: children이 포함된 Props 를 위한 타입

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
    <Header />
      {children}
      <div>Footer</div>
    </>
  );
};

export default RootLayout;

