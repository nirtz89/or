export default function Mentoring() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 border-b border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm uppercase tracking-widest mb-4">MENTORING</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-gold">
            PROFESSIONAL MENTORING
          </h1>
          
          <div className="max-w-4xl space-y-8 text-lg leading-relaxed text-gray-300 mb-12">
            <p>
              For bassists who are ready to take their career to the next level, 
              I offer professional mentoring services. Get personalized guidance 
              on navigating the music industry, developing your artistic voice, 
              and building a sustainable career as a professional musician.
            </p>
            
            <div className="border-l-2 border-gold pl-6 mt-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gold">
                MENTORING FOCUS AREAS
              </h2>
              <ul className="space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Career strategy and goal setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Building a professional network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Audition preparation and performance skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Studio work and recording techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Live performance and stage presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Musical direction and artistic development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Business aspects of being a professional musician</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Portfolio development and self-promotion</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gold">
                WHO CAN BENEFIT
              </h2>
              <p className="leading-relaxed">
                My mentoring program is designed for intermediate to advanced bassists 
                who are serious about pursuing a professional career. Whether you're 
                transitioning from amateur to professional, looking to break into 
                specific genres or scenes, or seeking guidance on specific career 
                challenges, I can provide the insights and support you need.
              </p>
            </div>

            <div className="border border-gold p-8 mt-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-gold">
                MENTORING FORMAT
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[120px]">Sessions:</span>
                  <span>One-on-one mentoring sessions tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[120px]">Location:</span>
                  <span>Berlin or online consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[120px]">Approach:</span>
                  <span>Customized program based on your goals and current situation</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <a
                href="/booking"
                className="inline-block border border-gold text-white px-12 py-4 font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
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

