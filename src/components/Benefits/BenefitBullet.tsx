import { motion } from "framer-motion";
import { IBenefitBullet } from "../../app/types";

const childVariants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 },
  },
};

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-5"
      variants={childVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="mx-auto mt-3 flex w-fit flex-shrink-0 justify-center lg:mx-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-foreground-accent text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitBullet;
