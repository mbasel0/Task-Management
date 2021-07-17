import { render } from "@testing-library/react";
import React from "react";
import { Navbar, Nav, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import style from "./style.module.scss";

export default function TaskBarHeader({ brand, navItems, }) {
   return (
      <div className={style.taskBarHeader}>
         <Row>
            <Col lg={8} md={8} sm={12}>
               <Row>
                  <Col sm={"4"}>
                     <div >
                        <span>Department</span>
                     </div>
                  </Col>
                  <Col sm={"4"}>
                     <div >
                        <span>Description</span>
                     </div>
                  </Col>
                  <Col sm={"4"}>
                     <div >
                        <span >Title</span>
                     </div>
                  </Col>
               </Row>
            </Col>
            <Col lg={4} md={4} sm={12}>
               <Row>
                  <Col sm={"6"}>
                     <div >
                        <span >Operation</span>
                     </div>
                  </Col>
                  <Col sm={"6"}>
                     <div >
                        <span >Status</span>
                     </div>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   )
};


