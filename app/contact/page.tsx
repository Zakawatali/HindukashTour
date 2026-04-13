'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', tour: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to book your adventure? Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+92-1234-567890</p>
                  <p className="text-sm text-muted-foreground">Available 9AM-6PM PKT</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@hindustrek.pk</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Location</h3>
                  <p className="text-muted-foreground">Gilgit, Gilgit-Baltistan</p>
                  <p className="text-sm text-muted-foreground">Northern Pakistan</p>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-foreground mb-3">Response Times</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Emails: 24 hours</li>
                  <li>✓ Phone calls: Same day</li>
                  <li>✓ Inquiries: Within 48 hours</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92-3001234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Interested Tour
                      </label>
                      <select
                        name="tour"
                        value={formData.tour}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a tour</option>
                        <option value="rakaposhi">Rakaposhi Base Camp Trek</option>
                        <option value="hunza">Hunza Valley & Fairy Meadows</option>
                        <option value="siri-paye">Siri Paye Alpine Trek</option>
                        <option value="brogil">Brogil Pass Adventure</option>
                        <option value="custom">Custom Itinerary</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your adventure dreams..."
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the best time to trek?',
                  a: 'The ideal trekking season in northern Pakistan is June to September when weather is most stable. Each tour has specific seasonal recommendations.'
                },
                {
                  q: 'Do I need previous trekking experience?',
                  a: 'No! We offer treks for all fitness levels. Our guides assess your fitness and provide support throughout. We recommend basic fitness for moderate and challenging treks.'
                },
                {
                  q: 'How many people are in each group?',
                  a: 'We keep groups small (usually 4-8 people) for personalized attention and safety. This also minimizes environmental impact and enhances authenticity.'
                },
                {
                  q: 'Are costs all-inclusive?',
                  a: 'Yes, our quoted prices include accommodation, meals, guides, permits, and emergency support. International flights are not included but can be arranged.'
                },
                {
                  q: 'What about altitude sickness?',
                  a: 'We follow strict acclimatization schedules and provide medical support. Our guides are trained in altitude-related issues. Most people acclimatize well with proper preparation.'
                },
                {
                  q: 'Can I customize a tour?',
                  a: 'Absolutely! We specialize in custom expeditions tailored to your interests, fitness level, and timeframe. Contact us to discuss your requirements.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
