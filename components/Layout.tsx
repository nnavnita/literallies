import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from "../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <section className={styles.layoutPage}>
      <Navbar className={styles.layoutNavbar} />
      <main>{children}</main>
      <Footer className={styles.layoutFooter} />
    </section>
  )
}

export default Layout;