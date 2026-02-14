import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: 'var(--bg-primary)',
            padding: '4rem 0 2rem',
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center',
        },
        socials: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
        },
        socialLink: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            borderRadius: '50px',
            textDecoration: 'none',
            border: '1px solid var(--border-color)',
            transition: 'all 0.3s ease',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginTop: '2rem'
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ fontSize: '2rem' }}>Connect</h2>
                    <div style={styles.socials}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><FaGithub /> GitHub</a>
                        <a href="https://www.linkedin.com/in/samiksha-m-683400335/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><FaLinkedin /> LinkedIn</a>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText('samiksham024@gmail.com');
                                alert('Email copied to clipboard!');
                            }}
                            style={{ ...styles.socialLink, cursor: 'pointer', fontFamily: 'inherit' }}
                        >
                            <FaEnvelope /> Email
                        </button>
                    </div>
                </div>
                <p style={styles.text}>© {year} Samiksha M. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
