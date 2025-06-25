import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";

export default function MainHeader() {
  return (<header className={classes.header}>
    <Link href="/" className={classes.logo}>
      <Image priority src={logoImg} alt="A plate with food on it." />
      Next Level Food
    </Link>
    <nav className={classes.nav}>
      <ul>
        <li><Link href="/meals">Browse Meals</Link></li>
        <li><Link href="/community">Foodie Community</Link></li>

      </ul>
    </nav>
  </header>)
}
