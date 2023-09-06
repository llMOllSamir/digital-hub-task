import React, { useEffect, useRef } from "react";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Item from "../Iteam/Iteam";
import CardSvg from "./../CardSvg/CardSvg";

export default function Main() {
  let { navHeight } = useSelector((state) => state.navbar);
  let tabs = useRef();
  let handelActive = (e) => {
    Array.from(tabs.current.children).forEach((element) => {
      element.classList.remove(styles.active);
    });

    e.target.classList.add(styles.active);
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <main
        style={{ marginTop: navHeight + 20 + "px" }}
        className={"py-5 px-3 " + styles.main}
      >
        <div className="container-fluid">
          <div className="row g-5 ">
            <div className=" col-xl-6 col-xxl-5 px-5">
              <Form className={styles.dateGroup}>
                <h5 className="w-50">الفتره :</h5>
                <Form.Control name="from" type="date" />
                <i className="fa-solid fa-arrow-left-long"></i>
                <Form.Control name="to" type="date" />
              </Form>
            </div>

            <div className="  col-xl-6 col-xxl-4 ">
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
            </div>

            <div className="col-12">
              <div className="row g-5 px-5">
                <Item title="عدد المواليد المدخلين" item="on" num={10918} />
                <Item title="عدد الوفيات المدخلين" item="off" num={20} />
                <Item title="طلبات تعديل مقدمة" item="updating" num={400} />
              </div>
            </div>
            <div className="col-12">
              <div className="row g-5 px-5">
                <CardSvg
                  title={"النسبة بين الذكور والإناث للمواليد"}
                  mx={styles.line}
                  num={{ female: 65, male: 35 }}
                  color={{ female: "#e74f98", male: "#01a0fb" }}
                  id={{female:"female",male:"male"}}
                />
                <CardSvg
                  title={"النسبة بين الذكور والإناث للوفيات"}
                  num={{ female: 80, male: 20 }}
                  color={{ female: "#7d7e93", male: "#7d7e93" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
