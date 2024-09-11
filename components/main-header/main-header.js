import Link from "next/link";
import Image from "next/image";

import logoImage from "@/app/icon.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-backgroud";
import NavLink from "./nav-link";


export default function MainHeader() {

	return (
	<>
		<MainHeaderBackground />
		<header className={classes.header}>
			<Link className={classes.logo} href="/">
				<Image src={logoImage} alt="logoImage" priority />
				Home
			</Link>

			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink href="/meals">Browse Meals</NavLink>
					</li>
					<li>
						<NavLink href="/community">Community</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	</>)
	;
}
