import React from "react";
import styles from "../styles/footer.module.scss";

const Footer = (props) => {
    return (
        <section className={props.className}>
            <footer className={styles.footer}>
                footer here
            </footer>
        </section>
    )
}

export default Footer;