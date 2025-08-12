import Hero from "@/components/Hero/Hero";
import Sobre from "@/components/Sobre/Sobre";
import Projetos from "@/components/Projetos/Projetos";
import Contatos from "@/components/Contatos/Contatos";
import styles from "./page.module.scss";
import Image from "next/image";
import logoImg from "../../public/logo.png";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.hero}>
            nathallia {'>'}
          </a>
          
          <div className={styles.links}>
            <a href="#sobre">
              Sobre
            </a>
            <a href="#projetos">
              Projetos
            </a>
            <a href="#contatos">
              Contatos
            </a>
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
