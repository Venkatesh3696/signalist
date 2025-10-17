import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header w-full">
      <div className="flex justify-between p-4 items-center sm:justify-between w-full">
        <Link href="/">
          <Image
            alt="signalist logo"
            src="/assets/icons/logo.svg"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems initialStocks={initialStocks} />
        </nav>
        <UserDropdown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  );
};

export default Header;
