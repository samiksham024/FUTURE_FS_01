import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { techStack } from '../data/data';

const Home = () => {
    // Typewriter Effect Logic
    const texts = ["ECE student", "Web Developer", "Tech Enthusiast"];
    const [textIndex, setTextIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);
    const [blink, setBlink] = React.useState(true);
    const [showContact, setShowContact] = React.useState(false);
    const [status, setStatus] = React.useState(''); // 'sending', 'success', 'error'

    React.useEffect(() => {
        const timeout2 = setTimeout(() => { setBlink((prev) => !prev); }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    React.useEffect(() => {
        if (subIndex === texts[textIndex].length + 1 && !reverse) {
            setReverse(true); return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false); setTextIndex((prev) => (prev + 1) % texts.length); return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === texts[textIndex].length ? 1500 : 150, parseInt(Math.random() * 350)));
        return () => clearTimeout(timeout);
    }, [subIndex, textIndex, reverse, texts]);


    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            {/* HERO SECTION */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxWidth: '800px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 500 }}>
                        Hi, my name is
                    </p>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Samiksha M.
                    </h1>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        I build things for the web.
                    </h2>

                    <div style={{ fontSize: '1.5rem', marginBottom: '2rem', height: '2rem', color: 'var(--text-secondary)' }}>
                        I am a <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                            {`${texts[textIndex].substring(0, subIndex)}${blink ? "|" : " "}`}
                        </span>
                    </div>

                    <p style={{ maxWidth: '540px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        I'm a second year engineering student specializing in  Electronics and Communication.
                        I have a strong passion for full-stack development and building electronics projects.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com/samiksham024" target="_blank" rel="noopener noreferrer">
                            <button className="btn-secondary"><FaGithub /> GitHub</button>
                        </a>
                        <a href="https://www.linkedin.com/in/samiksha-m-683400335/" target="_blank" rel="noopener noreferrer">
                            <button className="btn-secondary"><FaLinkedin /> LinkedIn</button>
                        </a>
                        {/* Dropdown Toggle Button */}
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <button
                                className="btn-primary"
                                onClick={() => setShowContact(!showContact)}
                            >
                                <FaEnvelope /> Contact Me
                            </button>

                            {/* The Dropdown Itself */}
                            {showContact && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    style={{
                                        position: 'absolute',
                                        top: '120%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#1e293b',
                                        padding: '1.2rem',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                        zIndex: 100,
                                        width: 'max-content',
                                        minWidth: '240px'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#cbd5e1' }}>
                                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '50%' }}>
                                                <FaEnvelope style={{ color: '#38bdf8' }} />
                                            </div>
                                            <span style={{ fontSize: '0.95rem' }}>samiksham024@gmail.com</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#cbd5e1' }}>
                                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '50%' }}>
                                                <FaPhoneAlt style={{ color: '#38bdf8' }} />
                                            </div>
                                            <span style={{ fontSize: '0.95rem' }}>+91 80886 98003</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SKILLS SECTION */}
            <section style={{ padding: '4rem 0' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--accent-color)' }}>01.</span> Technical Skills
                    <span style={{ height: '1px', backgroundColor: 'var(--border-color)', flex: 1, maxWidth: '300px' }}></span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {techStack.map((category, index) => (
                        <div key={index} className="card">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>{category.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.skills.map(skill => (
                                    <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>
                                        <span>{skill.icon}</span> {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* CONTACT FORM SECTION */}
            <section style={{ padding: '4rem 0', maxWidth: '600px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>Send Message</h2>
                    <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Idea, project or internship? Drop a quick message here.</p>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setStatus('sending');
                            const formData = new FormData(e.target);
                            formData.append("access_key", "5dc292f6-e716-490a-b6c7-4f6b50bc6e15");

                            try {
                                const response = await fetch("https://api.web3forms.com/submit", {
                                    method: "POST",
                                    body: formData
                                });

                                const data = await response.json();

                                if (response.ok) {
                                    setStatus('success');
                                    e.target.reset();
                                    setTimeout(() => setStatus(''), 5000);
                                } else {
                                    console.error("Web3Forms Error:", data.message);
                                    setStatus('error');
                                }

                            } catch (error) {
                                console.error('Error:', error);
                                setStatus('error');
                            }
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                    >
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '4px', color: '#cbd5e1' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid #1e293b',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '0.95rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '4px', color: '#cbd5e1' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your.email@example.com"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid #1e293b',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '0.95rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '4px', color: '#cbd5e1' }}>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project, idea or question."
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid #1e293b',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    fontFamily: 'inherit'
                                }}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn-gradient"
                                style={{ marginTop: '0.5rem', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
                                disabled={status === 'sending'}
                            >
                                <FaPaperPlane style={{ marginRight: '0.6rem', fontSize: '0.9rem' }} />
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <div style={{ marginTop: '1rem', color: '#4ade80', fontSize: '0.95rem', fontWeight: 500, textAlign: 'center' }}>
                                    Message sent successfully! 🚀
                                </div>
                            )}
                            {status === 'error' && (
                                <div style={{ marginTop: '1rem', color: '#ef4444', fontSize: '0.95rem', fontWeight: 500, textAlign: 'center' }}>
                                    Failed to send message. Please try again.
                                </div>
                            )}
                            <div style={{ marginTop: '1rem', color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
                                Your message will be sent directly to my Gmail 📩
                            </div>
                        </div>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
