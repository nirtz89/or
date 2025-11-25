export default function Tutoring() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 border-b border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm uppercase tracking-widest mb-4">TUTORING</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-gold">
            BASS TUTORING
          </h1>
          
          <div className="max-w-4xl space-y-8 text-lg leading-relaxed text-gray-300 mb-12">
            <p>
              Whether you're a complete beginner or looking to refine your skills, 
              I offer personalized bass lessons tailored to your individual needs 
              and musical goals.
            </p>
            
            <div className="border-l-2 border-gold pl-6 mt-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gold">
                WHAT I OFFER
              </h2>
              <ul className="space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Fundamental techniques and proper posture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Music theory and reading notation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Groove and rhythm development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Fingerstyle and pick technique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Slap bass and advanced techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Improvisation and soloing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Genre-specific styles (jazz, rock, funk, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Ear training and musicality</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gold">
                TEACHING APPROACH
              </h2>
              <p className="leading-relaxed">
                My teaching philosophy is centered around creating a supportive and 
                encouraging environment where students can explore their musical potential. 
                I believe in building a strong foundation while keeping lessons engaging 
                and fun. Each lesson is customized to match your learning style and pace.
              </p>
            </div>

            <div className="border border-gold p-8 mt-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-gold">
                LESSON DETAILS
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[100px]">Location:</span>
                  <span>Berlin (in-person) or online sessions available</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[100px]">Duration:</span>
                  <span>Flexible lesson lengths to suit your schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gold mr-4 min-w-[100px]">Level:</span>
                  <span>All levels welcome - beginners to advanced</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <a
                href="/booking"
                className="inline-block border border-gold text-white px-12 py-4 font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
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

