import { motion } from "framer-motion";
import { IBenefitBullet } from "../../app/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-5"
      variants={childVariants}
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
