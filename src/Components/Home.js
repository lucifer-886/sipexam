import React from 'react';
import { Link } from 'react-router-dom';
import logo from './learn.png';
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="display-4">Welcome to the Education Hub</h1>
            <p className="lead">We are dedicated to providing high-quality education and empowering individuals to reach their full potential.</p>
            <p>
            Ready to start your educational journey? Enroll in our courses and unlock a world of knowledge.
          </p>
          <div>
            <img src={logo} alt={logo}/>
          </div>
            <div className="btn-group">
              <Link className="btn btn-primary btn-lg" to="/courses">Explore Courses</Link>
            </div>
  
      <footer>
        <p>&copy; 2023 Education Hub. All rights reserved.</p>
      </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
