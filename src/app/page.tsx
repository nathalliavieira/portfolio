"use client"

import Hero from "@/components/Hero/Hero";
import Sobre from "@/components/Sobre/Sobre";
import Projetos from "@/components/Projetos/Projetos";
import Contatos from "@/components/Contatos/Contatos";
import styles from "./page.module.scss";

import { useTranslation } from "@/context/TranslationContext";

export default function Home() {
  const { changeLang, lang, t } = useTranslation();

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.hero}>
            nathallia {'>'}
          </a>
          
          <div className={styles.containerLinks}>
            <div className={styles.buttons}>
              <button disabled={lang === "pt"} onClick={() => changeLang("pt")}>BR</button>
              <button disabled={lang === "en"} onClick={() => changeLang("en")}>US</button>
              <button disabled={lang === "es"} onClick={() => changeLang("es")}>ES</button>
            </div>

            <div className={styles.links}>
              <a href="#sobre">
                {t("menu.sobre")}
              </a>
              <a href="#projetos">
                {t("menu.projetos")}
              </a>
              <a href="#contatos">
                {t("menu.contatos")}
              </a>
            </div>
          </div>
        </nav>
      </div>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="contatos">
          <Contatos />
        </section>
      </main>

      {/* <button className={styles.btnsubir}>subir</button> */}
    </>
  );
}
