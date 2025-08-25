import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Plane, Calendar, Heart, ArrowRight, Globe } from "lucide-react";
import missionSanJuan from "@/assets/mission-san-juan-2022.jpg";
import missionMonteCristi from "@/assets/mission-monte-cristi-2024.jpg";
import missionTeamGroup from "@/assets/mission-team-group.jpg";

const MissionsSection = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const missionsRef = useRef(null);
  const nextMissionRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const missionsInView = useInView(missionsRef, { once: true, margin: "-100px" });
  const nextMissionInView = useInView(nextMissionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const pastMissions = [
    {
      year: "2022",
      destination: "San Juan, RD",
      participants: "40+ misioneros",
      impact: "300+ personas alcanzadas",
      image: missionSanJuan
    },
    {
      year: "2024", 
      destination: "Monte Cristi, RD",
      participants: "80+ misioneros",
      impact: "100+ familias bendecidas",
      image: missionMonteCristi
    }
  ];

  return (
    <section id="missions" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Elementos decorativos dramáticos */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-yellow-500/5"></div>
      
      {/* Texturas de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          {/* Hero Section - Inspirado en el diseño de referencia */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 relative"
          >
            {/* Badge con estilo vintage */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <Badge className="text-xs px-6 py-3 bg-yellow-500/20 text-yellow-200 border border-yellow-500/40 backdrop-blur-sm rounded-full font-medium tracking-widest">
                <Globe className="mr-2 h-4 w-4" />
                MISIONES INTERNACIONALES
              </Badge>
            </motion.div>
            
            {/* Título principal con efecto dramático */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-12"
            >
              {/* Línea decorativa superior */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-4">
                <span className="block text-white bg-clip-text drop-shadow-2xl">
                  LLEVANDO
                </span>
                <span className="block text-yellow-400 drop-shadow-2xl transform -rotate-1">
                  ESPERANZA
                </span>
                <span className="block text-blue-400 text-4xl md:text-5xl lg:text-6xl font-light italic tracking-normal">
                  es nuestro propósito
                </span>
              </h1>
              
              {/* Línea decorativa inferior */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </motion.div>

            {/* Subtítulo con estilo elegante */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Transformando vidas a través del amor de Cristo en cada misión
            </motion.p>
          </motion.div>

        </motion.div>
        
        {/* Estadísticas compactas con estilo moderno */}
        <motion.div 
          ref={statsRef}
          variants={itemVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
            <div className="text-center p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">3</div>
              <div className="text-slate-400 text-xs md:text-sm uppercase tracking-wider">Misiones</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">150+</div>
              <div className="text-slate-400 text-xs md:text-sm uppercase tracking-wider">Misioneros</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">700+</div>
              <div className="text-slate-400 text-xs md:text-sm uppercase tracking-wider">Vidas</div>
          </div>
        </motion.div>

        {/* Misiones pasadas con diseño compacto */}
        <motion.div 
          ref={missionsRef}
          variants={containerVariants}
          initial="hidden"
          animate={missionsInView ? "visible" : "hidden"}
          className="mb-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pastMissions.map((mission, index) => (
                <motion.div
                  key={mission.year}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm h-64">
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <img 
                        src={mission.image} 
                        alt={`Misión ${mission.destination} ${mission.year}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30"></div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <Badge className="bg-yellow-500 text-slate-900 font-bold text-xs">
                          {mission.year}
                        </Badge>
                        <Plane className="w-5 h-5 text-yellow-400" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {mission.destination}
                        </h3>
                        <div className="space-y-1">
                          <div className="flex items-center text-slate-300 text-sm">
                            <Users className="w-3 h-3 mr-2 text-blue-400" />
                            {mission.participants}
                          </div>
                          <div className="flex items-center text-slate-300 text-sm">
                            <Heart className="w-3 h-3 mr-2 text-red-400" />
                            {mission.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Próxima misión - Destacada con estilo dramático */}
        <motion.div 
          ref={nextMissionRef}
          variants={itemVariants}
          initial="hidden"
          animate={nextMissionInView ? "visible" : "hidden"}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="mt-24"
        >
             <Card className="p-12 bg-slate-800/30 border-t-2 border-yellow-500/50 border-r border-b border-l border-slate-700/30 backdrop-blur-sm relative overflow-hidden group rounded-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

               {/* Elementos decorativos */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]"></div>
               <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>

               {/* Línea decorativa */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-70"></div>

               <div className="relative z-10 max-w-4xl mx-auto">
                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                   <div className="text-left">
                     <Badge variant="secondary" className="mb-4 bg-yellow-500/80 text-slate-900 font-bold backdrop-blur-sm px-3 py-1 text-xs">
                       PRÓXIMA MISIÓN
                     </Badge>

                     <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">Misión Seibo <span className="text-yellow-400">2025</span></h3>
                     <p className="text-lg text-yellow-300/80 mb-6 italic">"Sembrando Esperanza"</p>

                     <div className="flex flex-wrap gap-6 mb-8">
                       <div className="flex items-center text-slate-300">
                         <MapPin className="mr-2 h-4 w-4 text-yellow-400" />
                         <span>Seibo, RD</span>
                       </div>

                       <div className="flex items-center text-slate-300">
                         <Users className="mr-2 h-4 w-4 text-yellow-400" />
                         <span>80+ misioneros</span>
                       </div>

                       <div className="flex items-center text-slate-300">
                         <Calendar className="mr-2 h-4 w-4 text-yellow-400" />
                         <span>Agosto 2025</span>
                       </div>
                     </div>
                   </div>

                   <div>
                     <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-6 rounded-xl group shadow-lg shadow-yellow-500/20">
                       Únete a la Misión
                       <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                   </div>
                 </div>
               </div>
            </Card>
          </motion.div>
      </div>
    </section>
  );
};

export default MissionsSection;