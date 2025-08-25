import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Crown, 
  Heart, 
  Baby, 
  Megaphone, 
  HandHelping,
  ArrowRight,
  ChevronRight,
  Book
} from "lucide-react";

// Import ministry images
import ministryYouth from "@/assets/ministry-youth.jpg";
import ministryWomen from "@/assets/ministry-women.jpg";
import ministryMen from "@/assets/ministry-men.jpg";
import ministryChildren from "@/assets/ministry-children.jpg";
import ministryEvangelism from "@/assets/ministry-evangelism.jpg";
import ministryService from "@/assets/ministry-service.jpg";

const MinistriesSection = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const [showAll, setShowAll] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(6); // por defecto en pantallas grandes

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(4);
      } else {
        setCardsToShow(6);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const ministries = [
  {
    name: "Pastoral de Jóvenes",
    icon: Users,
    description: "Guiando a la juventud hacia un encuentro personal con Cristo, formando líderes y fomentando el servicio.",
    leader: "Pastor de Jóvenes y equipo",
    image: ministryYouth,
    bgColor: "from-blue-600/20 to-purple-600/20",
    accent: "text-blue-400"
  },
  {
    name: "Pastoral de Damas",
    icon: Crown,
    description: "Mujeres de fe que crecen en su discipulado y sirven activamente en la iglesia y comunidad.",
    leader: "Líder de Damas",
    image: ministryWomen,
    bgColor: "from-pink-600/20 to-rose-600/20",
    accent: "text-pink-400"
  },
  {
    name: "Pastoral de Hombres",
    icon: Heart,
    description: "Hombres comprometidos con Cristo, su familia y la iglesia, fortaleciendo su liderazgo espiritual.",
    leader: "Pastor de Hombres",
    image: ministryMen,
    bgColor: "from-green-600/20 to-emerald-600/20",
    accent: "text-green-400"
  },
  {
    name: "Pastoral de Niños y Adolescentes",
    icon: Baby,
    description: "Discipulando a niños y adolescentes para que crezcan en la Palabra y en el amor de Dios.",
    leader: "Coordinador de Niños y Adolescentes",
    image: ministryChildren,
    bgColor: "from-yellow-600/20 to-orange-600/20",
    accent: "text-yellow-400"
  },
  {
    name: "Ministerio de Evangelismo",
    icon: Megaphone,
    description: "Compartiendo el mensaje de salvación en Villa Sabana Toro y zonas aledañas.",
    leader: "Equipo de Evangelismo",
    image: ministryEvangelism,
    bgColor: "from-red-600/20 to-pink-600/20",
    accent: "text-red-400"
  },
  {
    name: "Ministerio de Adoración",
    icon: HandHelping,
    description: "Guiando a la congregación a la presencia de Dios a través de la música y la alabanza.",
    leader: "Director de Adoración",
    image: ministryService,
    bgColor: "from-purple-600/20 to-indigo-600/20",
    accent: "text-purple-400"
  },
  {
    name: "Ministerio de Oración",
    icon: HandHelping,
    description: "Intercediendo por la iglesia y la comunidad, fortaleciendo la fe mediante cadenas de oración.",
    leader: "Coordinador de Oración",
    image: ministryService,
    bgColor: "from-indigo-600/20 to-blue-600/20",
    accent: "text-indigo-400"
  },
  {
    name: "Ministerio de Finanzas",
    icon: HandHelping,
    description: "Administrando con integridad los recursos de la iglesia para el avance del Reino de Dios.",
    leader: "Tesorero de la Iglesia",
    image: ministryService,
    bgColor: "from-emerald-600/20 to-teal-600/20",
    accent: "text-emerald-400"
  },
  {
    name: "Ministerio de Educación Cristiana",
    icon: Book,
    description: "Capacitando y formando líderes y miembros mediante estudios bíblicos y programas educativos.",
    leader: "Director de Educación Cristiana",
    image: ministryService,
    bgColor: "from-orange-600/20 to-amber-600/20",
    accent: "text-orange-400"
  },
  {
    name: "Ministerio de Dorcas",
    icon: HandHelping,
    description: "Sirviendo a los necesitados con amor cristiano, siguiendo el ejemplo bíblico de Dorcas.",
    leader: "Coordinador de Dorcas",
    image: ministryService,
    bgColor: "from-rose-600/20 to-red-600/20",
    accent: "text-rose-400"
  }
];



  return (
    <section id="ministries" className="py-12 bg-white relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          variants={containerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-10 relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <Badge variant="outline" className="text-sm px-3 py-1 text-blue-600 border-blue-200">
              <Users className="mr-2 h-4 w-4" />
              MINISTERIOS
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Encuentra Tu Lugar Para Servir
          </motion.h2>
          
          <motion.div 
            variants={itemVariants} 
            className="max-w-2xl mx-auto mb-8"
          >
            <p className="text-slate-600">
              Descubre cómo puedes usar tus dones y talentos para impactar vidas en nuestra comunidad
            </p>
          </motion.div>
        </motion.div>

        {/* Ministries Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 relative z-10"
        >
          {(showAll ? ministries : ministries.slice(0, cardsToShow)).map((ministry, index) => (
            <motion.div key={ministry.name} variants={itemVariants} className="group">
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 text-center h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                    <ministry.icon className="h-10 w-10 text-blue-500" />
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-slate-800 font-semibold text-sm mb-1">{ministry.name}</h3>
                  <p className="text-slate-500 text-xs mb-3 line-clamp-2 flex-grow">
                    {ministry.description}
                  </p>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="w-full text-xs border-slate-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 mt-auto"
                  >
                    Más Información
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón para ver más/menos en móvil */}
        <div className="mt-6 text-center md:hidden">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="px-4 py-2 text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            {showAll ? "Ver menos" : "Ver todos"}
          </Button>
        </div>

        {/* Call to Action - Diseño simplificado */}
        <motion.div 
          ref={ctaRef}
          variants={itemVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="mt-12 pt-10 border-t border-slate-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="md:w-1/2 mb-6 md:mb-0 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                ¿Quieres servir en un ministerio?
              </h3>
              <p className="text-slate-600 mb-0">
                Descubre cómo puedes usar tus dones y talentos para impactar vidas en nuestra comunidad
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                Quiero Servir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-200 text-slate-700 hover:bg-slate-50 px-6"
              >
                Más Información
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinistriesSection;