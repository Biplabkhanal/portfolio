import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClickHeld, setIsClickHeld] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClickHeld(true);
    const handleMouseUp = () => setIsClickHeld(false);

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <motion.div
        className="cursor-dot"
        animate={{ scale: isClickHeld ? 0.8 : 1 }}
      />
      <motion.div
        className="cursor-bubble cursor-bubble-1"
        animate={{ scale: isClickHeld ? 0.8 : 1 }}
      />
      <motion.div
        className="cursor-bubble cursor-bubble-2"
        animate={{ scale: isClickHeld ? 0.8 : 1 }}
      />
      <motion.div
        className="cursor-bubble cursor-bubble-3"
        animate={{ scale: isClickHeld ? 0.8 : 1 }}
      />
      <motion.div
        className="cursor-bubble cursor-bubble-4"
        animate={{ scale: isClickHeld ? 0.8 : 1 }}
      />
    </motion.div>
  );
};

export default CustomCursor;
