import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const ModernFooter = () => {
  // Data structure for easy updates
  const footerData = {
    logo: {
      text: "M4",
      subtitle: "SECURITY GROUP"
    },
    socialLinks: [
      { name: "Twitter", icon: "X", url: "#", bgColor: "bg-black" },
      { name: "Location", icon: "MapPin", url: "#", bgColor: "bg-primary" }
    ],
    sections: [
      {
        title: "Cyber Essentials Accreditation",
        content: {
          type: "text",
          text: "Cyber Essentials is a Government-backed and industry-supported scheme that helps businesses protect against the growing threat of cyber-attacks. Developed and operated by the National Cyber Security Centre (NCSC), Cyber Essentials is considered the best first step to a more secure network, protecting you from 80% of the most basic cyber security breaches."
        },
        badge: {
          text: "CYBER ESSENTIALS",
          bgColor: "bg-blue-600"
        }
      },
      {
        title: "What We Do",
        content: {
          type: "links",
          links: [
            { name: "Security Personnel", url: "/security-personnel" },
            { name: "Loss Prevention", url: "/loss-prevention" },
            { name: "Concierge & Reception", url: "/concierge-reception" },
            { name: "Vacant Property", url: "/vacant-property" },
            { name: "Cleaning", url: "/cleaning" }
          ]
        }
      },
      {
        title: "Who We Are",
        content: {
          type: "links",
          links: [
            { name: "About M4SG", url: "/about" },
            { name: "CSR", url: "/csr" },
            { name: "Management", url: "/management" },
            { name: "Location", url: "/location" }
          ]
        }
      },
      {
        title: "Useful Links",
        content: {
          type: "contact",
          links: [
            { name: "Quality Policy", url: "/quality-policy" },
            { name: "Contact Us", url: "/contact" },
            { name: "Mail", url: "mailto:info@m4securitygroup.co.uk" },
            { name: "Call Us : 0208 6165454", url: "tel:02086165454" },
            { name: "info@m4securitygroup.co.uk", url: "mailto:info@m4securitygroup.co.uk" }
          ]
        }
      }
    ],
    bottomText: "© 2025 M4 Security Group. All rights reserved. | Privacy Policy | Terms of Service"
  };

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'X':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-black">
                {footerData.logo.text}
                <span className="text-primary">4</span>
              </div>
              <div className="ml-3 text-sm text-black font-medium">
                {footerData.logo.subtitle}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {footerData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${social.bgColor} p-3 rounded-full hover:opacity-80 transition-opacity duration-200 flex items-center justify-center`}
                aria-label={social.name}
              >
                <span className={social.bgColor.includes('white') ? 'text-gray-800' : 'text-white'}>
                  {renderSocialIcon(social.icon)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-primary mb-8"></div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-4">
                {section.title}
              </h3>

              {/* Text Content */}
              {section.content.type === 'text' && (
                <div className="space-y-4">
                  <p className="text-black text-sm leading-relaxed">
                    {section.content.text}
                  </p>
                  {section.badge && (
                    <div className="inline-block">
                      <span className={`${section.badge.bgColor} text-white px-3 py-1 rounded text-xs font-bold`}>
                        {section.badge.text}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Links Content */}
              {section.content.type === 'links' && (
                <ul className="space-y-3">
                  {section.content.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-black hover:text-primary text-sm transition-colors duration-200 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Contact Content */}
              {section.content.type === 'contact' && (
                <ul className="space-y-3">
                  {section.content.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-black hover:text-primary text-sm transition-colors duration-200 flex items-center group"
                      >
                        {link.name.includes('Call') && (
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                        )}
                        {link.name.includes('@') && (
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              {footerData.bottomText}
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-500 text-xs">
                Built with modern web technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;