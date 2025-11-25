export default function Tutoring() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12 sm:py-16 md:py-20 border-b border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">TUTORING</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gold">
            BASS TUTORING
          </h1>
          
          <div className="max-w-4xl space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-300 mb-8 sm:mb-10 md:mb-12">
            <p>
              Whether you're a complete beginner or looking to refine your skills, 
              I offer personalized bass lessons tailored to your individual needs 
              and musical goals.
            </p>
            
            <div className="border-l-2 border-gold pl-4 sm:pl-6 mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                WHAT I OFFER
              </h2>
              <ul className="space-y-2 sm:space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Fundamental techniques and proper posture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Music theory and reading notation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Groove and rhythm development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Fingerstyle and pick technique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Slap bass and advanced techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Improvisation and soloing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Genre-specific styles (jazz, rock, funk, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Ear training and musicality</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                TEACHING APPROACH
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
                My teaching philosophy is centered around creating a supportive and 
                encouraging environment where students can explore their musical potential. 
                I believe in building a strong foundation while keeping lessons engaging 
                and fun. Each lesson is customized to match your learning style and pace.
              </p>
            </div>

            <div className="border border-gold p-4 sm:p-6 md:p-8 mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                LESSON DETAILS
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[100px]">Location:</span>
                  <span className="text-sm sm:text-base">Berlin (in-person) or online sessions available</span>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[100px]">Duration:</span>
                  <span className="text-sm sm:text-base">Flexible lesson lengths to suit your schedule</span>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[100px]">Level:</span>
                  <span className="text-sm sm:text-base">All levels welcome - beginners to advanced</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-12">
              <a
                href="/booking"
                className="inline-block border border-gold text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors w-full sm:w-auto text-center"
              >
                BOOK A LESSON
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

