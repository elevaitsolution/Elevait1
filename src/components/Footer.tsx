import elevaitLogoWhite from '../assets/elevait_-_logo_in_white_.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={elevaitLogoWhite} alt="elevait" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Revenue growth partner for industrial, renewable tech, and SaaS companies.
              We help turn complex offerings into compelling narratives and predictable revenue.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Demand Generation</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Content Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f97316] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#f97316] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2024 Elevait. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#f97316] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
