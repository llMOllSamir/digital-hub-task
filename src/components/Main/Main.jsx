import React, { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import Item from "../Iteam/Iteam";
import CardSvg from "./../CardSvg/CardSvg";
import FormDate from "../FormDate/FormDate";
import ButtonTabs from "../ButtonTabs/ButtonTabs";

export default function Main() {
  let { navHeight } = useSelector((state) => state.navbar);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <main
        style={{ marginTop: navHeight + 20 + "px" }}
        className={"py-5 px-3 " + styles.main}
      >
        <div className="container-fluid">
          <div className="row g-5 ">
            <div className="col-12">
              <div className="row g-5">
                <div className=" col-sm-10 col-md-7 col-lg-8 col-xl-7  col-xxl-4  ">
                  <FormDate />
                </div>

                <div className="    col-xxl-4 ">
                  <ButtonTabs />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row g-5 gx-3  ">
                <Item title="عدد المواليد المدخلين" item="on" num={10918} />
                <Item title="عدد الوفيات المدخلين" item="off" num={20} />
                <Item title="طلبات تعديل مقدمة" item="updating" num={400} />
              </div>
            </div>
            <div className="col-12">
              <div className="row g-5  ">
                <CardSvg
                  title={"النسبة بين الذكور والإناث للمواليد"}
                  mx={styles.line}
                  num={{ female: 65, male: 35 }}
                  color={{ female: "#e74f98", male: "#01a0fb" }}
                  id={{ female: "female", male: "male" }}
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
