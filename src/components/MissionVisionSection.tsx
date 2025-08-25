import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Cross, Users, Globe } from "lucide-react";

const MissionVisionSection = () => {
  const ref = useRef(null);
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
    {
      icon: Cross,
      title: "Fe",
      description: "Creemos en el poder transformador de Cristo y su palabra"
    },
    {
      icon: Heart,
      title: "Amor",
      description: "Amamos a Dios sobre todas las cosas y al prójimo como a nosotros mismos"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Valoramos la unidad y el compañerismo cristiano"
    },
    {
      icon: Globe,
      title: "Misión",
      description: "Compartimos el evangelio hasta lo último de la tierra"
    }
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra Misión, Visión y Valores
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Los pilares fundamentales que guían nuestro caminar como iglesia y comunidad de fe
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser una iglesia que impacte vidas para la gloria de Dios, predicando el evangelio 
                de Jesucristo con poder, formando discípulos comprometidos y sirviendo a nuestra 
                comunidad con amor incondicional, llevando esperanza y sanidad a través del poder 
                del Espíritu Santo.
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
                <h3 className="text-2xl font-bold text-foreground">Nuestra Visión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser una iglesia de avivamiento y sanidad, reconocida por manifestar el poder 
                sobrenatural de Dios, donde cada persona experimente una transformación radical 
                y sea equipada para ser testimonio vivo del amor de Cristo en San Cristóbal 
                y más allá.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="p-6 h-full text-center hover:shadow-clean transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Versículo base */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-primary text-primary-foreground max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl italic mb-4">
              "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre 
              del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las 
              cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el 
              fin del mundo."
            </blockquote>
            <cite className="text-lg font-semibold">Mateo 28:19-20</cite>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;