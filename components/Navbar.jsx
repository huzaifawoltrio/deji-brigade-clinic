"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBlogOpen, setIsMobileBlogOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/tms-therapy", label: "TMS Therapy" },
    { href: "/referrals", label: "Referrals" },
    { href: "/resources", label: "Resources" },
  ];

  const blogLinks = [
    { href: "/blog/tms-benefits", label: "Benefits of TMS Therapy" },
    {
      href: "/blog/telepsychiatry-georgia",
      label: "Telepsychiatry in Georgia",
    },
    { href: "/blog/managing-anxiety", label: "Managing Anxiety" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Brigade Clinic Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-primary-600">
                Brigade Clinic
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center"
              >
                Blog{" "}
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180"
                />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 bg-white rotate-45"></div>
                {blogLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="gradient-blue text-white px-5 py-2.5 rounded-full font-semibold hover-lift"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setIsMobileBlogOpen(!isMobileBlogOpen)}
                className="w-full flex justify-between items-center text-gray-700 hover:text-primary-600 font-medium"
              >
                <span>Blog</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    isMobileBlogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileBlogOpen && (
                <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-200">
                  {blogLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-600 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block mt-4 w-full text-center gradient-blue text-white px-5 py-2.5 rounded-full font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
