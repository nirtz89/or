"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top News Section */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 border-b border-gold/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
                {t("bassNews")}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-4 sm:mb-6 leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                {t("heroBy")}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                {t("heroDescription")}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gold text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all w-full sm:w-auto"
              >
                {t("readMore")}
              </button>
            </div>
            <div className="border-2 border-gold p-3">
              <div className="bg-gray-900 aspect-[4/5] flex items-center justify-center border border-gold/30">
                <span className="text-gray-500 text-sm">BASS PLAYER IMAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              {t("services")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 sm:mb-4">
              {t("bassToday")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-2xl">
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">
                {t("servicesDescription")}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gold text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all w-full sm:w-auto"
              >
                {t("readMore")}
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-2 border-gold/50 p-3">
                <div className="bg-gray-900 aspect-[4/3] flex items-center justify-center border border-gold/20">
                  <span className="text-gray-400 text-sm font-medium">
                    {t("musicSession")}
                  </span>
                </div>
              </div>
              <div className="border-2 border-gold/50 p-3">
                <div className="bg-gray-900 aspect-[4/3] flex items-center justify-center border border-gold/20">
                  <span className="text-gray-400 text-sm font-medium">
                    {t("performance")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/30 pt-12 sm:pt-16 md:pt-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="border-2 border-gold/50 p-2 sm:p-3">
                <div className="bg-gray-900 aspect-[4/3] flex items-center justify-center border border-gold/20 mb-4 sm:mb-6">
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {t("musicians")}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  {t("musiciansTitle")}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  {t("musiciansDescription")}
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gold text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all w-full sm:w-auto"
                >
                  {t("readMore")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 sm:py-16 md:py-24 bg-black border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              {t("services")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 sm:mb-4">
              {t("featuredServices")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-gray-950 p-4 sm:p-6 md:p-8 border-2 border-gold/30 hover:border-gold transition-all">
              <div className="border-2 border-gold/50 p-2 sm:p-3 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-gray-900 aspect-[4/3] flex items-center justify-center border border-gold/20">
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {t("tutoringSession")}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                {t("bassTutoring")}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t("tutoringDescription")}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gold uppercase text-xs sm:text-sm font-semibold tracking-wider hover:text-white transition-colors"
              >
                {t("readMoreLink")}
              </button>
            </div>
            <div className="bg-gray-950 p-4 sm:p-6 md:p-8 border-2 border-gold/30 hover:border-gold transition-all">
              <div className="border-2 border-gold/50 p-2 sm:p-3 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-gray-900 aspect-[4/3] flex items-center justify-center border border-gold/20">
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {t("mentoringSession")}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                {t("professionalMentoring")}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t("mentoringDescription")}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gold uppercase text-xs sm:text-sm font-semibold tracking-wider hover:text-white transition-colors"
              >
                {t("readMoreLink")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-12 sm:py-16 md:py-24 bg-gray-950 border-t border-gold/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              {t("getReady")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 sm:mb-4">
              {t("performanceGallery")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-2 border-gold/50 p-2 hover:border-gold transition-all"
              >
                <div className="bg-gray-900 aspect-square flex items-center justify-center border border-gold/20">
                  <span className="text-gray-400 text-xs font-medium">
                    {t("image")} {i}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-12 sm:py-16 md:py-24 bg-black border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-8 sm:mb-12 md:mb-16 text-center">
            {t("bassForever")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-950 p-6 sm:p-8 md:p-10 border-2 border-gold/30 text-center hover:border-gold transition-all">
              <div className="text-gold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                🎸
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                {t("tutoring")}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {t("tutoringInfo")}
              </p>
            </div>
            <div className="bg-gray-950 p-6 sm:p-8 md:p-10 border-2 border-gold/30 text-center hover:border-gold transition-all">
              <div className="text-gold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                🎯
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                {t("mentoring")}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {t("mentoringInfo")}
              </p>
            </div>
            <div className="bg-gray-950 p-6 sm:p-8 md:p-10 border-2 border-gold/30 text-center hover:border-gold transition-all">
              <div className="text-gold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                🎵
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                {t("booking")}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {t("bookingInfo")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-12 sm:py-16 md:py-24 bg-black border-t border-gold/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              {t("pricing")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 sm:mb-4">
              {t("bassLessonPricing")}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t("pricingDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Single Lesson */}
            <div className="bg-gray-950 p-4 sm:p-6 md:p-8 border-2 border-gold/30 hover:border-gold transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                {t("singleLesson")}
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gold">
                  €60
                </span>
                <span className="text-gray-400 ml-2 text-sm sm:text-base">
                  {t("perSession")}
                </span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("lesson60min")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("inPersonOnline")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("allLevels")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("flexibleScheduling")}</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full border-2 border-gold text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all"
              >
                {t("bookNow")}
              </button>
            </div>

            {/* 4-Lesson Package */}
            <div className="bg-gray-950 p-4 sm:p-6 md:p-8 border-2 border-gold relative hover:border-gold transition-all">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold text-black px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold uppercase">
                  {t("popular")}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wide mt-3 sm:mt-4">
                {t("fourLessonPackage")}
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gold">
                  €220
                </span>
                <span className="text-gray-400 ml-2 text-sm sm:text-base">
                  {t("perPackage")}
                </span>
              </div>
              <div className="mb-3 sm:mb-4">
                <span className="text-gray-400 line-through text-sm sm:text-base">
                  €240
                </span>
                <span className="text-gold ml-2 text-xs sm:text-sm">
                  {t("save")} €20
                </span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("lessons4x")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("inPersonOnline")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("structuredLearning")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("progressTracking")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("valid2Months")}</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gold text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-white transition-all"
              >
                {t("bookNow")}
              </button>
            </div>

            {/* 8-Lesson Package */}
            <div className="bg-gray-950 p-4 sm:p-6 md:p-8 border-2 border-gold/30 hover:border-gold transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                {t("eightLessonPackage")}
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gold">
                  €400
                </span>
                <span className="text-gray-400 ml-2 text-sm sm:text-base">
                  {t("perPackage")}
                </span>
              </div>
              <div className="mb-3 sm:mb-4">
                <span className="text-gray-400 line-through text-sm sm:text-base">
                  €480
                </span>
                <span className="text-gold ml-2 text-xs sm:text-sm">
                  {t("save")} €80
                </span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("lessons8x")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("inPersonOnline")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("comprehensiveCurriculum")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("regularReviews")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("valid4Months")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">
                    •
                  </span>
                  <span>{t("bestValue")}</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full border-2 border-gold text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all"
              >
                {t("bookNow")}
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              {t("pricingNote")}
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              {t("customPackage")}{" "}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gold hover:text-white underline"
              >
                {t("contactMe")}
              </button>{" "}
              {t("toDiscuss")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-24 bg-gray-950 border-t border-gold/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              {t("contact")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 sm:mb-4">
              {t("getInTouch")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg px-4">
              {t("contactDescription")}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 md:py-16 bg-black border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold mb-6 sm:mb-8 text-center">
            {t("bassForever")}
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base md:text-lg px-4">
            {t("footerText")}
          </p>
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-6 sm:mb-8 md:mb-10">
            <a
              href="#"
              className="text-gold hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gold hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gold hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Or Rozenfeld. {t("allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    service: "booking",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", service: "booking", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-10 md:py-12 border-2 border-gold/50 p-6 sm:p-8 md:p-10 bg-gray-900">
        <div className="text-gold text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
          {t("thankYou")}
        </div>
        <p className="text-gray-300 text-sm sm:text-base">{t("willGetBack")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-6 border-2 border-gold/50 p-4 sm:p-6 md:p-10 bg-gray-900"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider"
        >
          {t("name")} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black border-2 border-gold/30 text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider"
        >
          {t("email")} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black border-2 border-gold/30 text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider"
        >
          {t("serviceInterested")} *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black border-2 border-gold/30 text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
        >
          <option value="booking">{t("bookingPerformance")}</option>
          <option value="tutoring">{t("tutoringLessons")}</option>
          <option value="mentoring">{t("mentoringOption")}</option>
          <option value="other">{t("other")}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider"
        >
          {t("message")} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-black border-2 border-gold/30 text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none transition-all"
          placeholder={t("placeholder")}
        />
      </div>

      <button
        type="submit"
        className="w-full border-2 border-gold text-white px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-gold hover:text-black transition-all"
      >
        {t("sendMessage")}
      </button>
    </form>
  );
}
