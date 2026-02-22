'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxWrapperProps {
    children: ReactNode;
    offset?: number;
}

export const ParallaxWrapper = ({ children, offset = 200 }: ParallaxWrapperProps) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, offset]);

    return (
        <motion.div style={{ y }} className="absolute inset-0 z-0">
            {children}
        </motion.div>
    );
};

export const SlideInWrapper = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};
