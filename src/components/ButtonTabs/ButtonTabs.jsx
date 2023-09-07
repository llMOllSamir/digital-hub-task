import React, { useRef } from 'react'
import styles from "./ButtonTabs.module.css"

export default function ButtonTabs() {
  let tabs = useRef();

  let handelActive = (e) => {
    Array.from(tabs.current.children).forEach((element) => {
      element.classList.remove(styles.active);
    });

    e.target.classList.add(styles.active);
  };
  return (
    <div ref={tabs} className={styles.btnGroup}>
    <button onClick={handelActive} className={styles.active}>
      <span className="bg-secondary"></span>الكل
    </button>
    <button onClick={handelActive}>
      <span className="bg-warning"></span>غير موثق
    </button>
    <button onClick={handelActive}>
      <span className="bg-success"></span>موثق
    </button>
  </div>
  )
}
