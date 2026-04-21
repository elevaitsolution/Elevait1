import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f97316] to-transparent opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="text-[#f97316]">B2B Marketing?</span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Let's discuss how Elevait can help you turn complex offerings into compelling narratives
            and drive predictable revenue growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] text-white placeholder-blue-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] text-white placeholder-blue-200"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] text-white placeholder-blue-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] text-white placeholder-blue-200"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Tell us about your goals</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] text-white placeholder-blue-200 resize-none"
                placeholder="What are your marketing challenges and objectives?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <div className="text-sm text-blue-200">Email us</div>
                <div className="font-semibold">contact@elevait.com</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <div className="text-sm text-blue-200">Call us</div>
                <div className="font-semibold">+91 9910831668</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
