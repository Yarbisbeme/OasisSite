import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Cross, Users, Globe, ArrowLeft, ArrowRight } from "lucide-react";

const MissionVisionSection = () => {
  const ref = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const isInView = useInView(ref, { once: true });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const values = [
    { icon: Users, title: "Compañerismo", description: "Fortalecemos la unidad y apoyo mutuo entre hermanos en Cristo" },
    { icon: Heart, title: "Amor", description: "Amamos como Cristo nos amó, sirviendo con compasión" },
    { icon: Cross, title: "Integridad", description: "Vivimos con honestidad, transparencia y fidelidad a la Palabra" },
    { icon: Globe, title: "Evangelismo", description: "Llevamos el mensaje de salvación a Villa Sabana Toro y más allá" },
    { icon: Target, title: "Disciplina", description: "Servimos con orden y compromiso en cada ministerio" },
    { icon: Eye, title: "Sanidad", description: "Oramos y ministramos restauración integral en Cristo" }
  ];


  return (
    <section id="mission" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 " ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/*
          */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tight">
              ¿Quienes
              <br />
              <span className="text-primary">Somos?</span>
            </h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Los pilares fundamentales que guían nuestro caminar como iglesia y comunidad de fe
           </motion.p>
          </motion.div>
          {/** 
           * 
           <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
             Nuestra Misión, Visión y Valores
           </motion.h2>
           <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Los pilares fundamentales que guían nuestro caminar como iglesia y comunidad de fe
           </motion.p>
           */}
        </motion.div>

        {/* Card de Nuestros Pastores */}
        <section className="relative max-w-7xl mx-auto px-6 py-12 mt-28 sm:mt-48 sm:mb-20 md:scale-90">
          {/* Card */}
          <div className="bg-[#e2e3da] rounded-2xl p-8 md:p-12 flex flex-col-reverse lg:flex-row items-center gap-10 relative overflow-visible">
            
            {/* Texto */}
            <div className="w-[90%] sm:w-auto sm:flex-1 sm:mt-20 lg:mt-0 mx-auto">
              {/* Título que sobresale */}
              <h2 className="sm:absolute sm:-top-[10%] mb-8 left-6 text-6xl md:text-7xl font-extrabold tracking-tight text-foreground/90 text-center sm:text-left">
                Nuestros <br />Lideres
              </h2>
              <p className="uppercase text-sm tracking-widest text-muted-foreground mb-2 text-center sm:text-left">
                Pastores
              </p>
              <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 text-center sm:text-left">
                Domingo + Rosanna
              </h3>
              <p className="text-xl text-black/70 mb-6 leading-relaxed max-w-2xl text-center sm:text-left">
                Pastores con una trayectoria de más de 15 años sirviendo a la comunidad de Villa Sabana Toro.
                Su compromiso es guiar espiritualmente a la iglesia, promover el amor fraternal y cumplir la
                Gran Comisión, siendo ejemplo de fe y servicio.
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="px-6 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition">
                  Conocer más
                </button>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative -mt-28 sm:mt-0 sm:relative lg:-mr-16 lg:-mt-32">
              <img
                src="/Pastores.jpeg"
                alt="Nuestros Pastores"
                className="w-[400px] md:w-[450px] rounded-xl object-cover shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cumplir con la gran comisión según Mateo 28:18-20, formando discípulos comprometidos
                y brindando enseñanza bíblica, teológica y pastoral para responder a las necesidades
                de la obra de Dios.
              </p>

            </Card>
          </motion.div>

          {/* Visión */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser una iglesia Cristo-céntrica que influya en Villa Sabana Toro y zonas aledañas,
                sensible a las necesidades espirituales y físicas, desarrollando ministerios dinámicos
                de evangelización y discipulado.
              </p>

            </Card>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h3>
            <p className="text-lg text-muted-foreground">
              Los principios que definen quiénes somos y cómo actuamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAll ? values : values.slice(0, 3)).map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="p-6 h-full text-center hover:shadow-clean transition-shadow flex flex-row gap-8 items-center">
                  <div className="flex flex-col">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-left">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Botón para móvil */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                {showAll ? "Ver menos" : "Ver todos"}
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;