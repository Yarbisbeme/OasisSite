import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  Calendar,
  Clock
} from "lucide-react";

const MinistriesSection = () => {
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

  const ministries = [
    {
      name: "Ministerio de Jóvenes",
      icon: Users,
      description: "Formando la nueva generación de líderes cristianos con pasión por Dios",
      leader: "Aneudy Ruiz",
      color: "primary"
    },
    {
      name: "Ministerio de Damas",
      icon: Crown,
      description: "Mujeres virtuosas que impactan su familia y comunidad",
      leader: "Yokasta",
      color: "accent"
    },
    {
      name: "Ministerio de Caballeros",
      icon: Heart,
      description: "Hombres de fe comprometidos con su llamado espiritual",
      leader: "Alexander de la Rosa",
      color: "primary"
    },
    {
      name: "Ministerio de Niños",
      icon: Baby,
      description: "Sembrando semillas de fe en los corazones más pequeños",
      leader: "Crissany",
      color: "accent"
    },
    {
      name: "Ministerio de Evangelismo",
      icon: Megaphone,
      description: "Llevando las buenas nuevas a cada rincón de nuestra comunidad",
      leader: "Roman Gonzalez",
      color: "primary"
    },
    {
      name: "Ministerio de Dorcas",
      icon: HandHelping,
      description: "Sirviendo a los necesitados con amor y compasión cristiana",
      leader: "Hermana Rosa Jiménez",
      color: "accent"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Nuestros Ministerios
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encuentra Tu Lugar de Servicio
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada ministerio es una oportunidad para crecer espiritualmente, servir a otros 
            y usar los dones que Dios te ha dado para Su gloria.
          </motion.p>
        </motion.div>

        {/* Ministries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {ministries.map((ministry, index) => (
            <motion.div key={ministry.name} variants={itemVariants}>
              <Card className={`p-6 h-full hover:shadow-clean transition-all duration-300 border-2 ${
                ministry.color === 'primary' 
                  ? 'border-primary/20 hover:border-primary/40' 
                  : 'border-accent/20 hover:border-accent/40'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${
                    ministry.color === 'primary' 
                      ? 'bg-primary/10' 
                      : 'bg-accent/10'
                  }`}>
                    <ministry.icon className={`h-6 w-6 ${
                      ministry.color === 'primary' 
                        ? 'text-primary' 
                        : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {ministry.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {ministry.description}
                </p>
                
                <div className="space-y-3 mb-6">               
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{ministry.leader}</span>
                  </div>
                </div>
                
                <Button 
                  variant={ministry.color === 'primary' ? 'default' : 'secondary'} 
                  className="w-full"
                >
                  Más Información
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-primary text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Sientes el llamado a servir?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Cada don y talento tiene un propósito en el reino de Dios. 
              Descubre cómo puedes usar tus habilidades para bendecir a otros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Quiero Servir
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Más Información
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MinistriesSection;