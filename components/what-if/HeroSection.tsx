"use client";



import { motion, useReducedMotion } from "framer-motion";

import { Brain, MessageCircle, ShieldCheck } from "lucide-react";

import { ANIMATION } from "@/lib/constants/brand";
import { SimulatorTryButton } from "@/components/SimulatorTryButton";



const features = [

  {

    icon: MessageCircle,

    title: "Doğal dilde sorun",

    desc: "\"Eve kedi alsam ne olur?\" gibi günlük cümlelerle sorun, formlar ve jargon yok.",

  },

  {

    icon: Brain,

    title: "AI arka planda hesaplar",

    desc: "Mama, veteriner, kasko, yakıt; tüm kalemler profilinize göre modellenir.",

  },

  {

    icon: ShieldCheck,

    title: "Risk almadan test edin",

    desc: "Gerçek hesabınıza dokunulmaz. Her senaryo izole bir kum havuzunda çalışır.",

  },

];



export function HeroSection() {

  const prefersReducedMotion = useReducedMotion();



  const container = {

    hidden: {},

    show: {

      transition: {

        staggerChildren: prefersReducedMotion ? 0 : ANIMATION.staggerDelay,

      },

    },

  };



  const item = {

    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },

    show: {

      opacity: 1,

      y: 0,

      transition: { duration: prefersReducedMotion ? 0 : ANIMATION.fadeDuration },

    },

  };



  return (

    <motion.div

      variants={container}

      initial="hidden"

      animate="show"

      className="flex flex-col gap-10 lg:pl-10 xl:pl-16"

    >

      <motion.p

        variants={item}

        className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy lg:text-sm"

      >

        QNB · Olurmu

      </motion.p>



      <motion.h1

        variants={item}

        className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight lg:max-w-3xl lg:text-[3.5rem]"

      >

        <span className="brand-gradient-text">

          Büyük kararları almadan önce sorun.

        </span>

      </motion.h1>



      <motion.ul variants={item} className="max-w-2xl space-y-4 lg:max-w-3xl">

        {features.map(({ icon: Icon, title, desc }) => (

          <li

            key={title}

            className="flex gap-5 rounded-2xl border border-border-purple/40 bg-white/80 p-5 shadow-sm lg:p-6"

          >

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-purple/50 bg-gradient-to-br from-qnb-navy/5 to-qnb-purple/10 lg:h-16 lg:w-16">

              <Icon className="h-7 w-7 text-qnb-navy lg:h-8 lg:w-8" aria-hidden="true" />

            </span>

            <div className="min-w-0 flex-1">

              <p className="text-lg font-medium text-label lg:text-xl">{title}</p>

              <p className="mt-1.5 text-base leading-relaxed text-body">{desc}</p>

            </div>

          </li>

        ))}

      </motion.ul>



      <motion.div variants={item}>
        <SimulatorTryButton href="#simulator" />
      </motion.div>

    </motion.div>

  );

}


