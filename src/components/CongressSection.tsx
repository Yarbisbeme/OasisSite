import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CongressSection = () => {
  const congressRef = useRef(null);
  const congressInView = useInView(congressRef, { once: true, margin: "-100px" });

  const congressData = {
    titulo: "Congreso de Varones",
    subtitulo: "Llamados",
    versiculo: {
      texto: "Os ruego que andéis como es digno de la vocación con que fuisteis llamados",
      cita: "Efesios 4:1"
    },
    fecha: {
      inicio: "2025-08-12",
      fin: "2025-08-13",
      hora: "7:30 PM"
    },
    ubicacion: {
      direccion: "Calle principal Sábana Toro No. 3B",
      ciudad: "San Cristóbal",
      pais: "República Dominicana",
      nombre_iglesia: "Iglesia Oasis de Bendición"
    }
  };

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long'
    });
  };

  return (
    <section id="congress" className="py-20 bg-background relative overflow-hidden mb-40">
      {/* Simple decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          ref={congressRef}
          initial="initial"
          animate={congressInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full text-sm tracking-wider uppercase mb-6">
              Próximos Eventos
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
              EVENTOS
              <span className="text-blue-600 block">ESPECIALES</span>
            </h2>
          </motion.div>

          {/* Congress Card */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Congress Info */}
                  <div className="p-12 bg-gradient-to-br from-white to-blue-50/30">
                    <div className="mb-8">
                      <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                        {congressData.titulo.split(' ')[0]}
                      </h3>
                      <div className="inline-block bg-gray-900 text-yellow-400 px-6 py-2 transform -rotate-1">
                        <span className="text-xl font-bold tracking-wide">
                          DE {congressData.titulo.split(' ')[2]}
                        </span>
                      </div>
                      <h4 className="text-5xl lg:text-6xl font-black text-gray-900 mt-4 tracking-tight">
                        {congressData.subtitulo.toUpperCase()}
                      </h4>
                    </div>

                    {/* Bible Verse */}
                    <div className="border-l-4 border-yellow-400 pl-6 mb-8">
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-2">
                        "{congressData.versiculo.texto}"
                      </blockquote>
                      <p className="text-blue-600 font-bold text-sm tracking-wider">
                        — {congressData.versiculo.cita}
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">
                          {formatDate(congressData.fecha.inicio)} al {formatDate(congressData.fecha.fin)}, 2025
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">{congressData.fecha.hora}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">{congressData.ubicacion.direccion}</p>
                          <p className="text-sm text-gray-600">
                            {congressData.ubicacion.ciudad}, {congressData.ubicacion.pais}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <User className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">{congressData.ubicacion.nombre_iglesia}</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-base tracking-wider uppercase w-full lg:w-auto"
                    >
                      Más Información
                    </Button>
                  </div>

                  {/* Visual Section - Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src="CongresoCaballeros.png"
                      alt="Congreso de Varones - Llamados"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CongressSection;