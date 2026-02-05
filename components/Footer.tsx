import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'Tank Cleaning', href: '/services/tank-cleaning' },
    { name: 'Wash Water Recycling', href: '/services/wash-water-recycling' },
    { name: 'Rail Car Cleaning', href: '/services/rail-car-cleaning' },
    { name: 'Hydro Jetting', href: '/services/hydro-jetting' },
    { name: 'Deicing Solutions', href: '/services/deicing' },
    { name: 'Culvert & Rig Cleaning', href: '/services/culvert-rig-cleaning' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Service Area', href: '/service-area' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'FAQ', href: '/resources/faq' },
    { name: 'RFP Resources', href: '/resources/rfp' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Safety Standards', href: '/resources/safety' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/kaiser-logo.png"
              alt="Kaiser OFS Logo"
              width={180}
              height={52}
              className="h-10 w-auto mb-4 invert"
            />
            <p className="text-neutral-400 mb-6 max-w-md">
              Professional industrial cleaning services across the Upper Midwest.
              Fast response, expert waste management, and safety-first approach.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+17015808907"
                  className="text-white hover:text-accent transition-colors font-semibold"
                >
                  (701) 580-8907
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@kaiserofs.com"
                  className="text-neutral-400 hover:text-accent transition-colors"
                >
                  info@kaiserofs.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Kaiser OFS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-neutral-500 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-neutral-500 hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
