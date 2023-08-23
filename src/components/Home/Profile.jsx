import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import "./Profile.css"
import Profilepicture from "../../assets/Profilepicture.jpeg"

export default function Profile() {
  const steps = [
    "Enthusiastic Developer",
    "Frontend Developer",
    "React/React Native Developer",
  ];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  //   The useEffect Hook allows you to perform side effects in your components.
  // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  // useEffect accepts two arguments. The second argument is optional.
  //   useEffect(<function>, <dependency>)
  // useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

  useEffect(() => {
    // const updateStepIndex = () => {
    setTimeout(() => {
      setCurrentStepIndex(
        (currentStepIndex) => (currentStepIndex + 1) % steps.length
      );
    }, 2000);
    // };

    //  const interval=   setInterval(updateStepIndex, 2000);
    // return () => clearInterval(interval);
  });
  // },[currentStepIndex]);

  return (
    <div className="main">
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="d-flex justify-content-center colz-icon">
            <div></div>
            <a
              className="px-2 py-3"
              target="_blank"
              href="https://github.com/kuldeepverma14"
            >
              <i className="bi bi-github "></i>
              {/* <img src="" alt="" /> */}
            </a>

            <a
              className="px-2 py-3"
              target="_blank"
              href="https://www.linkedin.com/in/kuldeep-verma"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              className="px-2 py-3"
              target="_blank"
              href="https://www.instagram.com/street_hunter_kd/"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              className="px-2 py-3"
              target="_blank"
              href="mailto:kuldeepvermaiitiant@gmail.com"
            >
              <i className="bi bi-envelope"></i>
            </a>
          {/* <div className="profile-pic"> <img src={Profilepicture} alt="" /> </div> */}
          <div className="profile-pic"> </div>
          </div>
          <div className="d-flex justify-content-center profile-details-name">
            <div className="name-span">
             <span>Hello , I'm <span className="fw-bold text-uppercase name"> Kuldeep Verma</span></span> 
            <p className="my-role">{steps[currentStepIndex]}</p>
              </div>
          </div>
          
          <div className="d-flex justify-content-center">
            {/* <p>Typical Steps</p>  */}
            {/* {" "}
            <Typical 
            steps={["Enthusiastic Developer",2000,"Frontend Developer",1000,"kd bro",2000]}
            loop={Infinity}
          wrapper="p"
            /> */}
            <div>{/* <p className="">{steps}</p> */}</div>
          </div>
          <div className="d-flex justify-content-center m-5">
            <span className="">Description about me as a Developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nostrum? Qui inventore natus corrupti saepe eum obcaecati eveniet excepturi placeat nam in, ducimus officiis culpa. Alias labore ipsam eum temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus, impedit adipisci cumque reiciendis odio enim beatae eligendi, inventore placeat et ab aperiam quasi! Voluptatibus cum ipsam optio at eveniet earum, ducimus voluptatum quia quo ipsum. Aliquam quis maiores, provident voluptatem praesentium quaerat repellat mollitia, harum impedit non recusandae. Quidem. </span>
          </div>
          <div className="d-flex justify-content-center">
          </div>
          <div className="d-flex justify-content-center m-3">
            <button className="btn btn-primary button-hire ">Hire Me</button>
            <a href="Kuldeep verma.pdf" download={"Kuldeep-verma_resume.pdf"}>
              <button className="btn btn-link button-resume ">Get Resume</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
