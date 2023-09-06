import React, { useEffect, useState } from "react";
import styles from "./CardSvg.module.css";
import MaleSvg from "./../MaleSvg/MaleSvg";
import FemaleSvg from "./../FemaleSvg/FemaleSvg";
  
export default function CardSvg({
  title = "",
  mx = "",
  num = {},
  color = {},
  id = {},
}) {
  const [female, setfemale] = useState(0);
  const [male, setmale] = useState(0);
  let handdle = (num) => {
    if (window.innerWidth <= num) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let x = setInterval(() => {
      if (female < num?.female) {
        setfemale((prev) => prev + 1);
      } else {
        clearInterval(x);
      }
    }, 20);

    let y = setInterval(() => {
      if (male < num?.male) {
        setmale((prev) => prev + 1);
      } else {
        clearInterval(y);
      }
    }, 20);
    return () => {
      clearInterval(x);
      clearInterval(y);
    };
  }, [female, male]);

  return (
    <React.Fragment>
      <div className={`col-xl-6 text-center  ${mx}`}>
        <div className={`shadow-lg bg-light  h-100   ${styles.card}`}>
          <h3 className="my-3">{title}</h3>
          <div className="row   ">
            <div className="col-6 ">
              <div className={`${handdle(400) ? "w-100" : "w-50"} mx-auto p-3`}>
                <h4 className="text-muted my-3">إناث</h4>
                <FemaleSvg
                  id={id?.female}
                  num={num.female}
                  color={color.female}
                />
              </div>
              <h3 className="my-3 fw-bold">{female}%</h3>
            </div>
            <div className="col-6 ">
              <div className={`${handdle(400) ? "w-100" : "w-50"} mx-auto p-3`}>
                <h4 className="text-muted my-3">ذكور</h4>
                <MaleSvg id={id?.male} num={num.male} color={color.male} />
              </div>
              <h3 className="my-3 fw-bold">{male}%</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
