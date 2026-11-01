import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 160,
        damping: 40,
        mass: 0.3,
    });
    return (
        <div className="scroll-prog" aria-hidden="true">
            <motion.span style={{ scaleX }} />
        </div>
    );
}
