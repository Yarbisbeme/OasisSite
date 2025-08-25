import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Users, Heart, Mail, Phone, MapPin } from "lucide-react";

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
      day: "Domingo",
      subtitle: "Día principal de adoración",
      services: [
        { name: "Escuela Dominical", time: "9:00 AM" },
        { name: "Servicio Principal", time: "10:30 AM" },
        { name: "Servicio Vespertino", time: "6:00 PM" },
      ],
      featured: true,
    },
    {
      day: "Miércoles", 
      subtitle: "Crecimiento espiritual",
      services: [
        { name: "Estudio Bíblico", time: "7:00 PM" },
        { name: "Tiempo de Oración", time: "8:30 PM" },
      ],
      featured: false,
    },
    {
      day: "Viernes",
      subtitle: "Encuentro juvenil", 
      services: [
        { name: "Reunión de Jóvenes", time: "7:30 PM" },
        { name: "Noche de Adoración", time: "8:30 PM" },
      ],
      featured: false,
    },
  ];

  return (
    <section id="schedule" className="py-20 relative overflow-hidden bg-[#111317]">
      <div className="relative container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Clean header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-text-muted text-sm font-medium mb-8">
              <Clock className="w-4 h-4" />
              Planifica tu visita
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Horarios de
              <span className="block text-accent font-bold">
                Servicios
              </span>
            </h2>
            
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Únete a nuestra comunidad en cualquiera de nuestros servicios. 
              Cada encuentro es una oportunidad para crecer espiritualmente.
            </p>
          </motion.div>

          {/* Clean schedule cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {schedules.map((schedule, index) => (
              <motion.div key={schedule.day} variants={itemVariants}>
                <Card className={`h-full border-0 bg-card-dark p-8 transition-all duration-300 hover:shadow-clean ${
                  schedule.featured ? 'ring-2 ring-primary/20' : ''
                }`}>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${schedule.featured ? 'bg-primary' : 'bg-accent'} flex items-center justify-center`}>
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{schedule.day}</h3>
                        {schedule.featured && (
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            Principal
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-text-muted text-sm">{schedule.subtitle}</p>
                    <div className="w-12 h-0.5 bg-accent mt-4" />
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    {schedule.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <span className="text-white font-medium">{service.name}</span>
                        <span className="text-white font-bold">{service.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact info section */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-card-dark rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-text-muted text-sm">info@iglesia.com</p>
            </div>
            
            <div className="text-center p-6 bg-card-dark rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Teléfono</h3>
              <p className="text-text-muted text-sm">(501) 123-4567</p>
            </div>
            
            <div className="text-center p-6 bg-card-dark rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Ubicación</h3>
              <p className="text-text-muted text-sm">Av. Principal 123, Ciudad</p>
            </div>
          </motion.div>

          {/* Clean CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-block p-8 bg-card-dark rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">¿Primera vez visitándonos?</h3>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Te damos la bienvenida. Ven como eres, todos son bienvenidos en nuestra familia.
              </p>
              <button className="px-8 py-3 bg-white text-dark-bg font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200">
                Planifica tu visita
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;