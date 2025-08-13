"use client";

import { createContext, useContext, useState, useEffect } from "react";

import pt from "@/components/locales/pt.json";
import en from "@/components/locales/en.json";
import es from "@/components/locales/es.json";

type Lang = "pt" | "en" | "es";

type Translations = typeof pt;

const translations = { pt, en, es };

interface TranslationContextType{
    lang: Lang;
    changeLang: (newLang: Lang) => void;
    t: (path: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }){
    const [lang, setLang] = useState<Lang>("pt");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") as Lang;

        if (savedLang) setLang(savedLang);
    }, []);

    const changeLang = (newLang: Lang) =>{
        setLang(newLang);

        localStorage.setItem("lang", newLang);
    };

    const t = (path: string) =>{
        const keys = path.split(".");

        let current: any = translations[lang] as Translations;

        for (const key of keys){
            current = current?.[key];
        }

        return current || path;
    };

    return(
        <TranslationContext.Provider value={{ lang, changeLang, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation(){
    const context = useContext(TranslationContext);

    if (!context) throw new Error("useTranslation must be used inside TranslationProvider");
    
    return context;
}