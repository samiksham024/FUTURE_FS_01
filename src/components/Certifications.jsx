import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/data';

const Certifications = () => {
    return (
        <section className="certifications" style={{ padding: '4rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Continuous Learning</p>
                    <h2 style={{ fontSize: '2.5rem' }}>Certifications</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Courses and trainings I've completed.</p>
                </motion.div>

                <div className="certs-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    {certifications.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--accent-color)' }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.5rem',
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                color: 'var(--text-primary)',
                                maxWidth: '100%'
                            }}
                        >
                            <span style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                {cert.icon}
                            </span>
                            <div>
                                <h4 style={{ fontSize: '1rem', margin: 0 }}>{cert.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{cert.issuer}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
