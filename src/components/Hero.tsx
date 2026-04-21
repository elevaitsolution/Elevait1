import { ArrowRight } from 'lucide-react';
import elevaitLogoWhite from '../assets/elevait_-_logo_in_white_.png';

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f97316] to-transparent opacity-20 transform skew-x-12"></div>

      <nav className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-2 flex items-center justify-between">
        <img
          src={elevaitLogoWhite}
          alt="elevait"
          className="h-10 w-auto object-contain"
        />
      </nav>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-10 sm:pb-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">

          {/* Left column */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-snug mb-4">
                We are your Revenue Growth Partner for{' '}
                <span className="text-[#f97316]">Industrial, Energy Tech and SaaS</span>{' '}
                — helping you win through Positioning, Marketing and Learning.
              </h1>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6 font-light max-w-xl">
                Elevait turns complex offerings into compelling narratives and predictable revenue
                through AI-powered content and demand generation.
              </p>

              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#f97316] mb-0.5">100+</div>
                <div className="text-xs text-blue-200 leading-snug">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#f97316] mb-0.5">50+</div>
                <div className="text-xs text-blue-200 leading-snug">Global Brands Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#f97316] mb-0.5">300+</div>
                <div className="text-xs text-blue-200 leading-snug">Campaigns Delivered</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-[420px] flex-shrink-0">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-[#f97316] rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl h-full flex flex-col justify-center gap-4">
                {[
                  { n: '1', title: 'Brand DNA & Story', desc: 'Building compelling narratives that resonate with your audience' },
                  { n: '2', title: 'Demand Generation', desc: 'Multi-channel campaigns designed to attract and convert' },
                  { n: '3', title: 'Measurable Results', desc: 'Data-driven optimization with transparent ROI reporting' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">{n}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{title}</h3>
                      <p className="text-xs text-blue-200 leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
