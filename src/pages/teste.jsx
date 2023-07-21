import { motion } from "framer-motion";

export default function Teste() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-[10000px] flex justify-center"
    >
      <h1 className="text-white mt-20">Teste</h1>
    </motion.div>
  );
}
