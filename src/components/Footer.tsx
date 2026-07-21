import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { LEGAL_TEXTS } from "../data";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);
  const projects = [
    { text: "coderender.tebex.io", href: "https://coderender.tebex.io/" },
  ];

  const companyLinks = [
    { text: "Contact", href: "mailto:coderenderx@gmail.com", external: true },
  ];

  const socialLinks = [
    { text: "Instagram", href: "#" },
    // { text: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-[#141414] text-[#adadad] pt-16 pb-12 px-6 md:px-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 group mb-4">
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-[#141414] font-display font-black text-lg">
              c
            </div>
            <span className="font-display font-black text-xl tracking-tight text-white">
              code render
            </span>
          </Link>
          <p className="text-sm text-[#717171] leading-relaxed max-w-xs">
            We build stunning websites and mobile applications that are designed to help you achieve your business goals. Explore our latest works and see how we bring ideas to life.
          </p>
        </div>

        {/* Link Column 1 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Projects</h4>
          <ul className="space-y-2.5 text-sm">
            {projects.map((link) => (
              <li key={link.text}>
                <Link 
                  to={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Column 2 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {companyLinks.map((link) => (
              <li key={link.text}>
                {link.external ? (
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.text}
                    <ArrowUpRight className="w-3 h-3 text-[#717171]" />
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Link Column 3 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Connect</h4>
          <ul className="space-y-2.5 text-sm">
            {socialLinks.map((link) => (
              <li key={link.text}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {link.text}
                  <ArrowUpRight className="w-3 h-3 text-[#717171]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#717171]">
        <span>© CodeRender Since 2023</span>
        <div className="flex items-center gap-6">
          <button onClick={() => setLegalModal("privacy")} className="hover:text-white transition-colors cursor-pointer">Privacy policy</button>
          <button onClick={() => setLegalModal("terms")} className="hover:text-white transition-colors cursor-pointer">Terms</button>
        </div>
      </div>

      {/* Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setLegalModal(null)}>
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full text-left shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setLegalModal(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-display font-black text-[#141414] mb-4">
              {LEGAL_TEXTS[legalModal].title}
            </h3>
            <p className="text-[#717171] text-sm leading-relaxed">
              {LEGAL_TEXTS[legalModal].content}
            </p>
            <div className="mt-8">
              <button onClick={() => setLegalModal(null)} className="w-full bg-[#141414] hover:bg-black text-white py-3 rounded-xl font-medium transition-colors cursor-pointer shadow-sm">
                I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
