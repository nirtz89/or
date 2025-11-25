"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSheetOpen(false);
  };

  const navItems = [
    { id: "about", labelKey: "navAbout" },
    { id: "services", labelKey: "navServices" },
    { id: "pricing", labelKey: "navPricing" },
    { id: "gallery", labelKey: "navGallery" },
    { id: "contact", labelKey: "navContact" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gold cursor-pointer hover:text-white transition-colors"
            >
              OR ROZENFELD
            </button>
          </div>
          <div className="flex items-center space-x-2 md:space-x-6">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2 text-sm font-semibold transition-all uppercase tracking-wider text-white hover:text-gold hover:border-b-2 hover:border-gold"
                  >
                    {t(item.labelKey)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 border-l border-gold/30 pl-2 md:pl-6">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm font-semibold uppercase transition-colors ${
                  language === "en"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage("de")}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm font-semibold uppercase transition-colors ${
                  language === "de"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                DE
              </button>
            </div>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden ml-2 p-2 text-gold hover:text-white transition-colors"
                  aria-label="Toggle menu"
                  type="button"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black border-gold/30 text-white w-[300px] sm:w-[400px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-gold text-xl font-serif font-bold">
                    {t("navMenu") || "MENU"}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <SheetClose key={item.id} asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-3 text-base font-semibold uppercase tracking-wider text-left text-white rounded-md w-full focus:outline-none active:outline-none"
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onFocus={(e) => e.target.blur()}
                      >
                        {t(item.labelKey)}
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
