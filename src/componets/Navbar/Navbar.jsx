import React, { useState } from "react";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const ModernNavbarSystem = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navData = {
    topBar: {
      phone: "0208 6165454",
      email: "info@m4securitygroup.co.uk",
    },
    logo: {
      text: "M4",
      subtitle: "SECURITY GROUP",
    },
    mainNav: [
      { name: "Home", href: "/", hasDropdown: false },
      {
        name: "Who We Are",
        href: "/who-we-are",
        hasDropdown: true,
        dropdownItems: [
          {
            name: "About M4SG",
            slug: "about-m4sg",
            content: "About M4SG page.",
          },
          {
            name: "Corporate Social Responsibility",
            slug: "csr",
            content: "CSR page.",
          },
          {
            name: "Management",
            slug: "management",
            content: "Management page.",
          },
          {
            name: "Accreditation",
            slug: "accreditation",
            content: "Accreditation page.",
          },
          { name: "Location", slug: "location", content: "Location page." },
        ],
      },
      {
        name: "Services",
        href: "/services",
        hasDropdown: true,
        dropdownItems: [
          {
            name: "Security Guards",
            slug: "security-guards",
            content: "Security Guards service.",
          },
          {
            name: "Mobile Patrols",
            slug: "mobile-patrols",
            content: "Mobile Patrols service.",
          },
          {
            name: "CCTV Monitoring",
            slug: "cctv",
            content: "CCTV Monitoring service.",
          },
          {
            name: "Access Control",
            slug: "access-control",
            content: "Access Control service.",
          },
          {
            name: "Event Security",
            slug: "event-security",
            content: "Event Security service.",
          },
        ],
      },
      {
        name: "Careers",
        href: "/careers",
        hasDropdown: true,
        dropdownItems: [
          {
            name: "Current Openings",
            slug: "current-openings",
            content: "Current job openings.",
          },
          { name: "Apply Online", slug: "apply", content: "Apply Online." },
          {
            name: "Training Programs",
            slug: "training-programs",
            content: "Training programs info.",

          },
          { name: "Benefits", slug: "benefits", content: "Job benefits." },
        ],
      },
      { name: "Training", href: "/Training", hasDropdown: false },
      { name: "News", href: "/news", hasDropdown: false },
      { name: "Contact", href: "/contact", hasDropdown: false, isButton: true },
    ],
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (navData.mainNav[index].hasDropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>{navData.topBar.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>{navData.topBar.email}</span>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 z-50">
        {/* Top Bar */}

        {/* Main Navigation */}
        <nav className=" bg-white/90 backdrop-blur-sm shadow-lg  relative ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {navData.logo.text}
                    <span className="text-primary-text">4</span>
                  </div>
                  <div className="ml-2 text-xs text-gray-600 font-medium">
                    {navData.logo.subtitle}
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navData.mainNav.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.isButton ? (
                        <a
                          href={item.href}
                          className="bg-primary-hover  text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <button
                          className="text-gray-700 hover:text-primary-text px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                          onClick={() =>
                            item.hasDropdown && handleDropdownToggle(index)
                          }
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown
                              size={16}
                              className={`ml-1 transition-transform duration-200 ${
                                activeDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                      )}

                      {/* Dropdown Menu */}
                      {item.hasDropdown && activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {item.dropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  to={`${item.href}/${dropdownItem.slug}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary-text transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-text hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-text"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                  {navData.mainNav.map((item, index) => (
                    <div key={index}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                          item.isButton
                            ? "bg-primary-hover text-white hover:bg-primary"
                            : "text-gray-700 hover:text-primary-text hover:bg-primary-light"
                        } transition-colors duration-200`}
                        onClick={() =>
                          item.hasDropdown && handleDropdownToggle(index)
                        }
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeDropdown === index && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={`${item.href}/${dropdownItem.slug}`}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-text hover:bg-primary-light rounded-md transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default ModernNavbarSystem;
