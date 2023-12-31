import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Acoord from "./../Acoord/Acoord";
import { activeSlider, setSliderWidth } from "../../store/Nav.slice";

export default function Slider({sliderMenu=[]}) {
  let { navHeight } = useSelector((state) => state.navbar);
  let [isVisible, setIsVisible] = useState(false);
  let slider = useRef();
  let dispatch = useDispatch()
 
  let handleSlider = () => {
    if (isVisible) {
      setIsVisible(false);
      slider.current.style.width = `350px`;
      dispatch(setSliderWidth(350))
      dispatch(activeSlider(true))
    } else {
      setIsVisible(true);
      slider.current.style.width = `0px`;
      dispatch(setSliderWidth(0))
      dispatch(activeSlider(false))
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setIsVisible(true);
      slider.current.style.width = `0px`;
      dispatch(setSliderWidth(0))
      dispatch(activeSlider(false))
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        slider.current.style.width = `0px`;
        setIsVisible(true);
        dispatch(setSliderWidth(0))
        dispatch(activeSlider(false))
      } else {
        setIsVisible(false);
        slider.current.style.width = `350px`;
        dispatch(setSliderWidth(350))
        dispatch(activeSlider(true))
      }
    });
  }, []);

  useEffect(() => {
    slider.current.style.top = `${navHeight}px`;
  }, [navHeight]);

  return (
    <React.Fragment>
      <div ref={slider} className={styles.slider}>
        {window.innerWidth <= 992 && (
          <CloseButton onClick={handleSlider} className={styles.closeBtn} />
        )}
        <Acoord  sliderMenu={sliderMenu}/>
      </div>
      {isVisible && (
        <button
          onClick={handleSlider}
          className={"btn btn-light  " + styles.btn}
          style={{ top: navHeight + "px" }}
        >
          <i className="fa-solid fa-bars  "></i>
        </button>
      )}
    </React.Fragment>
  );
}
