import React, { useEffect, useState } from "react";
import styles from "./NotFound.module.css";

import logo from "../../Images/health.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NotFound() {
  const [loading, setloading] = useState(true)
  let navigate = useNavigate();
  let { navHeight } = useSelector((state) => state.navbar);
  


  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 5000);
  },[])
  return (
    <React.Fragment>
      <div className="container" style={{paddingTop:(navHeight+20)+"px"}}>
        <div className="row justify-content-center">
          <div className=" col-lg-6 text-center">
            <img src={logo} className={"w-75 opacity-50"} alt="Health" />
            <h2 className="">خطأ في نقطه الوصول  </h2>
            
            {loading?<button
              className={"btn btn-primary opacity-75 btn-lg "+styles.btn}
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>:<button
              className="btn btn-primary opacity-75 btn-lg "
              onClick={() => {
                navigate("/");
              }}
            >
              الرئيسية
            </button>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
