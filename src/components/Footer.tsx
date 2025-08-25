import { Button } from "@/components/ui/button"
import { Cross, Heart, Users, Mail } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Horarios", href: "#schedule" },
  { name: "Congresos", href: "#congress" }
];

export function Footer() {
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-church-yellow rounded-xl flex items-center justify-center">
                  <Cross className="h-7 w-7 hover:text-yellow-400 hover:scale-125" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight hover:text-yellow-400 hover:scale-105">OASIS DE BENDICIÓN</h3>
                  <p className="text-slate-400 text-sm tracking-wider uppercase hover:text-yellow-400 hover:scale-105">Iglesia Cristiana</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md hover:text-yellow-400">
                Un lugar donde encuentras paz, esperanza y el amor incondicional de Cristo. Únete a nuestra comunidad de
                fe y experimenta la transformación que solo Dios puede dar.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 tracking-wide hover:text-yellow-400">ENLACES RÁPIDOS</h4>
              <div className="space-y-3">
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
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-church-yellow tracking-wide hover:text-yellow-400 ">SÍGUENOS</h4>
              <div className="flex space-x-4">
                {[Heart, Users, Mail].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-slate-700 text-slate-300 hover:bg-church-yellow hover:text-yellow-400 hover:scale-105 hover:border-yellow-400 rounded-xl bg-transparent w-12 h-12"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center hover:text-yellow-400">
            <div className="border-l-4 border-church-yellow pl-8 mb-6 inline-block">
              <p className="text-church-yellow text-xl font-bold italic tracking-wide">
                "El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti"
              </p>
            </div>
            <p className="text-slate-400 tracking-wider ">
              © 2024 IGLESIA OASIS DE BENDICIÓN. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
  )
}