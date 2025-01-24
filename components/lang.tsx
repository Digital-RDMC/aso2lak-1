"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import i18n from "@/i18n";
import { ChevronDown } from "lucide-react";




const LANGUAGES = [
  { id: "en", name: "English", flag: "/images/us.png" },
  { id: "ar", name: "عربي", flag: "/images/eg.png" },
  { id: "fr", name: "French", flag: "/images/fr.png" },
];

export default function Language({onlyIcon} : {onlyIcon?: boolean}) {
  const [selectedLang, setSelectedLang] = useState<string>("en");

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
   
  };

  const getCurrentLanguage = LANGUAGES.find((lang) => lang.id === selectedLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-transparent border-0 shadow-none flex items-center gap-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-transparent">
          <Image
            src={getCurrentLanguage?.flag || ""}
            alt={`${getCurrentLanguage?.name} Flag`}
            width={20}
            height={20}
          />
          { !onlyIcon && (getCurrentLanguage?.name || "Select Language")}
         
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {LANGUAGES.map((lang) => (
          <DropdownMenuCheckboxItem
            key={lang.id}
            checked={selectedLang === lang.id}
            onCheckedChange={() => handleLanguageChange(lang.id)}
          >
            <div className="w-full flex items-center justify-between">
              <span>{lang.name}</span>
              <Image
                src={lang.flag}
                alt={`${lang.name} Flag`}
                width={20}
                height={20}
              />
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
