import React from 'react';
import './Review.css';
import KundanPatel from '../images/KundanPatel.jpg';
import Maitri from '../images/Maitri.jpg';
import Shravan from '../images/Shravan.jpg';
import Shubrank from '../images/KundanPatel.jpg';

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="container reviews">
        <div className="row mb-4">
          <div className="col-lg-6 d-flex">
            <div className="image-container">
              <img src={KundanPatel} alt="Kundan Patel" className="profile-image" />
            </div>
            <div className="content-container ms-3">
              <p className="recommendation">
                "I highly recommend Sneh as a software developer. He is efficient, detail-oriented, and attentive to client needs. His dedication to delivering high-quality work is impressive, and he's consistently reliable in meeting deadlines."
              </p>
              <h3 className="reviewer-name">KUNDAN PATEL</h3>
              <p className="position">PROJECT MANAGER</p>
            </div>
          </div>

          <div className="col-lg-6 d-flex mt-4 mt-lg-0">
            <div className="image-container">
              <img src={Shubrank} alt="Shubrank Mukhiya" className="profile-image" />
            </div>
            <div className="content-container ms-3">
              <p className="recommendation">
                "I highly recommend Sneh as a software developer. He is efficient, detail-oriented, and attentive to client needs. His dedication to delivering high-quality work is impressive, and he's consistently reliable in meeting deadlines."
              </p>
              <h3 className="reviewer-name">SHUBRANK MUKHIYA</h3>
              <p className="position">CLIENT</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-6 d-flex">
            <div className="image-container">
              <img src={Maitri} alt="Maitri Shah" className="profile-image" />
            </div>
            <div className="content-container ms-3">
              <p className="recommendation">
                "I highly recommend Sneh as a software developer. He's incredibly efficient, attentive to detail, and listens carefully to client needs. His dedication to delivering high-quality work is impressive, and he's always reliable in meeting deadlines."
              </p>
              <h3 className="reviewer-name">MAITRI SHAH</h3>
              <p className="position">GRAPHIC DESIGNER</p>
            </div>
          </div>

          <div className="col-lg-6 d-flex mt-4 mt-lg-0">
            <div className="image-container">
              <img src={Shravan} alt="Shravan Parikh" className="profile-image" />
            </div>
            <div className="content-container ms-3">
              <p className="recommendation">
                "Working with Sneh on the project was fantastic! His expertise, creativity, and positive attitude made the experience enjoyable and successful. Looking forward to collaborating again soon!"
              </p>
              <h3 className="reviewer-name">SHRAVAN PARIKH</h3>
              <p className="position">SOFTWARE DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
