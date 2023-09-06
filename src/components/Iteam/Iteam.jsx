import React, { useEffect, useState } from "react";
import styles from "./Iteam.module.css";

export default function Item({ item = "on", title = "", num = 0 }) {
  const [counter, setcounter] = useState(0);
  
  let scrolling = {
    on: styles.on,
    off: styles.off,
    updating: "fa-solid fa-arrow-rotate-right text-warning h1",
  };

  useEffect(() => {
    let x = setInterval(() => {
      if (counter < num) {
        setcounter((prev) => prev + 1);
      } else {
        clearInterval(x);
      }
    }, 30);
    if(counter>80){
      clearInterval(x);
      setcounter(num)
    }
    return () => {
      clearInterval(x);
    };
  }, [counter]);

  return (
    <React.Fragment>
      <div className={"col-md-6  col-xl-4 " + styles.item}>
        <div className="row bg-light p-4 rounded-5 shadow-lg h-100">
          <div className="col-3">
            <div className={styles.icon}>
              <i className={scrolling[item]}></i>
            </div>
          </div>
          <div className="col-9 text-center">
            <h2 className="h1"> {counter} </h2>
            <h4 className="text-muted">{title}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
