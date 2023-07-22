import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
const headerVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

export const listIconsTechnologies = [
  <AnimatePresence initial={true}>
    <motion.li
      key={0}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <Icon icon="la:node" color="white" width={48} height={48} />
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
      <Icon icon="bxl:typescript" color="white" width="48" height="48" />
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
      <Icon icon="mdi:api" color="white" width="48" height="48" />
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
      <Icon icon="akar-icons:php-fill" color="white" width="48" height="48" />
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
      <Icon icon="file-icons:laravel" color="white" width="48" height="48" />
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
      <Icon icon="bi:github" color="white" width="48" height="48" />
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
      <Icon icon="simple-icons:rabbitmq" color="white" width="48" height="48" />
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
      <Icon
        icon="simple-icons:apachekafka"
        color="white"
        width="48"
        height="48"
      />
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
      <Icon icon="file-icons:prisma" color="white" width="48" height="48" />
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
      <Icon icon="cib:mysql" color="white" width="48" height="48" />
    </motion.li>
  </AnimatePresence>,
];
