"use client"

import Hero from "@/components/Hero/Hero";
import Sobre from "@/components/Sobre/Sobre";
import Projetos from "@/components/Projetos/Projetos";
import Contatos from "@/components/Contatos/Contatos";

import { useTranslation } from "@/context/TranslationContext";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { changeLang, lang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#sobre", label: t("menu.sobre")},
    { href: "#projetos", label: t("menu.projetos")},
    { href: "#contatos", label: t("menu.contatos")},
  ];

  return (
    <>
      <div className="container mx-auto py-3 px-[25px] my-3 2xl:px-[120px]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--primaria)]">
          <a href="#hero" className="font-pixelify text-sm text-[var(--textoPrincipal)]">
            nathallia {'>'}
          </a>
          
          <div className="flex items-center justify-center gap-1 md:gap-3">
            <div className="flex items-center justify-center gap-1">
              <button disabled={lang === "en"} onClick={() => changeLang("en")} className="text-[var(--textoPrincipal)] border border-[var(--primaria)] rounded-[3px] h-[17px] flex items-center justify-center text-[12px] p-0.5 disabled:bg-[#7c3aed7c]">US</button>
              <button disabled={lang === "es"} onClick={() => changeLang("es")} className="text-[var(--textoPrincipal)] border border-[var(--primaria)] rounded-[3px] h-4 flex items-center justify-center text-[12px] p-0.5 disabled:bg-[#7c3aed7c]">ES</button>
            </div>

            <nav className="hidden md:flex items-center justify-center gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="no-underline text-sm text-[var(--textoPrincipal)] transition-colors duration-300 ease-in-out hover:text-[var(--botaoHover)]">
                  {item.label}
                </a>
              ))}
            </nav>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  className="md:hidden text-black hover:bg-transparent" 
                  variant="ghost" 
                  size="icon"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[240px] gap-2 px-2 py-4 sm:w-[300px] z-[9999] bg-[#f4f6fb]">

                <SheetTitle className="text-[var(--botaoHover)]">Menu</SheetTitle>

                <nav className="flex flex-col items-start mt-4 gap-6 ">
                  {navItems.map((item) => (
                    <Button key={item.label} asChild className="p-0 rounded-none w-full justify-start" onClick={() => setIsOpen(false)}>
                      <Link href={item.href} className="border-b border-[var(--primaria)] hover:text-[var(--botaoHover)]">{item.label}</Link>
                    </Button>
                  ))}
                </nav>

              </SheetContent>

            </Sheet>
          </div>
        </div>
      </div>

      <main className="w-full mx-auto overflow-x-clip">
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
    </>
  );
}
