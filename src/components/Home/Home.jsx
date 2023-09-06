import React from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";
import Main from "./../Main/Main";

export default function Home() {
  let sliderMenu = [
    {
      name: "المواليد",
      menu: [
        { target: "sign", title: "تسجيل واقعه ميلاد" },
        { target: "sign", title: "تسجيل ساقط قيد الميلاد" },
        { target: "sign", title: "تسجيل ميلاد ( معثور عليه ) " },
        { target: "sign", title: "تسجيل ميلاد ( ساقط قيد معثور عليه ) " },
        { target: "sign", title: "استعلام - تعديل واقعه الميلاد " },
        { target: "sign", title: "طلب تعديل واقعه ميلاد" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Slider sliderMenu ={sliderMenu} />
      <Main />
    </React.Fragment>
  );
}
