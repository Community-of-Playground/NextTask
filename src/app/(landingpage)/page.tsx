"use client"

import Link from "next/link";

import { Hero5 } from "@/components/landingpage/heroes";
import { CTA2 } from "@/components/landingpage/cta";
import { FAQ2 } from "@/components/landingpage/faq";
import { Stats2 } from "@/components/landingpage/stats";
import { Contact1 } from "@/components/landingpage/contact";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
export default function HomePage() {
  return (
    <div>
      <Hero5 />
      {/* <Stats2 /> */}
      <FAQ2 />
      <Contact1/>
      <CTA2 />
    </div>
  );
}
