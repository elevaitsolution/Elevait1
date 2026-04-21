import linkedinLogo from '../assets/LINKEDIN.png';
import hubspotLogo from '../assets/hubspot.png';
import shopifyLogo from '../assets/shopify.png';
import googleLogo from '../assets/google.png';
import techMahindraLogo from '../assets/All_clients_logo-01.png';
import faberLogo from '../assets/All_clients_logo-03.png';
import frankeLogo from '../assets/All_clients_logo-04.png';
import ingramMicroLogo from '../assets/All_clients_logo-11.png';
import beetelLogo from '../assets/All_clients_logo-13.png';
import carrierLogo from '../assets/All_clients_logo-15.png';
import microsoftLogo from '../assets/All_clients_logo-16.png';
import roadcastLogo from '../assets/All_clients_logo-27.png';
import jaipurLitFestLogo from '../assets/All_clients_logo-29.png';
import affordplanLogo from '../assets/All_clients_logo-32.png';
import trilegalLogo from '../assets/All_clients_logo-33.png';
import fireflyLogo from '../assets/All_clients_logo-40.png';

const clients = [
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Tech Mahindra', logo: techMahindraLogo },
  { name: 'Ingram Micro', logo: ingramMicroLogo },
  { name: 'Carrier', logo: carrierLogo },
  { name: 'Trilegal', logo: trilegalLogo },
  { name: 'Franke', logo: frankeLogo },
  { name: 'Faber', logo: faberLogo },
  { name: 'Beetel', logo: beetelLogo },
  { name: 'Roadcast', logo: roadcastLogo },
  { name: 'AffordPlan', logo: affordplanLogo },
  { name: 'FireFly Networks', logo: fireflyLogo },
  { name: 'Jaipur Literature Festival', logo: jaipurLitFestLogo },
];

export default function Clients() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Powering Growth for{' '}
            <span className="text-[#f97316]">Global Brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-[#f97316]/40 hover:shadow-sm transition-all duration-300 bg-white"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-6">
            Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: 'Google', logo: googleLogo },
              { name: 'HubSpot', logo: hubspotLogo },
              { name: 'LinkedIn', logo: linkedinLogo },
              { name: 'Shopify', logo: shopifyLogo },
            ].map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center px-6 py-3 rounded-xl border border-gray-100 hover:border-[#f97316]/40 hover:shadow-sm transition-all duration-300 bg-white"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
