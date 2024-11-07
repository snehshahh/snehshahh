import React from 'react';
import './Review.css';
import KundanPatel from '../images/KundanPatel.jpg';
import Maitri from '../images/Maitri.jpg';
import Shravan from '../images/Shravan.jpg';
import Shubrank from '../images/KundanPatel.jpg';

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="review-container-row">
        <div className="review-container">
          <div className="image-container">
            <img src={KundanPatel} alt="Kundan Patel" className="profile-image" />
          </div>
          <div className="content-container">
            <p className="recommendation">
              "I highly recommend Sneh as a software developer. He is efficient, detail-oriented, and attentive to client needs. His dedication to delivering high-quality work is impressive, and he's consistently reliable in meeting deadlines."
            </p>
            <div className="name-container">
              <h3 className="name">KUNDAN PATEL</h3>
            </div>
            <p className="position">PROJECT MANAGER</p>
          </div>
        </div>
        <div className="review-container">
          <div className="image-container">
            <img src={Shubrank} alt="Shubrank Mukhiya" className="profile-image" />
          </div>
          <div className="content-container">
            <p className="recommendation">
              "I highly recommend Sneh as a software developer. He is efficient, detail-oriented, and attentive to client needs. His dedication to delivering high-quality work is impressive, and he's consistently reliable in meeting deadlines."
            </p>
            <div className="name-container">
              <h3 className="name">SHUBRANK MUKHIYA</h3>
            </div>
            <p className="position">CLIENT</p>
          </div>
        </div>
      </div>
      <div className="review-container-row">
        <div className="review-container">
          <div className="image-container">
            <img src={Maitri} alt="Maitri Shah" className="profile-image" />
          </div>
          <div className="content-container">
            <p className="recommendation">
              "I highly recommend Sneh as a software developer. He's incredibly efficient, attentive to detail, and listens carefully to client needs. His dedication to delivering high-quality work is impressive, and he's always reliable in meeting deadlines."
            </p>
            <div className="name-container">
              <h3 className="name">MAITRI SHAH</h3>
            </div>
            <p className="position">GRAPHIC DESIGNER</p>
          </div>
        </div>
        <div className="review-container">
          <div className="image-container">
            <img src={Shravan} alt="Shravan Parikh" className="profile-image" />
          </div>
          <div className="content-container">
            <p className="recommendation">
              "Working with Sneh on the project was fantastic! His expertise, creativity, and positive attitude made the experience enjoyable and successful. Looking forward to collaborating again soon!"
            </p>
            <div className="name-container">
              <h3 className="name">SHRAVAN PARIKH</h3>
            </div>
            <p className="position">SOFTWARE DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;