import { BookOpen, Users, Briefcase, Lightbulb } from 'lucide-react';
import growthIcon from '../assets/A-_symbol_.png';

export default function Learning() {
  const learningAreas = [
    {
      icon: Users,
      title: "Onboarding & Employee Training",
      description: "Structured programs that accelerate new hire integration and build organizational knowledge"
    },
    {
      icon: Lightbulb,
      title: "Product & Technical Learning",
      description: "Complex technical content transformed into digestible, engaging learning modules"
    },
    {
      icon: null,
      title: "Sales Enablement Training",
      description: "Equip your sales teams with the knowledge and skills to effectively communicate your value proposition"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a8a]/10 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 text-[#1e3a8a]" />
              <span className="text-[#1e3a8a]">Elevait Learning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Complex Content into{' '}
              <span className="text-[#f97316]">Engaging Learning Experiences</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Designing and developing business-aligned learning solutions for organizations across industries.
              We transform complex content into structured, engaging learning experiences that drive real results,
              using tools like Articulate 360.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#1e3a8a] rounded-2xl blur-3xl opacity-10"></div>
            <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
                <p className="text-blue-100 leading-relaxed">
                  Working with international clients to improve knowledge transfer, engagement, and training effectiveness.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <span className="font-medium">Improved knowledge retention</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <span className="font-medium">Enhanced employee engagement</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <span className="font-medium">Measurable training effectiveness</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {Icon ? (
                      <Icon className="w-7 h-7 text-white" />
                    ) : (
                      <img src={growthIcon} alt="" className="w-7 h-7 object-contain" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
