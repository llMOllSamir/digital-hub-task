import React from "react";
import styles from "./Acoord.module.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Acoord({sliderMenu=[]}) {
 
  return (
    <React.Fragment>
      <Accordion defaultActiveKey={0}>
        {sliderMenu.length && sliderMenu.map((ele,index)=>
        <Accordion.Item key={index} className="border-top-0" eventKey={index}>
        <Accordion.Header  ><span className={styles.circle}></span> <b>{ele.name}</b></Accordion.Header>
        <Accordion.Body>
          {ele.menu?.map((item, num) => (
            <Link key={num} to={item.target} className={styles.link}>
              {item.title}
            </Link>
          ))}
        </Accordion.Body>
      </Accordion.Item>
        )}
      </Accordion>
    </React.Fragment>
  );
}
