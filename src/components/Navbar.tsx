import { useState } from "react";
import { Church, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Horarios", href: "#schedule" },
  { name: "SANANOS", href: "#sananos" },
  { name: "Congresos", href: "#congress" },
  { name: "Misión", href: "#mission" },
  { name: "Misiones", href: "#missions" },
  { name: "Ministerios", href: "#ministries" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/80 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center space-x-3">
        <Church className="h-8 w-8 text-yellow-400" />
        <span className="text-white text-2xl font-semibold tracking-wide">
          Oasis de Bendición
        </span>
      </div>

      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.href)}
            className="text-white hover:text-yellow-400 font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-yellow-400"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 overflow-hidden ${
      menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    } bg-black/70 backdrop-blur-md border-t border-white/10`}
  >
    <div className="px-4 py-4 space-y-2">
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => scrollTo(link.href)}
          className="block w-full text-left text-white hover:text-yellow-400 px-4 py-2 rounded-md transition"
        >
          {link.name}
        </button>
      ))}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
