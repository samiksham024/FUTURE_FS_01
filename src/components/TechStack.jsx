import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/data';

const TechStack = () => {
    // Flatten skills for the marquee
    const allSkills = techStack.flatMap(category => category.skills);
    // Split into top and bottom rows for visual variety
    const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
    const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

    const marqueeVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };

    const marqueeVariantsReverse = {
        animate: {
            x: [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <section className="tech-stack" style={{ padding: '6rem 0', overflow: 'hidden', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>
                        Powering Innovation
                    </p>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
                        My Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="marquee-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <motion.div
                            style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
                            variants={marqueeVariants}
                            animate="animate"
                        >
                            {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <motion.div
                            style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
                            variants={marqueeVariantsReverse}
                            animate="animate"
                        >
                            {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const SkillCard = ({ skill }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--card-border)',
        borderRadius: '50px',
        backdropFilter: 'blur(5px)',
        minWidth: 'max-content'
    }}>
        <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
        <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{skill.name}</span>
    </div>
);

export default TechStack;
