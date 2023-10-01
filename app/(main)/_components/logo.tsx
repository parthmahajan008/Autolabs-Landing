import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo3.svg" alt="Logo" width={150} height={120} />
    </Link>
  );
};

export default Logo;
