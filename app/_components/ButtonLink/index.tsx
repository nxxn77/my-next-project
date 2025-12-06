import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
} 