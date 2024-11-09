import React from 'react';
import './Review.css';
import KundanPatel from '../images/KundanPatel.jpg';
import Maitri from '../images/Maitri.jpg';
import Shravan from '../images/Shravan.jpg';
import Shubrank from '../images/ShubrankMukhiya.jpg';

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
                "Sneh has been a valuable asset to the team, particularly during our recent deployment. His ability to quickly grasp new technologies and solve complex issues, even with unfamiliar tools, is truly impressive. He worked closely with me, demonstrating a strong work ethic and a keen eye for detail. With his rapid learning curve and problem-solving skills, he has the potential to become a highly skilled developer."
              </p>
              <h3 className="reviewer-name">
                <a href="https://www.linkedin.com/in/kundan-patel-4414251a/" target="_blank" rel="noopener noreferrer">
                  KUNDAN PATEL
                </a>
              </h3>
              <p className="position">PROJECT MANAGER</p>
            </div>
          </div>

          <div className="col-lg-6 d-flex mt-4 mt-lg-0">
            <div className="image-container">
              <img src={Shubrank} alt="Shubrank Mukhiya" className="profile-image" />
            </div>
            <div className="content-container ms-3">
              <p className="recommendation">
                "Working with Sneh since a year, he helped build an emergency alert webapp for my hiking community. He has been consistently reliable which is a very rare trait that makes him highly dependable. He also shows great resourcefulness and actively tries to figure out solutions to move the project forward. I had a great time working with him and look forward to collaborate with him on more projects in the future."
              </p>
              <h3 className="reviewer-name">
                <a href="https://www.linkedin.com/in/shubrank/" target="_blank" rel="noopener noreferrer">
                  SHUBRANK MUKHIYA
                </a>
              </h3>
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
              <h3 className="reviewer-name">
                <a href="https://www.linkedin.com/in/maitri-shah-005b2431b/" target="_blank" rel="noopener noreferrer">
                  MAITRI SHAH
                </a>
              </h3>
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
              <h3 className="reviewer-name">
                <a href="https://www.linkedin.com/in/shravan-parikh-311767215/" target="_blank" rel="noopener noreferrer">
                  SHRAVAN PARIKH
                </a>
              </h3>
              <p className="position">SOFTWARE DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
