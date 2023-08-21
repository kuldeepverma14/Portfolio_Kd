import React, { useState, useEffect } from "react";
// import Typical from "react-typical"

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
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="d-flex justify-content-center">
            <a
              className="px-2 py-3"
              target="_blank"
              href="https://github.com/kuldeepverma14"
            >
              <i className="bi bi-github"></i>
              <img src="" alt="" />
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
          </div>
          <div className="d-flex justify-content-center profile-details-name">
            <span className="">
              Hello,I'm{" "}
              <span className="fw-bold text-uppercase">Kuldeep Verma</span>
            </span>
          </div>
          <div className="d-flex justify-content-center">
            {/* <p>Typical Steps</p>  */}
            <div>
              <p className="">{steps[currentStepIndex]}</p>
              {/* <p className="">{steps}</p> */}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <span className="">Description about me as a Developer.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
