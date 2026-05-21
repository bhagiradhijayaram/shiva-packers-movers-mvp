import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
    >
      <motion.a
        href="https://wa.me/917901082907"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
        className="h-13 w-13 h-14 w-14 rounded-full bg-foreground text-background shadow-glow flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="tel:+917901082907"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-background text-foreground border border-border shadow-elevated flex items-center justify-center"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
    </motion.div>
  );
}
