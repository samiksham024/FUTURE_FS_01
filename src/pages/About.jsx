import React from 'react';
import { education, certifications, experience } from '../data/data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ marginBottom: '3rem' }}>About <span className="gradient-text">Me</span></h1>

                {/* Education Section */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ color: 'var(--accent-color)' }}>#</span> Education
                    </h2>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {education.map(edu => (
                            <div key={edu.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>{edu.degree}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{edu.date}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.score}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ color: 'var(--accent-color)' }}>#</span> Experience
                    </h2>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {experience.map(exp => (
                            <div key={exp.id} className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '1.2rem' }}>{exp.role}</h3>
                                    <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>{exp.date}</span>
                                </div>
                                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>{exp.company}</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ color: 'var(--accent-color)' }}>#</span> Certifications
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {certifications.map(cert => (
                            <div key={cert.id} className="card" style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    Issued by {cert.issuer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </motion.div>
        </div>
    );
};

export default About;
