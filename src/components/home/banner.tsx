'use client';
import {
  ArrowBigRight,
  Github,
  Linkedin,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="flex flex-col w-full h-full  items-center justify-center gap-6">
      <div className="flex flex-wrap gap-6 items-center justify-center w-full h-full  min-h-[700px]">
        <motion.div
          className="flex flex-col gap-4 justify-center  items-start w-full max-w-[700px] !pl-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-2xl">Olá, meu nome é</span>
          <h1 className="text-6xl ">Jordan Rafael</h1>
          <h2 className="text-5xl">Desenvolvedor FrontEnd</h2>
          <p className="w-full max-w-[600px] text-[18px]">
            Especialista em criar experiências digitais modernas e atraentes.
            Combinando design e desenvolvimento para transformar ideias em
            realidade.
          </p>

          <div className="flex gap-5 items-center justify-center">
            <span className="bolinha animate-pulse duration-100 relative bottom-[5px]"></span>
            <p className="flex">Disponivel para novos projetos</p>
          </div>

          <div className="flex flex-col gap-5">
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6, ease: 'easeIn' }}
            >
              <a href="#">
                <Github size={25} />
              </a>
              <a href="#">
                <Linkedin size={25} />
              </a>
            </motion.div>

            <div className="flex gap-4 w-auto  !mt-[10px]">
              <button className="group flex border border-border bg-indigo-600 !p-2 rounded-[5px] gap-3 w-[160px]">
                Ver projetos{' '}
                <ArrowBigRight
                  className="!mt-[1px] !pt-[2px] group-hover:!ml-4 transition-all duration-600"
                  size={20}
                />{' '}
              </button>
              <button className="flex border border-border bg-blue-600 !p-2 rounded-[5px]  gap-3">
                Entre em Contato
                <MessageCircle
                  className="!mt-[1px] animate-pulse duration-150 "
                  size={20}
                />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" w-full max-w-[400px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: 'easeIn' }}
        >
          <Image
            className="img_avatar"
            src="/banner/avatar.svg"
            alt="Jordan Rafael"
            width={350}
            height={350}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center cursor-pointer mt-10">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeIn',
          }}
          className="flex flex-col items-center justify-center gap-2 h-full max-h-[150px] w-full max-w-[100px] !pb-10"
        >
          <ChevronDown size={20} className="hover: text-blue-600" />
          <ChevronDown size={30} className="hover: text-blue-600" />
          <ChevronDown size={40} className="hover: text-blue-600" />
        </motion.div>
      </div>
    </section>
  );
}
