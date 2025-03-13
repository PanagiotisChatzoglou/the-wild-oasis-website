import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        height="60"
        src={logo}
        width="60"
        alt="The Wild Oasis logo"
        quality={90}
      />
      {/* <Image height="60" src="/logo.png" width="60" alt="The Wild Oasis logo" /> */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
