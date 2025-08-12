"use client"

import styles from "./styles.module.scss";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import { useEffect, useState } from "react";

export default function Hero(){
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setAnimKey((prev) => prev + 1);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={styles.container}>
            <h1 key={animKey} className={styles.animacao}>Olá, me chamo Nathallia Vieira.</h1>
            <h2>Sou desenvolvedora fullstack.</h2>

            <div className={styles.contatos}>
                {/* <div className={styles.travessao}></div> */}

                <a href="https://github.com/nathalliavieira" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/nathallia-vieira-1147781aa" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre...">
                    E-mail
                </a>

                {/* <div className={styles.travessao}></div> */}
            </div>
        </div>
    );
}