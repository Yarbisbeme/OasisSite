import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Sparkles, Quote, Cross, Heart, Stethoscope, Baby, Utensils, Church, ChevronLeft, ChevronRight } from "lucide-react";

// Importar imágenes
import donacionRopa from "@/assets/sananos-donacion-ropa.jpg";
import operativoMedico from "@/assets/sananos-operativo-medico.jpg";
import actividadesNinos from "@/assets/sananos-actividades-ninos.jpg";
import comidaComunitaria from "@/assets/sananos-comida-comunitaria.jpg";
import eventoPrincipal from "@/assets/sananos-evento-principal.jpg";

const SananosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [showPrevEvents, setShowPrevEvents] = useState(false);

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" }
  };

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

  // Contenido adaptado del documento
  const activities = [
    {
      title: "Donación de Ropa",
      description: "Entrega gratuita de prendas nuevas y usadas a familias de escasos recursos.",
      image: donacionRopa,
      icon: Heart,
      color: "text-pink-400"
    },
    {
      title: "Operativo Médico",
      description: "Consultas, entrega de medicamentos y chequeos básicos sin costo.",
      image: operativoMedico,
      icon: Stethoscope,
      color: "text-blue-400"
    },
    {
      title: "Actividades para Niños",
      description: "Talleres, juegos y dinámicas que enseñan valores cristianos.",
      image: actividadesNinos,
      icon: Baby,
      color: "text-green-400"
    },
    {
      title: "Alimentación Gratuita",
      description: "Comidas calientes y nutritivas servidas con amor.",
      image: comidaComunitaria,
      icon: Utensils,
      color: "text-orange-400"
    },
    {
      title: "Evento Principal",
      description: "Tiempo de alabanza, predicación y oración por sanidad espiritual y física.",
      image: eventoPrincipal,
      icon: Church,
      color: "text-purple-400"
    }
  ];

  const previousEvents = [
    { year: "2024", theme: "Este es el tema", attendees: "800+", highlight: "Mayor asistencia histórica" },
    {
      year: "2023",
      theme: "Restauración Total",
      attendees: "650+",
      highlight: "Enfoque en liberación espiritual"
    },
    {
      year: "2022",
      theme: "Fe Inquebrantable",
      attendees: "500+",
      highlight: "Retorno tras la pandemia"
    },
    {
      year: "2021",
      theme: "Esperanza Viva",
      attendees: "300+",
      highlight: "Primer evento masivo"
    },
    {
      year: "2020",
      theme: "Este es el tema",
      attendees: "400+",
      highlight: "Primer SANANOS"
    }
  ];

  const testimonios = [
    {
      texto: "Llegué con una enfermedad crónica y fui completamente restaurada por el poder de Dios.",
      autor: "— ANA M.",
      color: "primary"
    },
    {
      texto: "Mi matrimonio estaba al borde del divorcio, y Dios lo restauró durante este evento.",
      autor: "— LUIS P.",
      color: "accent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length)
        setIsTransitioning(false)
      }, 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [activities.length])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length)
      setIsTransitioning(false)
    }, 200)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
      setIsTransitioning(false)
    }, 200)
  }

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 200)
    }
  }

  const getVisibleIndex = (offset: number) => {
    return (currentIndex + offset + activities.length) % activities.length
  }

  return (
      
    <section  id="sananos" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-36 h-36 sm:w-72 sm:h-72 bg-accent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-primary rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      


      {/** Primera Parte */}
      <div className="container max-w-7xl relative z-10 ">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold tracking-wider bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors"
            >
              EVENTO ESPECIAL ANUAL
            </Badge>
            <motion.h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                SANANOS
              </span>
            </motion.h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Un encuentro especial donde experimentamos el poder sanador de Dios en nuestras vidas, cuerpos y
              corazones.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 h-full">
            <motion.div variants={itemVariants} ref={cardRef}>
              <Card className="bg-gradient-to-r from-primary to-primary/90 border-2 border-accent/30 p-8 sm:p-12 text-primary-foreground text-left shadow-2xl relative overflow-hidden -mr-16 rounded-l-2xl rounded-r-none sm:ml-0 sm:mr-0 sm:rounded-2xl pr-24 ">
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="w-16 h-12 sm:w-24 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 shadow-lg">
                    <Cross className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight sm:ml-4">
                    PROPÓSITO ESPIRITUAL
                  </h3>
                </div>
                <p className="relative text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-6">
                  Sananos es más que un evento; es un encuentro divino donde creemos firmemente que "por sus llagas
                  fuimos nosotros curados" (Isaías 53:5).
                </p>
                <motion.span
                  className="absolute left-6 sm:left-0 bottom-6 h-[4px] bg-white rounded-full"
                  variants={lineVariants}
                  initial="hidden"
                  animate={cardInView ? "visible" : "hidden"}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-8 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl my-2 font-bold text-white mb-6 sm:mb-8 tracking-tight">
                    TESTIMONIOS DE FE
                  </h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="bg-white/10 border-l-4 border-primary rounded-r-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                      <p className="text-slate-200 text-base sm:text-lg italic mb-3 sm:mb-4 leading-relaxed">
                        "Llegué con dolor en mi corazón y salí con paz en mi alma. Dios me sanó completamente."
                      </p>
                      <p className="text-primary font-bold tracking-wider text-sm">— MARÍA G.</p>
                    </Card>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="bg-white/10 border-l-4 border-accent rounded-r-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-accent mb-3 sm:mb-4" />
                      <p className="text-slate-200 text-base sm:text-lg italic mb-3 sm:mb-4 leading-relaxed">
                        "Mi familia fue restaurada durante Sananos. El poder de Dios se manifestó de manera
                        sobrenatural."
                      </p>
                      <p className="text-accent font-bold tracking-wider text-sm">— CARLOS R.</p>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/**Carroucel */}
      <div className="container mx-auto px-4 relative z-10 ">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            NUESTRAS <span className="text-blue-400">ACTIVIDADES</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Conoce las diferentes maneras en que servimos a nuestra comunidad durante el evento SANANOS
          </p>
        </div>

        <div
          className={`relative sm:scale-110 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-6 min-h-[500px] px-8">
            {/* Item Izquierdo */}
            <div
              className={`flex-shrink-0 transition-all duration-300 ease-out cursor-pointer opacity-70 hover:opacity-90 ${
                isTransitioning ? "transform translate-x-4 opacity-50" : ""
              }`}
              onClick={() => goToPrevious()}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-64 h-80 transform scale-90 hover:scale-95 transition-all duration-300">
                <img
                  src={activities[getVisibleIndex(-1)].image || "/placeholder.svg"}
                  alt={activities[getVisibleIndex(-1)].title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold text-center">{activities[getVisibleIndex(-1)].title}</h3>
                </div>
              </div>
            </div>

            {/* Item Central (Activo) - Con efecto de transición */}
            <div
              className={`flex-shrink-0 transition-all duration-500 ease-out z-10 ${
                isTransitioning ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-110 translate-y-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-80 h-96 transform hover:scale-115 transition-all duration-300">
                <img
                  src={activities[currentIndex].image || "/placeholder.svg"}
                  alt={activities[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    {(() => {
                      const IconComponent = activities[currentIndex].icon
                      return <IconComponent className={`${activities[currentIndex].color} h-6 w-6 mr-3`} />
                    })()}
                    <div className="h-px bg-white/40 flex-1"></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{activities[currentIndex].title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">{activities[currentIndex].description}</p>

                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-blue-400 rounded-full mr-2"></div>
                    <div className="w-2 h-1 bg-white/50 rounded-full mr-1"></div>
                    <div className="w-2 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item Derecho */}
            <div
              className={`flex-shrink-0 transition-all duration-300 ease-out cursor-pointer opacity-70 hover:opacity-90 ${
                isTransitioning ? "transform -translate-x-4 opacity-50" : ""
              }`}
              onClick={() => goToNext()}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-64 h-80 transform scale-90 hover:scale-95 transition-all duration-300">
                <img
                  src={activities[getVisibleIndex(1)].image || "/placeholder.svg"}
                  alt={activities[getVisibleIndex(1)].title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold text-center">{activities[getVisibleIndex(1)].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Esto son mis indicadores */}
        {/* Indicador + Flechas */}
        <div
          className={`flex items-center justify-center gap-4 mt-4 mb-14 transition-all duration-1000 delay-500 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Flecha izquierda - visible solo en mobile */}
          <button
            onClick={goToPrevious}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 sm:hidden"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Indicadores */}
          <div className="flex space-x-3">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-blue-400 rounded-full scale-125"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full hover:scale-110"
                }`}
              />
            ))}
          </div>

          {/* Flecha derecha - visible solo en mobile */}
          <button
            onClick={goToNext}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 sm:hidden"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/** Segunda Parte */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <Card className="bg-gradient-to-r from-primary to-primary/90 border-2 border-accent/30 p-8 sm:p-12 text-primary-foreground text-center shadow-2xl relative overflow-hidden -ml-16 rounded-r-2xl rounded-l-none sm:ml-0 sm:mr-0 sm:rounded-2xl pl-20">
          
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-20 sm:h-20 bg-accent/10 rounded-full blur-lg sm:blur-xl"></div>
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-16 sm:h-16 bg-accent/10 rounded-full blur-lg sm:blur-xl"></div>

          <motion.h3
            className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 tracking-tight relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            PRÓXIMO EVENTO{" "} <br/>
            <span className="bg-accent/20 mt-4 px-3 sm:px-4 py-1 rounded-lg border border-accent/30 text-lg sm:text-2xl lg:text-3xl">
              SANANOS 2026
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10 ">
            {[{ icon: Calendar, label: "FECHA", value: "Marzo" }, { icon: Users, label: "MODALIDAD", value: "PRESENCIAL" }].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent-foreground" />
                </div>
                <p className="text-accent font-bold text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">{item.value}</p>
              </motion.div>
            ))}
            {[{ icon: MapPin, label: "LUGAR", value: "Play de Softball, Villa Fundación" }].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent-foreground" />
                </div>
                <p className="text-accent font-bold text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {previousEvents.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">EVENTOS ANTERIORES</h3>
              <p className="text-slate-400 text-lg">5 años transformando vidas a través del poder de Dios</p>
            </div>

            {/* Versión escritorio: siempre visible */}
            <div className="hidden sm:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {previousEvents.map((event, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 group"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{event.year}</h4>
                  <p className="text-sm text-slate-300 mb-2 font-medium">{event.theme}</p>
                  <p className="text-lg font-bold text-accent mb-1">{event.attendees}</p>
                  <p className="text-xs text-slate-400">{event.highlight}</p>
                </Card>
              ))}
            </div>

            {/* Versión móvil: con botón para mostrar */}
            <div className="sm:hidden">
              {showPrevEvents && (
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {previousEvents.map((event, index) => (
                    <Card
                      key={index}
                      className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 group"
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{event.year}</h4>
                      <p className="text-sm text-slate-300 mb-2 font-medium">{event.theme}</p>
                      <p className="text-lg font-bold text-accent mb-1">{event.attendees}</p>
                      <p className="text-xs text-slate-400">{event.highlight}</p>
                    </Card>
                  ))}
                </div>
              )}

              <div className="text-center mt-6">
                <button
                  onClick={() => setShowPrevEvents(!showPrevEvents)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {showPrevEvents ? "Ver menos" : "Ver más"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SananosSection;