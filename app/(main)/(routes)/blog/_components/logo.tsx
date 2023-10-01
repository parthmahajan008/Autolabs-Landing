import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/blog">
      <Image src="/blog.png" alt="Logo" width={150} height={120} />
    </Link>
  );
};

export default Logo;
