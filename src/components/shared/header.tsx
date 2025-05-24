'use client';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  Home,
  User,
  Brain,
  Briefcase,
  Wrench,
  Phone,
  FileText,
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-background/80 backdrop-blur-sm fixed top-0 z-10 right-0 flex justify-center w-full h-full max-h-[60px] items-center transition-all duration-500 ${
        isScrolled
          ? 'bg-white/20 dark:bg-black/20'
          : 'border-b  backdrop-blur-none'
      }`}
    >
      <motion.div
        className="flex items-center  gap-2 w-full max-w-[700px] h-full !pl-5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeIn' }}
      >
        <Link
          className="no_links flex gap-5 justify-center items-center font-bold"
          href="/"
          onClick={() => window.location.reload()}
        >
          <Image
            className="img_logo"
            src="/favicon.ico"
            alt="Logo"
            width={30}
            height={30}
          />
          <p className='text-[20px]'>&lt; JRD /&gt;</p>
        </Link>
      </motion.div>

      <nav className="hidden lg:block  justify-center items-center gap-5 h-full w-full">
        <ul className="flex justify-center items-center gap-5 w-full h-full">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} /> Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="flex items-center gap-2">
              <User size={18} /> Sobre
            </Link>
          </li>
          <li>
            <Link href="/habilidade" className="flex items-center gap-2">
              <Brain size={18} /> Habilidades
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="flex items-center gap-2">
              <Briefcase size={18} /> Portfolio
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="flex items-center gap-2">
              <Wrench size={18} /> Serviços
            </Link>
          </li>
          <li>
            <Link href="/contato" className="flex items-center gap-2">
              <Phone size={18} /> Contato
            </Link>
          </li>

          <li>
            <p className="text-4xl font-light relative bottom-[5px] hidden sm:block">
              |
            </p>
          </li>

          <li>
            <button>
              <ThemeToggle />
            </button>
          </li>

          <li className="hidden md:block">
            <Link
              className="border border-border rounded-full no_links hover:text-white !p-[4px] !mb-[5px] hover:bg-blue-900 transition-all duration-900 ease-in-out flex"
              href="/cv/currículo.pdf"
              download
            >
              Currículo
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão de menu (hamburguer) */}
      <button
        className="lg:hidden z-20 !pl-[40px] !pr-[40px] !p-[15px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={35} />
      </button>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className=" lg:hidden flex flex-col justify-center items-center gap-8 h-[100dvh] w-full  border bg_menu rounded-lg absolute top-15 left-0  z-15">
          <ul className="link_list flex flex-col justify-center items-center gap-8 h-[100dvh] w-full ">
            <li>
              <Link href="/" className='!p-[15px] !pl-[100px] !pr-[100px] flex items-center gap-2'>
                <Home size={18} /> Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="!pl-[100px] !pr-[100px]  flex items-center gap-2">
                <User size={18} /> Sobre
              </Link>
            </li>
            <li>
              <Link href="/habilidade" className="!pl-[100px] !pr-[100px] !p-[15px] flex items-center gap-2">
                <Brain size={18} /> Habilidades
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="!pl-[100px] !pr-[100px] !p-[15px] flex items-center gap-2">
                <Briefcase size={18} /> Portfolio
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="!pl-[100px] !pr-[100px] !p-[15px] flex items-center gap-2">
                <Wrench size={18} /> Serviços
              </Link>
            </li>
            <li>
              <Link href="/contato" className="!pl-[100px] !pr-[100px] !p-[15px] flex items-center gap-2">
                <Phone size={18} /> Contato
              </Link>
            </li>

            {/* Botão Currículo */}
            <li>
              <a
                className=" cursor-pointer px-6 py-2 rounded-full text-blue-500  hover:text-white transition-all duration-300 flex !pl-[100px] !pr-[100px] !p-[15px] gap-2 !ml-2"
                href="/cv/currículo.pdf"
                download
              >
                <FileText size={20} className='!mt-[2px]' /> Currículo
              </a>
            </li>

            {/* Botão de Tema (claro/escuro) */}
            <li>
              <button className="px-100 py-2  text-gray-300 hover:bg-gray-700 transition-all duration-300">
                <ThemeToggle />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
