import Image from "next/image";
import styles from "./index.module.css";
import { IBM_Plex_Sans_Devanagari } from "next/font/google";

export default function Header () {
    return (
        <header className={styles.headeraa}>
            <a href="/" className={styles.logoLink}>
                <Image
                  src="logo.svg"
                  alt="SIMPLE"
                  className={styles.logo}
                  width={348}
                  height={133}
                />
            </a>
        </header>
    );
}