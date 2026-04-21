import { Target, Users, BarChart3, Layers, Search, Mail, Linkedin, Globe } from 'lucide-react';

export default function ABM() {
  const phases = [
    {
      number: '01',
      title: 'Account Intelligence & Selection',
      description: 'We identify and prioritize your ideal accounts using firmographic data, intent signals, and technographic insights — building a precise target list of high-value companies.',
      icon: Search,
      items: ['ICP definition & account scoring', 'Intent data & buying signal tracking', 'Firmographic & technographic profiling', 'Account tiering (Tier 1 / 2 / 3)']
    },
    {
      number: '02',
      title: 'Personalized Content & Messaging',
      description: 'We craft account-specific narratives, landing pages, and assets that speak directly to each target\'s pain points, industry context, and buying stage.',
      icon: Layers,
      items: ['Account-specific landing pages', 'Personalized email sequences', 'Industry-tailored content assets', 'Executive-level messaging frameworks']
    },
    {
      number: '03',
      title: 'Multi-Channel Orchestration',
      description: 'We activate coordinated campaigns across LinkedIn, programmatic display, email, and outbound to ensure your brand reaches key decision-makers at every touchpoint.',
      icon: Globe,
      items: ['LinkedIn Matched Audiences & InMail', 'Programmatic display retargeting', 'Outbound email & SDR enablement', 'Direct mail & event-based activation']
    },
    {
      number: '04',
      title: 'Measurement & Revenue Attribution',
      description: 'We track account engagement, pipeline influence, and revenue attribution — giving you full visibility into which accounts are moving through the funnel.',
      icon: BarChart3,
      items: ['Account engagement scoring', 'Pipeline & revenue attribution', 'CRM integration & reporting dashboards', 'Quarterly business reviews & optimization']
    }
  ];

  const channels = [
    { icon: Linkedin, label: 'LinkedIn Ads & InMail' },
    { icon: Mail, label: 'Personalized Email' },
    { icon: Globe, label: 'Programmatic Display' },
    { icon: Target, label: 'Intent-Based Targeting' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0f2357] via-[#1e3a8a] to-[#1e40af] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#f97316] to-transparent opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
            <Target className="w-4 h-4 text-[#f97316]" />
            <span>Account-Based Marketing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Win the Accounts That{' '}
            <span className="text-[#f97316]">Matter Most</span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            ABM flips the traditional marketing funnel. Instead of casting a wide net, we identify your highest-value target accounts and orchestrate highly personalized campaigns to engage the right decision-makers — shortening sales cycles and increasing deal sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/12 hover:border-[#f97316]/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#f97316]/20 border border-[#f97316]/30 rounded-xl flex items-center justify-center group-hover:bg-[#f97316]/30 transition-colors">
                      <Icon className="w-6 h-6 text-[#f97316]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#f97316] tracking-widest mb-1">PHASE {phase.number}</div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                </div>

                <p className="text-blue-100 leading-relaxed mb-5 text-sm">
                  {phase.description}
                </p>

                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-blue-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Why ABM for{' '}
                <span className="text-[#f97316]">Industrial, Energy Tech & SaaS?</span>
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Complex, long sales cycles. Multiple stakeholders. High-value deals. These are the realities of B2B industrial, energy tech, and SaaS — and exactly why ABM outperforms traditional demand generation. Rather than generating volume, ABM generates precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#f97316] mb-1">3x</div>
                  <div className="text-sm text-blue-200">Higher deal close rates vs. traditional outbound</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#f97316] mb-1">208%</div>
                  <div className="text-sm text-blue-200">More pipeline revenue attributed to ABM programs</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#f97316] mb-1">50%</div>
                  <div className="text-sm text-blue-200">Reduction in wasted marketing spend</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#f97316] mb-1">67%</div>
                  <div className="text-sm text-blue-200">Improvement in sales & marketing alignment</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5 text-white">Channels We Activate</h4>
              <div className="space-y-3 mb-8">
                {channels.map((ch, i) => {
                  const Icon = ch.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                      <div className="w-10 h-10 bg-[#f97316]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <span className="font-medium text-white">{ch.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-start gap-3 bg-[#f97316]/10 border border-[#f97316]/30 rounded-xl p-5">
                <Users className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-100 leading-relaxed">
                  We align marketing and sales around the same target accounts, enabling seamless handoffs and a consistent buyer experience from first touch to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
