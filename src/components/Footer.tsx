import { Button } from "@/components/ui/button"
import { MessageCircle, Cross, Heart, Users, Mail, Link } from "lucide-react"

interface FooterProps {
  openWhatsApp: () => void
}

export function Footer({ openWhatsApp }: FooterProps) {
  return (
    <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-church-yellow rounded-xl flex items-center justify-center">
                  <Cross className="h-7 w-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">OASIS DE BENDICIÓN</h3>
                  <p className="text-slate-400 text-sm tracking-wider uppercase">Iglesia Cristiana</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Un lugar donde encuentras paz, esperanza y el amor incondicional de Cristo. Únete a nuestra comunidad de
                fe y experimenta la transformación que solo Dios puede dar.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-church-yellow tracking-wide">ENLACES RÁPIDOS</h4>
              <div className="space-y-3">
                {["INICIO", "NOSOTROS", "HORARIOS", "CONTACTO"].map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-300 hover:text-church-yellow transition-colors font-medium tracking-wider"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-church-yellow tracking-wide">SÍGUENOS</h4>
              <div className="flex space-x-4">
                {[Heart, Users, Mail].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-slate-700 text-slate-300 hover:bg-church-yellow hover:text-black hover:border-church-yellow rounded-xl bg-transparent w-12 h-12"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <div className="border-l-4 border-church-yellow pl-8 mb-6 inline-block">
              <p className="text-church-yellow text-xl font-bold italic tracking-wide">
                "El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti"
              </p>
            </div>
            <p className="text-slate-400 tracking-wider">
              © 2024 IGLESIA OASIS DE BENDICIÓN. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
  )
}
