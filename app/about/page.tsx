import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Hindukash Trek and Tour',
  description: 'Learn about our mission, values, and commitment to providing exceptional mountain trekking experiences in northern Pakistan.',
  openGraph: {
    title: 'About Us | Hindukash Trek and Tour',
    description: 'Learn about our mission and commitment to mountain adventure tourism.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
              About Hindukash Trek
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for authentic mountain adventures
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              To provide transformative mountain experiences that connect travelers with the pristine wilderness, vibrant cultures, and warm hospitality of northern Pakistan. We are committed to responsible tourism that benefits local communities and preserves the environment for future generations.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-foreground">Our Values</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Safety & Responsibility',
                  description: 'Your safety is paramount. We maintain strict safety protocols, provide comprehensive insurance, and employ experienced guides trained in emergency procedures.'
                },
                {
                  title: 'Authenticity',
                  description: 'We create genuine experiences that connect you with local communities, cultures, and pristine landscapes without exploitation or degradation.'
                },
                {
                  title: 'Sustainability',
                  description: 'We practice Leave No Trace principles and actively support environmental conservation and local community development initiatives.'
                },
                {
                  title: 'Integrity',
                  description: 'Transparent pricing, honest communication, and unwavering commitment to delivering exactly what we promise, every time.'
                }
              ].map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-foreground">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: '🏔️', title: 'Mountain Expertise', desc: 'Decades of combined experience in Hindu Kush expeditions' },
                { icon: '👥', title: 'Local Knowledge', desc: 'Deep connections with communities and intimate knowledge of regions' },
                { icon: '✅', title: 'Proven Track Record', desc: '100+ successful expeditions with 4.8+ ratings' },
                { icon: '🛡️', title: 'Comprehensive Support', desc: 'Medical backup, emergency evacuation, and 24/7 support' },
                { icon: '🌍', title: 'Sustainable Practices', desc: 'Committed to environmental conservation and community benefit' },
                { icon: '📱', title: 'Responsive Service', desc: 'Quick responses to inquiries and flexible customization' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Team</h2>
            <p className="text-muted-foreground mb-6">
              Our guides are not just mountaineers—they are storytellers, environmentalists, and ambassadors for their communities. Each brings personal passion for the mountains combined with professional expertise in safety and hospitality.
            </p>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="font-semibold text-foreground mb-2">Lead Guides</p>
              <p className="text-muted-foreground mb-4">
                With 15+ years of mountain experience and certifications in wilderness first aid, rescue operations, and environmental management
              </p>
              <p className="font-semibold text-foreground mb-2">Support Staff</p>
              <p className="text-muted-foreground">
                Carefully trained porters and camp staff committed to your comfort and safety throughout the expedition
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
