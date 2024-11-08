import React from 'react';
import './Educations.css';

const Educations = () => {
    return (
        <div className="container educations">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2 className="skills-title">Education, Certifications & Other Projects</h2>
                </div>
                <div className="col-md-6">
                    <div className="mb-4">
                        <div className="Title">Bachelor of Engineering, Information Technology</div>
                        <div className="tag">Silveroak University</div>
                        <div className="tag">
                            My time spent at the university allowed me to meet like-minded peers and incredible professors who taught me everything I know about tech.
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6 Projects">
                            <div className="Title">Linker's db | Live</div>
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