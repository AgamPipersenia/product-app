// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // Assuming you're using CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src="/shop.png" alt="Logo" width={80} height={50} />
        <h1>GIVA Mart</h1>
      </div>
      <div className={styles.navbarLinks}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
