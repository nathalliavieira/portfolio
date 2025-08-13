"use client"

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

import { useTranslation } from "@/context/TranslationContext";

export default function Hero(){
    const {t} = useTranslation();

    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setAnimKey((prev) => prev + 1);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={styles.container}>
            <h1 key={animKey} className={styles.animacao}>{t("hero.greeting")}</h1>
            <h2>{t("hero.role")}</h2>

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