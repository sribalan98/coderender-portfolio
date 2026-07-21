import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#ededed] h-16 flex items-center justify-between px-4 md:px-8">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="relative w-8 h-8 flex items-center justify-center bg-black rounded-lg text-white font-display font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
          c
        </div>
        <span className="font-display font-black text-xl tracking-tight text-[#141414]">
          code render
        </span>
      </Link>

      {/* Right: Actions and links */}
      <div className="flex items-center gap-6">


        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#our-works"
            className="bg-[#141414] hover:bg-black text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-1"
          >
            See my works
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
