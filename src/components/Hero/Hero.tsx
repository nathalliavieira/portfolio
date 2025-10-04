"use client"

import { useEffect, useState } from "react";

import { useTranslation } from "@/context/TranslationContext";

export default function Hero(){
    const {t} = useTranslation();

    const [animKey, setAnimKey] = useState(true);

    useEffect(() => {
        setAnimKey(false);
        const timer = setTimeout(() => setAnimKey(true), 10);

        return () => clearTimeout(timer);
    }, [t("hero.greeting")]);
    
    return (
        <div className="w-full flex flex-col items-center mb-6 justify-center gap-3 md:py-[96px] md:px-[120px] md:items-start">

            <h1 
                className={`font-pixelify font-normal text-2xl md:text-[36px] 
                    text-[var(--botaoHover)] 
                    overflow-hidden whitespace-nowrap
                    w-0 animate-typing
                    [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] ${animKey ? "animate-typing" : ""}`}>
                        {t("hero.greeting")}
            </h1>

            <h2 className="text-[var(--textoPrincipal)] text-xl md:text-2xl font-medium">{t("hero.role")}</h2>

            <div className="flex flex-row items-center justify-center mt-4 md:mt-[35px] gap-4">
                {/* <div className={styles.travessao}></div> */}

                <a href="https://github.com/nathalliavieira" target="_blank" rel="noopener noreferrer" className="text-[var(--textoPrincipal)]">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/nathallia-vieira-1147781aa" target="_blank" rel="noopener noreferrer" className="text-[var(--textoPrincipal)]">
                    LinkedIn
                </a>
                <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre..." className="text-[var(--textoPrincipal)]">
                    E-mail
                </a>

                {/* <div className={styles.travessao}></div> */}
            </div>
        </div>
    );
}