import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Book } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-white via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-gray-800"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary font-medium rounded-full text-sm tracking-wide">
                <Heart className="w-4 h-4" />
                Bienvenidos a nuestra comunidad
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              OASIS DE
              <span className="text-accent block font-black">BENDICIÓN</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-12 max-w-xl">
              <div className="border-l-4 border-accent pl-6 mb-8 bg-white/50 p-6 rounded-r-lg shadow-sm">
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 font-medium">
                  "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar"
                </blockquote>
                <p className="text-primary font-bold tracking-wider text-sm">— MATEO 11:28</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Únete a nosotros
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary font-semibold px-8 py-4 text-base rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="#horarios">
                  Ver horarios
                </a>
              </Button>
            </motion.div>

            {/* Stats section */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Miembros</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">15</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Book className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">20+</div>
                <div className="text-sm text-gray-600">Ministerios</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Interior de la iglesia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-lg">Próximo Servicio</p>
                      <p className="text-accent font-semibold">DOMINGO 10:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;