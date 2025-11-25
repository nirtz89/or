'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    navAbout: 'About',
    navServices: 'Services',
    navPricing: 'Pricing',
    navGallery: 'Gallery',
    navContact: 'Contact',
    bassNews: 'BASS NEWS',
    heroTitle: 'Or Rozenfeld: Professional Bass Player in Berlin',
    heroBy: 'By Or Rozenfeld / Berlin, Germany',
    heroDescription: 'With years of experience in the music industry, I bring passion, skill, and dedication to every performance and lesson. Based in the vibrant music scene of Berlin, I\'m available for various musical projects, recording sessions, live performances, and educational opportunities.',
    readMore: 'READ MORE',
    services: 'SERVICES',
    bassToday: 'BASS TODAY:',
    servicesDescription: 'Whether you\'re looking to improve your bass playing through tutoring, seeking professional guidance through mentoring, or need a skilled bassist for your project or event, I\'m here to help. My approach combines technical excellence with musical creativity, tailored to your individual needs.',
    musiciansTitle: 'MUSICIANS FROM HERE PLAYING MUSIC FROM THERE',
    musiciansDescription: 'Based in Berlin\'s vibrant music scene, I collaborate with artists from diverse backgrounds and genres. My versatility allows me to adapt to various musical styles, bringing depth and groove to every project.',
    featuredServices: 'FEATURED SERVICES',
    bassTutoring: 'BASS TUTORING',
    tutoringDescription: 'Personalized bass lessons tailored to your skill level and goals. Learn technique, theory, and musicality in a supportive environment. All levels welcome - from beginners to advanced players.',
    readMoreLink: 'read more →',
    professionalMentoring: 'PROFESSIONAL MENTORING',
    mentoringDescription: 'Professional guidance for advancing bassists. Get insights into the music industry, career development, and artistic growth. Designed for intermediate to advanced players serious about their career.',
    getReady: 'GET READY',
    performanceGallery: 'PERFORMANCE GALLERY',
    image: 'IMAGE',
    bassForever: 'BASS FOREVER',
    tutoring: 'TUTORING',
    tutoringInfo: 'Fundamental techniques, music theory, groove development, and genre-specific styles. Personalized lessons for all skill levels in Berlin or online.',
    mentoring: 'MENTORING',
    mentoringInfo: 'Career strategy, professional network building, audition preparation, and artistic development for serious bassists pursuing professional careers.',
    booking: 'BOOKING',
    bookingInfo: 'Available for studio sessions, live performances, tours, and various musical projects. Professional, reliable, and versatile bassist based in Berlin.',
    contact: 'CONTACT',
    getInTouch: 'GET IN TOUCH',
    contactDescription: 'Interested in booking me for a project, scheduling a lesson, or starting a mentoring program? Fill out the form below and I\'ll get back to you as soon as possible.',
    footerText: 'Music is a universal language that connects us all. Through bass, I strive to create meaningful connections, inspire growth, and contribute to the vibrant musical community in Berlin and beyond.',
    pricing: 'PRICING',
    bassLessonPricing: 'BASS LESSON PRICING',
    pricingDescription: 'Flexible pricing options to suit your schedule and learning goals. All lessons are personalized to your skill level.',
    singleLesson: 'Single Lesson',
    perSession: '/ session',
    fourLessonPackage: '4-Lesson Package',
    eightLessonPackage: '8-Lesson Package',
    popular: 'POPULAR',
    perPackage: '/ package',
    save: 'Save',
    bookNow: 'BOOK NOW',
    pricingNote: '* All prices in EUR. Mentoring sessions available upon request.',
    customPackage: 'Need a custom package?',
    contactMe: 'Contact me',
    toDiscuss: 'to discuss your specific needs.',
    name: 'Name',
    email: 'Email',
    serviceInterested: 'Service Interested In',
    message: 'Message',
    sendMessage: 'SEND MESSAGE',
    thankYou: 'Thank you for your message!',
    willGetBack: 'I\'ll get back to you soon.',
    bookingPerformance: 'Booking / Performance',
    tutoringLessons: 'Tutoring / Lessons',
    mentoringOption: 'Mentoring',
    other: 'Other',
    placeholder: 'Tell me about your project, goals, or any questions you have...',
    musicSession: 'MUSIC SESSION',
    performance: 'PERFORMANCE',
    musicians: 'MUSICIANS',
    tutoringSession: 'TUTORING SESSION',
    mentoringSession: 'MENTORING SESSION',
    allRightsReserved: 'All rights reserved.',
    lesson60min: '60-minute personalized lesson',
    inPersonOnline: 'In-person (Berlin) or online',
    allLevels: 'All skill levels welcome',
    flexibleScheduling: 'Flexible scheduling',
    lessons4x: '4 x 60-minute lessons',
    structuredLearning: 'Structured learning path',
    progressTracking: 'Progress tracking',
    valid2Months: 'Valid for 2 months',
    lessons8x: '8 x 60-minute lessons',
    comprehensiveCurriculum: 'Comprehensive curriculum',
    regularReviews: 'Regular progress reviews',
    valid4Months: 'Valid for 4 months',
    bestValue: 'Best value option',
  },
  de: {
    navAbout: 'Über',
    navServices: 'Dienstleistungen',
    navPricing: 'Preise',
    navGallery: 'Galerie',
    navContact: 'Kontakt',
    bassNews: 'BASS NEWS',
    heroTitle: 'Or Rozenfeld: Professioneller Bassist in Berlin',
    heroBy: 'Von Or Rozenfeld / Berlin, Deutschland',
    heroDescription: 'Mit jahrelanger Erfahrung in der Musikbranche bringe ich Leidenschaft, Können und Hingabe in jede Aufführung und jede Unterrichtsstunde. Basierend in der lebendigen Musikszene Berlins bin ich für verschiedene Musikprojekte, Aufnahmesessions, Live-Auftritte und Bildungsmöglichkeiten verfügbar.',
    readMore: 'MEHR LESEN',
    services: 'DIENSTLEISTUNGEN',
    bassToday: 'BASS HEUTE:',
    servicesDescription: 'Ob Sie Ihr Bassspiel durch Unterricht verbessern möchten, professionelle Beratung durch Mentoring suchen oder einen erfahrenen Bassisten für Ihr Projekt oder Ihre Veranstaltung benötigen, ich bin hier, um zu helfen. Mein Ansatz kombiniert technische Exzellenz mit musikalischer Kreativität, maßgeschneidert auf Ihre individuellen Bedürfnisse.',
    musiciansTitle: 'MUSIKER VON HIER SPIELEN MUSIK VON DORT',
    musiciansDescription: 'Basierend in Berlins lebendiger Musikszene arbeite ich mit Künstlern aus verschiedenen Hintergründen und Genres zusammen. Meine Vielseitigkeit ermöglicht es mir, mich an verschiedene Musikstile anzupassen und jedem Projekt Tiefe und Groove zu verleihen.',
    featuredServices: 'AUSGEWÄHLTE DIENSTLEISTUNGEN',
    bassTutoring: 'BASS UNTERRICHT',
    tutoringDescription: 'Personalisierter Bassunterricht, der auf Ihr Können und Ihre Ziele zugeschnitten ist. Lernen Sie Technik, Theorie und Musikalität in einer unterstützenden Umgebung. Alle Niveaus willkommen - von Anfängern bis zu fortgeschrittenen Spielern.',
    readMoreLink: 'mehr lesen →',
    professionalMentoring: 'PROFESSIONELLES MENTORING',
    mentoringDescription: 'Professionelle Beratung für fortgeschrittene Bassisten. Erhalten Sie Einblicke in die Musikbranche, Karriereentwicklung und künstlerisches Wachstum. Entwickelt für mittlere bis fortgeschrittene Spieler, die ihre Karriere ernst nehmen.',
    getReady: 'BEREIT MACHEN',
    performanceGallery: 'AUFTRITTSGALERIE',
    image: 'BILD',
    bassForever: 'BASS FÜR IMMER',
    tutoring: 'UNTERRICHT',
    tutoringInfo: 'Grundlegende Techniken, Musiktheorie, Groove-Entwicklung und genrespezifische Stile. Personalisierter Unterricht für alle Könnensstufen in Berlin oder online.',
    mentoring: 'MENTORING',
    mentoringInfo: 'Karrierestrategie, Aufbau eines professionellen Netzwerks, Vorbereitung auf Vorspiele und künstlerische Entwicklung für ernsthafte Bassisten, die eine professionelle Karriere anstreben.',
    booking: 'BUCHUNG',
    bookingInfo: 'Verfügbar für Studio-Sessions, Live-Auftritte, Touren und verschiedene Musikprojekte. Professioneller, zuverlässiger und vielseitiger Bassist mit Sitz in Berlin.',
    contact: 'KONTAKT',
    getInTouch: 'KONTAKT AUFNEHMEN',
    contactDescription: 'Interessiert daran, mich für ein Projekt zu buchen, eine Unterrichtsstunde zu planen oder ein Mentoring-Programm zu starten? Füllen Sie das untenstehende Formular aus und ich melde mich so schnell wie möglich bei Ihnen.',
    footerText: 'Musik ist eine universelle Sprache, die uns alle verbindet. Durch Bass strebe ich danach, bedeutungsvolle Verbindungen zu schaffen, Wachstum zu inspirieren und zur lebendigen Musikgemeinschaft in Berlin und darüber hinaus beizutragen.',
    pricing: 'PREISE',
    bassLessonPricing: 'BASS UNTERRICHTS PREISE',
    pricingDescription: 'Flexible Preisoptionen, die zu Ihrem Zeitplan und Ihren Lernzielen passen. Alle Unterrichtsstunden sind auf Ihr Können zugeschnitten.',
    singleLesson: 'Einzelstunde',
    perSession: '/ Stunde',
    fourLessonPackage: '4-Stunden Paket',
    eightLessonPackage: '8-Stunden Paket',
    popular: 'BELIEBT',
    perPackage: '/ Paket',
    save: 'Sparen',
    bookNow: 'JETZT BUCHEN',
    pricingNote: '* Alle Preise in EUR. Mentoring-Sessions auf Anfrage verfügbar.',
    customPackage: 'Benötigen Sie ein individuelles Paket?',
    contactMe: 'Kontaktieren Sie mich',
    toDiscuss: 'um Ihre spezifischen Bedürfnisse zu besprechen.',
    name: 'Name',
    email: 'E-Mail',
    serviceInterested: 'Interessierte Dienstleistung',
    message: 'Nachricht',
    sendMessage: 'NACHRICHT SENDEN',
    thankYou: 'Vielen Dank für Ihre Nachricht!',
    willGetBack: 'Ich melde mich bald bei Ihnen.',
    bookingPerformance: 'Buchung / Auftritt',
    tutoringLessons: 'Unterricht / Stunden',
    mentoringOption: 'Mentoring',
    other: 'Sonstiges',
    placeholder: 'Erzählen Sie mir von Ihrem Projekt, Ihren Zielen oder Fragen, die Sie haben...',
    musicSession: 'MUSIK SESSION',
    performance: 'AUFTRITT',
    musicians: 'MUSIKER',
    tutoringSession: 'UNTERRICHTS SESSION',
    mentoringSession: 'MENTORING SESSION',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    lesson60min: '60-minütige personalisierte Unterrichtsstunde',
    inPersonOnline: 'Persönlich (Berlin) oder online',
    allLevels: 'Alle Könnensstufen willkommen',
    flexibleScheduling: 'Flexible Terminplanung',
    lessons4x: '4 x 60-minütige Unterrichtsstunden',
    structuredLearning: 'Strukturierter Lernweg',
    progressTracking: 'Fortschrittsverfolgung',
    valid2Months: 'Gültig für 2 Monate',
    lessons8x: '8 x 60-minütige Unterrichtsstunden',
    comprehensiveCurriculum: 'Umfassender Lehrplan',
    regularReviews: 'Regelmäßige Fortschrittsbesprechungen',
    valid4Months: 'Gültig für 4 Monate',
    bestValue: 'Beste Preis-Leistungs-Option',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'de')) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

