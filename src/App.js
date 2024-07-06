import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header';
import Footer from './Footer';
import './index.css'; 
import image1 from './image1.jpg'; 
import image2 from './image2.jpg'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="container my-5">
        <div className="text-center mb-5">
          <h2>Hey! I'm Duku.</h2>
          <p><em>Explore My Technical and Research Skills</em></p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="work-item">
              <img src={image1} alt="Technical Skills" className="img-fluid" />
              <div className="overlay">
                <div className="overlay-text">
                  <h3>Technical Skills</h3>
                  <ul>
                    <li><strong>Programming Languages:</strong> Java, Python, JavaScript/TypeScript</li>
                    <li><strong>Frameworks and Libraries:</strong> .NET, React, Node.js</li>
                    <li><strong>Tools and Platforms:</strong> Visual Studio Code, GitHub, GitLab, Bash, Terminal, Command Prompt</li>
                    <li><strong>Databases:</strong> SQL Server, MongoDB, Entity Framework</li>
                    <li><strong>Development Practices:</strong> Test-Driven Development (TDD)</li>
                    <li><strong>Systems and Networking:</strong> Linux Environments, Networking Configurations, Security</li>
                    <li><strong>Machine Learning:</strong> TensorFlow, PyTorch</li>
                    <li><strong>Data Structures and Algorithms:</strong> Strong foundation in computer science fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="work-item">
              <img src={image2} alt="Research Skills" className="img-fluid" />
              <div className="overlay">
                <div className="overlay-text">
                  <h3>Research Skills</h3>
                  <ul>
                    <li><strong>Literature Review:</strong> Conducting comprehensive research</li>
                    <li><strong>Data Collection and Analysis:</strong> Advanced Excel data analysis techniques</li>
                    <li><strong>Critical Thinking:</strong> Developing effective policy recommendations</li>
                    <li><strong>Problem Solving:</strong> Identifying and addressing external influences</li>
                    <li><strong>Technical Writing:</strong> Delivering comprehensive reports and findings</li>
                    <li><strong>Project Management:</strong> Coordinating logistics and managing events</li>
                    <li><strong>Collaboration and Teamwork:</strong> Working collaboratively with teams and departments</li>
                    <li><strong>Ethics and Integrity:</strong> Ensuring ethical and legal considerations</li>
                    <li><strong>Data Management:</strong> Utilizing databases and data management tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>If you wish to get in touch, please feel free to contact me. I'm always open to discussing new opportunities and collaborations.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
