import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo1.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/data/">Data Catalogue</Link>
      <Link href="/ninjas/">Data Catalogue1</Link>
    </nav>
  );
}
 
export default Navbar;