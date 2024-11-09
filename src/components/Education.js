import React, { useEffect, useRef } from 'react';
import './Educations.css';

const Educations = () => {
    const educationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate the title first
                        const title = entry.target.querySelector('.education-title');
                        if (title) {
                            title.classList.add('animate-fade-up');
                        }

                        // Animate education content with delay
                        const mainContent = entry.target.querySelector('.education-content');
                        if (mainContent) {
                            setTimeout(() => {
                                mainContent.classList.add('animate-fade-up');
                            }, 200);
                        }

                        // Animate project items with cascading delay
                        const projects = entry.target.querySelectorAll('.Projects');
                        projects.forEach((project, index) => {
                            setTimeout(() => {
                                project.classList.add('animate-fade-up');
                            }, 300 + (index * 100));
                        });
                    } else {
                        // Remove animation classes when section is out of view
                        const elements = entry.target.querySelectorAll(
                            '.education-title, .education-content, .Projects'
                        );
                        elements.forEach(element => {
                            element.classList.remove('animate-fade-up');
                        });
                    }
                });
            },
            {
                threshold: 0.2 // Trigger when 20% of the section is visible
            }
        );

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container educations" ref={educationRef}>
            <div className="row container">
                <div className="col-md-6 mb-4">
                    <p className="education-title">Education, Certifications & Other Projects</p>
                </div>
                <div className="col-md-6">
                    <div className="mb-4 education-content">
                        <div className="Title">Bachelor of Engineering, Information Technology</div>
                        <div className="tag">Silveroak University</div>
                        <div className="tag">
                            My time spent at the university allowed me to meet like-minded peers and incredible professors who taught me everything I know about tech.
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6 Projects">
                            <div className="Title">Linker's db | <a href='https://chromewebstore.google.com/detail/link-saver/kcancggpgjikndnlbmngcpjjkdcgffdo?hl=en' target='_blank' className='text-decoration-underline text-black'>Live</a></div>
                            <div className="tag">Productivity Platform</div>
                            <div className="tag">
                                A platform for organizing, sharing, and tracking links, offering seamless access and management across web, mobile, and extension apps.
                            </div>
                        </div>
                        <div className="col-md-6 Projects">
                            <div className="Title">Hiking alert System | Under NDA</div>
                            <div className="tag">Community Project</div>
                            <div className="tag">
                                A system that monitors hikers' return times and automatically sends alerts to emergency contacts if they don't return on time.
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6 Projects">
                            <div className="Title">Azure AI Fundamentals | Certificate</div>
                            <div className="tag">AI Fundamentals</div>
                            <div className="tag">
                                Basics of AI workloads, machine learning, and deep learning
                            </div>
                        </div>
                        <div className="col-md-6 Projects">
                            <div className="Title">Linker's db Mobile App | Under Development</div>
                            <div className="tag">Mobile Application</div>
                            <div className="tag">
                                Initially developed as a Chrome extension and basic web app, this multi-platform safety app is now expanding to a full-fledged solution across web and mobile.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations;