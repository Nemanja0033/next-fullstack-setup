"use client";
import { Button } from "@/components/ui/button";
import { uploadFile } from "@/lib/upload/upload";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="md:flex grid place-items-center w-full justify-center items-center h-screen">
      <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.50 }} className="grid md:text-start text-center md:place-items-start place-items-center gap-4 p-4">
        <h1 className="text-gray-600 text-6xl font-semibold">START BUILDING AWESOME APPS!</h1>
        <p className="text-gray-400 text-2xl">Build fast and scalable web apps with this modern <span className="animate-pulse">next.js</span> tech-stack</p>
        <Link href="https://github.com/Nemanja0033/next-fullstack-setup">
          <Button size={'lg'} variant={'outline'} >Get Started <Github /></Button>
        </Link>
      </motion.div>
      
      <div className="flex gap-4 items-center justify-center relative md:top-3 top-0 md:right-48 right-0">
        <TooltipProvider>
          <Tooltip >
            <TooltipTrigger>
              <Link href="https://nextjs.org/">
                <motion.img initial={{x: 40, opacity: 0, rotate: 360}} animate={{ x: 0, opacity: 1, rotate: 0}} transition={{ duration: 0.5 }} className="h-12 hover:scale-105 hover:translate-y-[-5px] transition-all relative" src="/nextjs.png" alt="next.js logo" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-gray-800 text-white p-2 rounded">
              <span>Learn more about Next.js</span>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.typescriptlang.org/">
                <motion.img initial={{x: 40, opacity: 0, rotate: 360}} animate={{ x: 0, opacity: 1, rotate: 0}} transition={{ duration: 0.5 }} className="h-10 hover:scale-105 hover:translate-y-[-5px] transition-all relative" src="/ts.png" alt="ts logo" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-gray-800 text-white p-2 rounded">
              <span>Learn more about TypeScript</span>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.prisma.io/">
                <motion.img initial={{x: 40, opacity: 0, rotate: 360}} animate={{ x: 0, opacity: 1, rotate: 0}} transition={{ duration: 0.5 }} className="h-10 hover:scale-105 hover:translate-y-[-5px] transition-all relative" src="/prisma.png" alt="prisma logo" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-gray-800 text-white p-2 rounded">
              <span>Learn more about Prisma</span>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.postgresql.org/">
                <motion.img initial={{x: 40, opacity: 0, rotate: 360}} animate={{ x: 0, opacity: 1, rotate: 0}} transition={{ duration: 0.5 }} className="h-16 hover:scale-105 hover:translate-y-[-5px] transition-all relative top-1 right-3" src="/postqresql.webp" alt="postqresql logo" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-gray-800 text-white p-2 rounded">
              <span>Learn more about PostgreSQL</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}