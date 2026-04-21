import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Building Vedanya from the ground up was not just about creating a school, it was about crafting a philosophy of learning. From the very beginning, the team understood this vision with remarkable clarity. They helped us define what Vedanya stands for, a space where learning is human-centred, future-forward, and deeply rooted in purpose. From conceptualizing the name and identity to positioning Vedanya as a new-age learning ecosystem, they treated this project as a shared journey of creation.",
      author: "Anku Sharma",
      role: "Ex Vedanya Projects and Operations Lead",
      company: "Vedanya"
    },
    {
      quote: "The Elevait team brings a strong understanding of the B2B and technology landscape. They go beyond being just an agency — they truly function as an extended marketing arm. What stood out was their deep expertise in B2B marketing ecosystem, content and lead generation, with a nuanced approach across different stages of the funnel. Their ability to align strategy with execution made a meaningful impact on our marketing outcomes.",
      author: "Vishal Jain",
      role: "Co-founder",
      company: "Roadcast Technologies"
    },
    {
      quote: "Working with the Elevait team was a standout experience for Trilegal's digital strategy team. They took full ownership of our SEO, delivering a substantial surge in organic web traffic and a significant improvement in search rankings. Their strategy successfully helped expanding our LinkedIn following, creating a cohesive brand voice that resonated across platforms. The results went well beyond vanity metrics — their work led to increased visibility and a measurable uptick in high-quality lead capture. What truly sets Elevate apart though, is the people. Their passion for excellence and attention to detail meant that no stone was left unturned. They were proactive, transparent, and felt like a true extension of our own team.",
      author: "Richa Chugh",
      role: "Ex Marketing, Trilegal",
      company: "Trilegal"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by industrial, renewable technology, and SaaS companies everywhere
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow flex flex-col">
              <div className="absolute top-6 right-6 text-[#f97316] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 mt-1">{testimonial.role}</div>
                  <div className="text-sm text-[#1e3a8a] font-medium mt-1">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
