'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', labelKey: 'navAbout' },
    { id: 'services', labelKey: 'navServices' },
    { id: 'pricing', labelKey: 'navPricing' },
    { id: 'gallery', labelKey: 'navGallery' },
    { id: 'contact', labelKey: 'navContact' },
  ]

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-serif font-bold text-gold cursor-pointer hover:text-white transition-colors"
            >
              OR ROZENFELD
            </button>
          </div>
          <div className="flex items-center space-x-6">
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
            <div className="flex items-center space-x-2 border-l border-gold/30 pl-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold uppercase transition-colors ${
                  language === 'en' ? 'text-gold' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm font-semibold uppercase transition-colors ${
                  language === 'de' ? 'text-gold' : 'text-gray-400 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

