import { motion } from "framer-motion";

const NameHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh]">
      {/* Name with Soft Glowing Effect */}
      <motion.h1
        className="text-6xl font-extrabold text-[#4B3F72] font-mono"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Shivani Kolanu
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-2xl text-[#4B3F72] mt-4 opacity-80 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Developer
      </motion.p>

      {/* Subtle Equalizer Effect */}
      <motion.div
        className="flex gap-2 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-[#4B3F72] rounded-full"
            animate={{
              height: [10, 40,  30, 20, 35, 45, 10], // Subtle height changes
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.8,
              delay: i * 0.15, // Staggered animation for each bar
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default NameHeader;
