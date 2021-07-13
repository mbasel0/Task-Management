import { render } from "@testing-library/react";
import React from "react";
import { Navbar, Nav, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import style from "./style.module.scss";

export default function TaskBarHeader({ brand, navItems, }) {
   return (

      <Col>
         <Row className={style.dnm2}>
            <Col xl={"2"}>
               <div className={style.dnm}>
                  <span>Department</span>
               </div>
            </Col>
            <Col xl={"8"}>
               <div className={style.dnm}>
                  <span>Information</span>
               </div>
            </Col>
            <Col xl={"2"}>
               <div className={style.dnm}>
                  <span >Status</span>
               </div>
            </Col>
         </Row>
      </Col>
   )
};