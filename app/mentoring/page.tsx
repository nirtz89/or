export default function Mentoring() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12 sm:py-16 md:py-20 border-b border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">MENTORING</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gold">
            PROFESSIONAL MENTORING
          </h1>
          
          <div className="max-w-4xl space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-300 mb-8 sm:mb-10 md:mb-12">
            <p>
              For bassists who are ready to take their career to the next level, 
              I offer professional mentoring services. Get personalized guidance 
              on navigating the music industry, developing your artistic voice, 
              and building a sustainable career as a professional musician.
            </p>
            
            <div className="border-l-2 border-gold pl-4 sm:pl-6 mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                MENTORING FOCUS AREAS
              </h2>
              <ul className="space-y-2 sm:space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Career strategy and goal setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Building a professional network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Audition preparation and performance skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Studio work and recording techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Live performance and stage presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Musical direction and artistic development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Business aspects of being a professional musician</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base">Portfolio development and self-promotion</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                WHO CAN BENEFIT
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
                My mentoring program is designed for intermediate to advanced bassists 
                who are serious about pursuing a professional career. Whether you're 
                transitioning from amateur to professional, looking to break into 
                specific genres or scenes, or seeking guidance on specific career 
                challenges, I can provide the insights and support you need.
              </p>
            </div>

            <div className="border border-gold p-4 sm:p-6 md:p-8 mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 text-gold">
                MENTORING FORMAT
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[120px]">Sessions:</span>
                  <span className="text-sm sm:text-base">One-on-one mentoring sessions tailored to your needs</span>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[120px]">Location:</span>
                  <span className="text-sm sm:text-base">Berlin or online consultations</span>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-start">
                  <span className="font-semibold text-gold mb-1 sm:mb-0 sm:mr-4 sm:min-w-[120px]">Approach:</span>
                  <span className="text-sm sm:text-base">Customized program based on your goals and current situation</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-12">
              <a
                href="/booking"
                className="inline-block border border-gold text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors w-full sm:w-auto text-center"
              >
                START YOUR MENTORING JOURNEY
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

