import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log(colorMode);
    return (
        <section className={props.className}>
            <header className={styles.header}>
                <IconButton onClick={toggleColorMode} aria-label={'Toggle' + colorMode === 'light' ? 'Dark' : 'Light'}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </header>
        </section>
    )
}

export default Navbar;