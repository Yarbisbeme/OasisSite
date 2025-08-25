import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Users, Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const schedules = [
    {
      day: "Martes",
      subtitle: "Noche de juvilo", 
      services: [
        { name: "Servivio Semanal de adoracion", time: "7:30 PM" }
      ],
      featured: true,
    },
    {
      day: "Jueves", 
      subtitle: "Crecimiento espiritual",
      services: [
        { name: "Estudio Bíblico", time: "7:30 PM" }
      ],
      featured: false,
    },
    {
      day: "Domingo",
      subtitle: "Día principal de adoración",
      services: [
        { name: "Servicio Devocional", time: "9:00 AM" }
      ],
      featured: true,
    },
  ];

  return (
    <section id="schedule" className="py-20 relative overflow-hidden bg-dark-bg">
      {/* Decorative elements - usando tu paleta */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-40"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header - Estilo minimalista moderno */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-text-muted text-sm font-medium mb-8">
              <Clock className="w-4 h-4" />
              Planifica tu visita
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              <span className="text-primary block mb-2">Horarios</span>
              <span className="text-white">de Servicios</span>
            </h2>
            
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Únete a nuestra comunidad en cualquiera de nuestros servicios. 
              Cada encuentro es una oportunidad para crecer espiritualmente.
            </p>
          </motion.div>

          {/* Tarjetas de horarios - Estilo minimalista moderno */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {schedules.map((schedule, index) => (
              <motion.div key={schedule.day} variants={itemVariants}>
                <Card
                  className={`group h-full border-0 backdrop-blur-sm p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    schedule.featured
                      ? 'ring-2 ring-primary/30 bg-primary/5'
                      : 'ring-2 ring-yellow-400/30 bg-yellow-400/5'
                  }`}
                >
                  {/* Número del día */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`text-6xl font-black ${schedule.featured ? 'text-primary' : 'text-accent'} opacity-70 group-hover:opacity-40 transition-opacity`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {schedule.featured && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30">
                        PRINCIPAL
                      </span>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{schedule.day}</h3>
                      <p className="text-text-muted text-sm font-medium">{schedule.subtitle}</p>
                    </div>

                    {/* Servicios */}
                    <div className="space-y-3 pt-4">
                      {schedule.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                          <span className="text-white font-semibold text-sm">{service.name}</span>
                          <span className={`font-black text-lg ${schedule.featured ? 'text-primary' : 'text-accent'}`}>
                            {service.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA - Estilo minimalista moderno */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="relative p-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-bold mb-6">
                  <Heart className="w-4 h-4" />
                  BIENVENIDO
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">
                  ¿Primera vez <span className="text-primary">visitándonos?</span>
                </h3>
                
                <p className="text-text-muted mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  Te damos la bienvenida. Ven como eres, todos son bienvenidos en nuestra familia.
                </p>
                
                <Button className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Planifica tu visita
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;