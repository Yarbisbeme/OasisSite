import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, MapPin, Users, Sparkles, Quote, Cross, Heart, Stethoscope, Baby, Utensils, Church } from "lucide-react";

// Importar imágenes
import donacionRopa from "@/assets/sananos-donacion-ropa.jpg";
import operativoMedico from "@/assets/sananos-operativo-medico.jpg";
import actividadesNinos from "@/assets/sananos-actividades-ninos.jpg";
import comidaComunitaria from "@/assets/sananos-comida-comunitaria.jpg";
import eventoPrincipal from "@/assets/sananos-evento-principal.jpg";

const SananosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      transition: { duration: 0.6 },
    },
  };

  const activities = [
    {
      title: "Donación de Ropa",
      description: "Proporcionamos ropa nueva y usada a familias necesitadas de nuestra comunidad",
      image: donacionRopa,
      icon: Heart,
      color: "text-pink-400"
    },
    {
      title: "Operativo Médico",
      description: "Servicios médicos gratuitos incluyendo consultas, medicamentos y exámenes básicos",
      image: operativoMedico,
      icon: Stethoscope,
      color: "text-blue-400"
    },
    {
      title: "Actividades para Niños",
      description: "Juegos, actividades educativas y momentos especiales diseñados para los más pequeños",
      image: actividadesNinos,
      icon: Baby,
      color: "text-green-400"
    },
    {
      title: "Alimentación Gratuita",
      description: "Comidas calientes servidas con amor para toda la familia durante el evento",
      image: comidaComunitaria,
      icon: Utensils,
      color: "text-orange-400"
    },
    {
      title: "Evento Principal",
      description: "Momento de adoración, predicación y oración por sanidad espiritual y física",
      image: eventoPrincipal,
      icon: Church,
      color: "text-purple-400"
    }
  ];

  const previousEvents = [
    {
      year: "2024",
      theme: "Este es el tema",
      attendees: "800+",
      highlight: "Mayor asistencia histórica"
    },
    {
      year: "2023",
      theme: "Este es el tema",
      attendees: "650+",
      highlight: "Liberación Espiritual"
    },
    {
      year: "2022",
      theme: "No se",
      attendees: "500+",
      highlight: "Inicio post-pandemia"
    },
    {
      year: "2021",
      theme: "Este es el tema",
      attendees: "300+",
      highlight: "Primer Evento Masivo"
    },
    {
      year: "2020",
      theme: "Este es el tema",
      attendees: "400+",
      highlight: "Primer SANANOS"
    }
  ];

  return (
    <section id="sananos" className="py-24 px-6 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold tracking-wider bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
              EVENTO ESPECIAL ANUAL
            </Badge>
            <motion.h2 
              className="text-5xl lg:text-9xl font-black text-white mb-8 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                SANANOS
              </span>
            </motion.h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Un encuentro especial donde experimentamos el poder sanador de Dios en nuestras vidas, cuerpos y
              corazones.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 border-0 p-12 h-full shadow-xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Cross className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-6 tracking-tight">PROPÓSITO ESPIRITUAL</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Sananos es más que un evento; es un encuentro divino donde creemos firmemente que "por sus llagas
                  fuimos nosotros curados" (Isaías 53:5). Durante este tiempo especial, nos congregamos para buscar la
                  sanidad integral que solo Cristo puede ofrecer.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">TESTIMONIOS DE FE</h3>
                </div>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white/10 border-l-4 border-primary rounded-r-xl p-6 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-slate-200 text-lg italic mb-4 leading-relaxed">
                        "Llegué con dolor en mi corazón y salí con paz en mi alma. Dios me sanó completamente."
                      </p>
                      <p className="text-primary font-bold tracking-wider">— MARÍA G.</p>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white/10 border-l-4 border-accent rounded-r-xl p-6 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all">
                      <Quote className="h-8 w-8 text-accent mb-4" />
                      <p className="text-slate-200 text-lg italic mb-4 leading-relaxed">
                        "Mi familia fue restaurada durante Sananos. El poder de Dios se manifestó de manera
                        sobrenatural."
                      </p>
                      <p className="text-accent font-bold tracking-wider">— CARLOS R.</p>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sección Visual de Actividades */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">NUESTRAS ACTIVIDADES</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Conoce las diferentes maneras en que servimos a nuestra comunidad durante el evento SANANOS
              </p>
            </div>
            
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {activities.map((activity, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="overflow-hidden bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={activity.image} 
                            alt={activity.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <activity.icon className={`h-6 w-6 ${activity.color}`} />
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                            {activity.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </Carousel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-gradient-to-r from-primary to-primary/90 border-2 border-accent/30 p-12 text-primary-foreground text-center shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                
                <motion.h3 
                  className="text-4xl font-bold mb-12 tracking-tight relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  PRÓXIMO EVENTO <span className=" bg-accent/20 px-4 py-1 rounded-lg border border-accent/30">SANANOS 2025</span>
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    { icon: Calendar, label: "FECHA", value: "Marzo" },
                    { icon: MapPin, label: "LUGAR", value: "Play de Softball, Villa Fundación" },
                    { icon: Users, label: "MODALIDAD", value: "PRESENCIAL" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="group"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <item.icon className="h-10 w-10 text-accent-foreground" />
                      </div>
                      <p className="text-accent font-bold text-sm tracking-wider mb-2">{item.label}</p>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {previousEvents.length > 0 && (
            <motion.div variants={itemVariants} className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">EVENTOS ANTERIORES</h3>
                <p className="text-slate-400 text-lg">5 años transformando vidas a través del poder de Dios</p>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {previousEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 group">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{event.year}</h4>
                      <p className="text-sm text-slate-300 mb-2 font-medium">{event.theme}</p>
                      <p className="text-lg font-bold text-accent mb-1">{event.attendees}</p>
                      <p className="text-xs text-slate-400">{event.highlight}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SananosSection;