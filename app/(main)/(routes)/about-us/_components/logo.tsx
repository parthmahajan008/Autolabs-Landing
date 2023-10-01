import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/blog">
      <Image src="/aboutus.png" alt="Logo" width={340} height={100} />
    </Link>
  );
};

export default Logo;
