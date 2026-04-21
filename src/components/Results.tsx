import { Award, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import growthIcon from '../assets/A-_symbol_.png';

export default function Results() {
  const caseStudies = [
    {
      company: 'Trilegal',
      industry: 'Legal Services',
      metrics: [
        { value: '65%', label: 'Ranking Improvement' },
        { value: '50%', label: 'MoM Growth' },
        { value: '16%', label: 'Traffic Increase' }
      ],
      description: 'Achieved significant SEO improvements for a leading law firm, establishing them as a top-ranking authority for key legal search terms.'
    },
    {
      company: 'Roadcast',
      industry: 'Logistics SaaS',
      metrics: [
        { value: '300+', label: 'Quality Leads' },
        { value: '48%', label: 'Acceptance Rate' },
        { value: '4 Mo.', label: 'Campaign Duration' }
      ],
      description: 'Generated high-quality B2B leads through multi-channel campaigns for a logistics automation platform.'
    },
    {
      company: 'SWIF',
      industry: 'AI Security',
      metrics: [
        { value: '2,000+', label: 'Search Leads' },
        { value: '200+', label: 'LinkedIn Leads' },
        { value: '45%', label: 'Engagement Rate' }
      ],
      description: 'Successfully established market presence for an AI-powered device security platform in the competitive B2B security landscape.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Results That{' '}
            <span className="text-[#f97316]">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our data-driven approach consistently delivers measurable outcomes for B2B brands
            across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-[#f97316]" />
                  <span className="text-sm font-medium opacity-90">{study.industry}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{study.company}</h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="text-center">
                      <div className="text-2xl font-bold text-[#f97316] mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-600 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {study.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore More Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <img src={growthIcon} alt="" className="w-8 h-8 object-contain mx-auto mb-3" />
              <div className="text-4xl font-bold">65%</div>
              <div className="text-sm text-blue-200">Average Ranking Improvement</div>
            </div>
            <div className="space-y-2">
              <img src={growthIcon} alt="" className="w-8 h-8 object-contain mx-auto mb-3" />
              <div className="text-4xl font-bold">2,500+</div>
              <div className="text-sm text-blue-200">Leads Generated</div>
            </div>
            <div className="space-y-2">
              <img src={growthIcon} alt="" className="w-8 h-8 object-contain mx-auto mb-3" />
              <div className="text-4xl font-bold">47%</div>
              <div className="text-sm text-blue-200">Average Acceptance Rate</div>
            </div>
            <div className="space-y-2">
              <img src={growthIcon} alt="" className="w-8 h-8 object-contain mx-auto mb-3" />
              <div className="text-4xl font-bold">5x</div>
              <div className="text-sm text-blue-200">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
