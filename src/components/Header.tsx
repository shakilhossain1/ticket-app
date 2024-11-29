import { SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} className="font-bold shrink-0 text-2xl">
            logo
          </Link>

          <div className="">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className=" bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>



      </div>
    </div>
  );
}
