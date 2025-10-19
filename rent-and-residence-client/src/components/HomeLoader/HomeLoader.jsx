import { motion } from "framer-motion";
export default function App() {
  const globalStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <section style={globalStyle}>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        style={{ maxWidth: "80vw" }}
      >
        {/* Ground line */}
        <motion.line
          x1="50"
          y1="550"
          x2="550"
          y2="550"
          stroke="#7854F6"
          strokeWidth="15"
          strokeLinecap="round"
          variants={draw}
          custom={1}
        />

        {/* Roof - curved path for better match */}
        <motion.path
          d="M 50 275 C 100 225, 200 150, 300 112.5 C 400 150, 500 225, 550 275"
          stroke="#7854F6"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={2}
        />

        {/* Chimney */}
        <motion.rect
          x="400"
          y="72"
          width="62.5"
          height="125"
          stroke="#7854F6"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          variants={draw}
          custom={3}
        />

        {/* Left wall */}
        <motion.line
          x1="100"
          y1="550"
          x2="100"
          y2="237.5"
          stroke="#7854F6"
          strokeWidth="15"
          strokeLinecap="round"
          variants={draw}
          custom={4}
        />

        {/* Right wall */}
        <motion.line
          x1="500"
          y1="550"
          x2="500"
          y2="237.5"
          stroke="#7854F6"
          strokeWidth="15"
          strokeLinecap="round"
          variants={draw}
          custom={5}
        />

        {/* Door */}
        <motion.path
          d="M 225 550 L 225 350 C 225 325, 375 325, 375 350 L 375 550"
          stroke="#7854F6"
          strokeWidth="15"
          fill="none"
          opacity="0.5"
          variants={draw}
          custom={6}
        />

        {/* Window (circle) */}
        <motion.circle
          cx="300"
          cy="237.5"
          r="50"
          stroke="#7854F6"
          strokeWidth="15"
          fill="none"
          opacity="0.5"
          variants={draw}
          custom={7}
        />
      </motion.svg>
    </section>
  );
}
