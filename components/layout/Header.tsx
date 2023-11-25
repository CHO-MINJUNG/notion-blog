// components/layout/Header.tsx
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from "../common/IconButton";

const navLinks = [
  {
    name: "Tags",
    link: "/tags",
  },
  {
    name: "About",
    link: "/about",
  },
];

// -Link tag: 클라이언트 사이드 렌더링의 방식으로 다른 페이지 이동이 가능. 이동 전 prefetching으로 이동할 페이지의 데이터를 미리 불러와 빠른 이동이 가능
const Header = () => {
  return (
    <>
      <header className="bg-white w-full fixed top-0 z-50">
        <nav className="p-4 flex flex-row justify-between max-w-5xl mx-auto">
          <h1 className="font-black text-4xl">
            <Link href={"/"} legacyBehavior>COG</Link>
          </h1>
          <ul className="flex flex-row gap-2 items-center text-gray-600 font-medium">
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <Link href={link} legacyBehavior>
                  <a className="hover:text-black p-3 rounded-lg hover:bg-gray-100">
                    {name}
                  </a>
                </Link>
              </li>
            ))}

            <li>
              <Link href={"/search"} legacyBehavior>
                <a>
                  <IconButton
                    icon={<AiOutlineSearch color="white" size={"1.5rem"} />}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-[72px]" />
    </>
  );
};

export default Header;