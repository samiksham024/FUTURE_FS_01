import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "5dc292f6-e716-490a-b6c7-4f6b50bc6e15");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                console.error("Web3Forms Error:", data.message);
                setStatus('error');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 0 4rem 0' }}>
            {/* Header matches reference: Centered, simple text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h1 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: '#fff' }}>Send Message</h1>
                <p style={{ color: '#a1a1aa', fontSize: '1rem' }}>Idea, project or internship? Drop a quick message here.</p>
            </motion.div>

            <div className="contact-grid">
                {/* Left Column: Form */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div>
                            <label style={{ marginLeft: '4px', color: '#cbd5e1' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label style={{ marginLeft: '4px', color: '#cbd5e1' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label style={{ marginLeft: '4px', color: '#cbd5e1' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Tell me about your project, idea or question."
                                required
                            ></textarea>
                        </div>
                        {/* Gradient Button from Index.css */}
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
                                <div style={{ marginTop: '1rem', color: '#4ade80', fontSize: '0.95rem', fontWeight: 500 }}>
                                    Message sent successfully! 🚀
                                </div>
                            )}
                            {status === 'error' && (
                                <div style={{ marginTop: '1rem', color: '#ef4444', fontSize: '0.95rem', fontWeight: 500 }}>
                                    Failed to send message. Please try again.
                                </div>
                            )}
                            <div style={{ marginTop: '1.5rem', color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                                Your message will be sent directly to my Gmail 📩
                            </div>
                        </div>
                    </form>
                </motion.div>


                {/* Right Column: Info Cards - STRICT MATCH TO IMAGE */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Top Card: Contact Info */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="contact-card"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            <div className="info-item">
                                <div className="icon-box"><FaEnvelope /></div>
                                <div>
                                    <div className="label">EMAIL</div>
                                    <div className="value">samiksham024@gmail.com</div>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><FaPhoneAlt /></div>
                                <div>
                                    <div className="label">PHONE</div>
                                    <div className="value">+91 80886 98003</div>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><FaMapMarkerAlt /></div>
                                <div>
                                    <div className="label">LOCATION</div>
                                    <div className="value">Bengaluru, India</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Card: Connect */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="contact-card"
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#94a3b8', fontWeight: 600 }}>
                            CONNECT
                        </div>
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/samiksha-m-683400335/" target="_blank" rel="noopener noreferrer" className="social-pill">
                                LinkedIn
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText('samiksham024@gmail.com');
                                    alert('Email copied to clipboard!');
                                }}
                                className="social-pill"
                                style={{ cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontFamily: 'inherit' }}
                            >
                                Copy Email
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr; /* Adjusted ratio to match image */
                    gap: 3rem;
                    align-items: start;
                }

                .contact-card {
                    background-color: var(--card-bg-dark); /* Dark Navy */
                    padding: 2.5rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                
                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                }

                .icon-box {
                    width: 45px;
                    height: 45px;
                    background: rgba(30, 41, 59, 0.5);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    color: #a78bfa; /* Soft Purple */
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .label {
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #64748b;
                    margin-bottom: 2px;
                    font-weight: 700;
                }

                .value {
                    font-weight: 500;
                    color: #f1f5f9;
                    font-size: 1rem;
                }

                .social-pill {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.6rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #e2e8f0;
                    font-weight: 500;
                    text-decoration: none;
                }

                .social-pill:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #a78bfa;
                }

                /* Input Styles matching image: Dark, rounded */
                input, textarea {
                    background-color: var(--input-bg) !important;
                    border: 1px solid #1e293b !important;
                    border-radius: 8px !important;
                    color: #fff !important;
                    padding: 1rem !important;
                    font-size: 0.95rem;
                }
                input:focus, textarea:focus {
                    border-color: #38bdf8 !important;
                    box-shadow: none !important;
                }
                
                input::placeholder, textarea::placeholder {
                    color: #475569;
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
