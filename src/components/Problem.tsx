import { AlertCircle, Target, Zap } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            The B2B Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            B2B Brands Struggle to Generate{' '}
            <span className="text-[#f97316]">Consistent, High-Quality Leads</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            According to Norvell Jefferson B2B Report 2025, the biggest challenge facing B2B brands is
            inconsistent brand building leading to unreliable lead pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-[#1e3a8a]">25%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Only 25% prioritize brand building
            </h3>
            <p className="text-gray-600">
              Most B2B companies focus heavily on performance marketing at the expense of consistent brand presence
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-[#f97316]">62%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              62% rely on social media alone
            </h3>
            <p className="text-gray-600">
              Over-reliance on a single channel creates vulnerability and limits reach to decision-makers
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-red-600">70%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              70% struggle with lead quality
            </h3>
            <p className="text-gray-600">
              Without proper brand positioning and content strategy, leads are often unqualified and don't convert
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              The Elevait Solution
            </h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We bridge the gap between brand building and demand generation with our proven framework
              that combines deep customer insights, data-driven strategy, and multi-channel execution.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#f97316]" />
                <span className="font-medium">Customer Insight</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#f97316]" />
                <span className="font-medium">Data Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#f97316]" />
                <span className="font-medium">Media Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
