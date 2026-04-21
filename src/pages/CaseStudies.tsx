import { ArrowLeft, BarChart3, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import elevaitLogoWhite from '../assets/elevait_-_logo_in_white_.png';
import fireflyLogo from '../assets/All_clients_logo-40.png';
import ingramLogo from '../assets/All_clients_logo-11.png';

const caseStudies = [
  {
    id: 'firefly',
    company: 'FireFly Networks',
    industry: 'Telecom & Wi-Fi Solutions',
    tagline: 'SEO & Digital Authority',
    color: 'from-[#1e3a8a] to-[#2563eb]',
    logo: fireflyLogo,
    objective: {
      challenge: 'Transform a static, single-page website into a dynamic digital platform to establish credibility in the telecommunications space.',
      goal: 'Improve look and feel, build digital authority, increase organic traffic, and position as a leading neutral-host Wifi solutions provider.',
    },
    whatWeDid: [
      'Executed a complete website revamp, converting to a responsive, multi-page dynamic platform.',
      'Integrated a robust blog system and published 17 targeted articles on Wi-Fi security and indoor solutions.',
      'Implemented comprehensive technical SEO, including PHP conversion, new hosting, and speed optimization.',
      'Added conversion elements like floating enquiry buttons, exit popups, and automated emails.',
    ],
    whatWeAchieved: [
      'Achieved a Domain Authority of 12 (from zero) with 12 linking domains within 9 months.',
      'Optimized website performance to achieve a fast 1-second opening time.',
      'Increased average search position to 20.7 and boosted click-through rate (CTR) by 11.4%.',
      'Made organic search the primary traffic source (after direct traffic), driving 1.38K average monthly clicks.',
      'Positioned FireFly as a thought leader through strategic content sharing on LinkedIn and Twitter.',
    ],
    metrics: [
      { value: 'DA 12', label: 'Domain Authority' },
      { value: '11.4%', label: 'CTR Increase' },
      { value: '1.38K', label: 'Avg. Monthly Clicks' },
      { value: '1 sec', label: 'Website Load Time' },
    ],
  },
  {
    id: 'haystack',
    company: 'HaystackAnalytics',
    industry: 'HealthTech',
    tagline: 'LinkedIn & Email Lead Generation',
    color: 'from-[#0f2357] to-[#1e3a8a]',
    logo: null,
    objective: {
      challenge: 'HaystackAnalytics, a clinical genomics company based out of IIT Bombay, faced challenges in reaching target customers (pathologists, doctors, diagnostic labs) through traditional methods.',
      goal: 'Generate high-quality leads of qualified healthcare professionals using modern digital outreach.',
    },
    whatWeDid: [
      'Researched high-intent keywords for genomics and diagnostic services.',
      'Created targeted content for LinkedIn messaging with multi-touch points.',
      'Implemented intelligent LinkedIn outreach tool for streamlined prospecting.',
      'Developed email marketing campaigns using scraped LinkedIn data.',
      'Optimized all campaigns with automation tools and smart sequencing.',
    ],
    whatWeAchieved: [
      'Generated 150+ high-quality leads of pathologists and doctors from LinkedIn and Email in 2 months.',
      'Increased invite acceptance rate by 46% with smart sequencing and nudge messaging.',
      'Established consistent, scalable lead generation process.',
      'Reduced manual outreach time significantly.',
    ],
    metrics: [
      { value: '150+', label: 'High-Quality Leads' },
      { value: '46%', label: 'Acceptance Rate' },
      { value: '2 Mo.', label: 'Campaign Duration' },
      { value: 'Scalable', label: 'Lead Gen Process' },
    ],
    quote: 'Enabled diagnostic labs to offer accurate and personalized diagnostics through targeted outreach.',
  },
  {
    id: 'ingram',
    company: 'Ingram Micro',
    industry: 'B2B Technology Services',
    tagline: 'Global Brand Launch & LinkedIn Creatives',
    color: 'from-[#1e3a8a] to-[#1d4ed8]',
    logo: ingramLogo,
    objective: {
      challenge: 'Ingram Micro needed to launch a unified global brand identity and establish thought leadership in the highly competitive B2B technology services sector.',
      goal: 'Create a comprehensive brand launch strategy that resonates with enterprise clients and positions the company as an industry leader.',
    },
    whatWeDid: [
      'Developed comprehensive brand guidelines for global implementation.',
      'Created engaging social media creatives and thought leadership content.',
      'Designed targeted emailers for enterprise client outreach.',
      'Implemented a strategic WhatsApp communication strategy for direct engagement.',
      'Produced high-quality video content to communicate complex service offerings.',
    ],
    whatWeAchieved: [
      'Successfully executed a unified global brand launch across multiple markets.',
      'Established strong thought leadership positioning in the B2B tech services space.',
      'Significantly increased brand awareness and engagement among target enterprise clients.',
      'Created a scalable content framework for ongoing marketing initiatives.',
    ],
    metrics: [
      { value: '5,48,909', label: 'LinkedIn Impressions' },
      { value: '6,797', label: 'Likes' },
      { value: '806', label: 'Shares' },
      { value: '4,358', label: 'Link Clicks' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner — nav embedded */}
      <div className="relative text-white overflow-hidden">
        {/* Background photo */}
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f4e]/95 via-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
        {/* Orange accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f97316]/20 to-transparent"></div>

        {/* Nav inside banner */}
        <nav className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-5 pb-0 flex items-center justify-between">
          <Link to="/">
            <img src={elevaitLogoWhite} alt="elevait" className="h-9 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </nav>

        {/* Banner content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-14 sm:pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: text */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20">
                <BarChart3 className="w-4 h-4 text-[#f97316]" />
                <span>Client Success Stories</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-4 leading-tight">
                Real Results for{' '}
                <span className="text-[#f97316]">Real Brands</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                A deeper look at how we have helped B2B brands solve real marketing challenges and drive measurable growth across SEO, demand generation, and brand building.
              </p>
            </div>

            {/* Right: stat cards */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full max-w-[17rem] lg:max-w-xs">
              {[
                { value: '65%', label: 'Avg. Ranking Lift' },
                { value: '2,500+', label: 'Leads Generated' },
                { value: '47%', label: 'Acceptance Rate' },
                { value: '5x', label: 'Average ROI' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-center">
                  <div className="text-2xl font-bold text-[#f97316] mb-0.5">{s.value}</div>
                  <div className="text-xs text-blue-200 font-medium leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 space-y-20">
        {caseStudies.map((cs, idx) => (
          <article key={cs.id} id={cs.id}>
            {/* Company Header */}
            <div className={`bg-gradient-to-r ${cs.color} rounded-2xl p-8 sm:p-10 text-white mb-8`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold tracking-wide">
                      <Target className="w-3.5 h-3.5 text-[#f97316]" />
                      {cs.industry}
                    </div>
                    <span className="text-white/40 text-xs">Case Study {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-1">{cs.company}</h2>
                  <p className="text-blue-100 text-lg">{cs.tagline}</p>
                </div>
                {cs.logo && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center justify-center flex-shrink-0">
                    <img src={cs.logo} alt={cs.company} className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
                  </div>
                )}
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {cs.metrics.map((m, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-center hover:border-[#f97316]/30 hover:shadow-sm transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-[#f97316] mb-1">{m.value}</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Objective */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#1e3a8a] text-white rounded flex items-center justify-center text-[10px]">01</span>
                  The Objective
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  <span className="font-semibold text-gray-800">Challenge: </span>{cs.objective.challenge}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Goal: </span>{cs.objective.goal}
                </p>
              </div>

              {/* What We Did */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#1e3a8a] text-white rounded flex items-center justify-center text-[10px]">02</span>
                  What We Did
                </h3>
                <ul className="space-y-2">
                  {cs.whatWeDid.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full flex-shrink-0 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Achieved */}
              <div className="bg-[#f97316] rounded-xl p-6 text-white">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-white/20 text-white rounded flex items-center justify-center text-[10px]">03</span>
                  What We Achieved
                </h3>
                <ul className="space-y-2">
                  {cs.whatWeAchieved.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/80" />
                      <span dangerouslySetInnerHTML={{
                        __html: item.replace(/(\d[\d,.+%]+)/g, '<strong>$1</strong>')
                      }} />
                    </li>
                  ))}
                </ul>
                {'quote' in cs && cs.quote && (
                  <p className="mt-4 pt-4 border-t border-white/20 text-sm italic text-white/90">
                    "{cs.quote}"
                  </p>
                )}
              </div>
            </div>

            {idx < caseStudies.length - 1 && (
              <div className="mt-16 border-b border-gray-100"></div>
            )}
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to write your own{' '}
            <span className="text-[#f97316]">success story?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Let's talk about your growth challenges and how Elevait can help you build a predictable, scalable marketing engine.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
