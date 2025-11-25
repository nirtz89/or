'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'booking',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to an API endpoint
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', service: 'booking', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12 sm:py-16 md:py-20 border-b border-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">BOOKING</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gold">
            GET IN TOUCH
          </h1>
          
          <div className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8 sm:mb-10 md:mb-12">
            <p>
              Interested in booking me for a project, scheduling a lesson, or 
              starting a mentoring program? Fill out the form below and I'll get 
              back to you as soon as possible.
            </p>
          </div>

          <div className="border border-gold p-4 sm:p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="text-gold text-lg sm:text-xl font-semibold mb-2">
                  Thank you for your message!
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  >
                    <option value="booking">Booking / Performance</option>
                    <option value="tutoring">Tutoring / Lessons</option>
                    <option value="mentoring">Mentoring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold text-white text-sm sm:text-base focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none"
                    placeholder="Tell me about your project, goals, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-gold text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 border border-gold p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-gold">
              OTHER WAYS TO REACH ME
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              You can also reach out through social media or email directly. 
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

