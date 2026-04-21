import { Lightbulb, Megaphone, Globe, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Brand Story',
      color: 'from-blue-500 to-blue-600',
      items: [
        { label: 'Brand DNA', desc: 'Building the brand DNA & go-to-market story' },
        { label: 'Brand Book', desc: 'Creating identity, logo, templates & guidelines' }
      ]
    },
    {
      icon: Megaphone,
      title: 'Demand Generation',
      color: 'from-orange-500 to-orange-600',
      items: [
        { label: 'Multi-Channel Campaigns', desc: 'Google, Facebook, LinkedIn, programmatic' },
        { label: 'LinkedIn Lead Gen', desc: 'B2B marketing and enterprise outreach' },
        { label: 'CRM & Automation', desc: 'Personalized campaigns and nurturing sequences' }
      ]
    },
    {
      icon: Globe,
      title: 'Web Assets Creation',
      color: 'from-blue-600 to-blue-700',
      items: [
        { label: 'Website Development', desc: 'End-to-end creation for lead generation' },
        { label: 'SEO/GEO & Content', desc: 'Organic visibility and thought leadership' },
        { label: 'Video Production', desc: 'AI-generated product and brand storytelling' }
      ]
    },
    {
      icon: Users,
      title: 'Brand Advocacy',
      color: 'from-orange-600 to-orange-700',
      items: [
        { label: 'Influencer Management', desc: 'Strategic partnerships and content creation' },
        { label: 'Social Media', desc: 'Active community management across platforms' },
        { label: 'PR & Events', desc: 'Industry events, roundtables, and conferences' }
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="text-[#f97316]">Growth Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From brand strategy to demand generation, we provide end-to-end marketing solutions
            tailored for industrial, renewable tech, and SaaS companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[#f97316] transition-all duration-300 overflow-hidden group hover:shadow-xl"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-1">elevait</div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg group-hover:bg-orange-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#1e3a8a] text-white rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:bg-[#f97316] transition-colors">
                        {String(itemIdx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
