import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-lg font-bold mb-4">Towards North</h3>
          <p className="text-sm opacity-90">
            Your gateway to authentic mountain adventures in the Hindu Kush and beyond.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tours" className="hover:opacity-80 transition">Tours</Link></li>
            <li><Link href="/destinations" className="hover:opacity-80 transition">Destinations</Link></li>
            <li><Link href="/about" className="hover:opacity-80 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:opacity-80 transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 flex-shrink-0" />
              <span>+92-1234-567890</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 flex-shrink-0" />
              <span>info@hindustrek.pk</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>Gilgit, Gilgit-Baltistan</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:opacity-80 transition">Facebook</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Instagram</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Twitter</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-primary-foreground/20 px-4 py-6 text-center text-sm opacity-75">
        <p>&copy; 2024 Towards North. All rights reserved.</p>
      </div>
    </footer>
  )
}
