import { AnimatePresence, motion } from 'framer-motion';
const headerVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

export const listTechnologies = [
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      NODE
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 1.9 }}
    >
      Typescript
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 2.2 }}
    >
      API's RestFull
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 2.5 }}
    >
      Clean Architecture
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 2.8 }}
    >
      Clean Code
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 3.1 }}
    >
      SOLID
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 3.4 }}
    >
      PHP
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 3.7 }}
    >
      Laravel
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 4.0 }}
    >
      CI/CD com GitHub Actions
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 4.3 }}
    >
      Versionamento com GitHub
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 4.6 }}
    >
      Microsserviços
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 4.9 }}
    >
      RabbitMQ (básico)
    </motion.li>
  </AnimatePresence>,
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 5.2 }}
    >
      Apache kafka (básico)
    </motion.li>
  </AnimatePresence>,
];
