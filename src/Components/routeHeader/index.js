import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'



export default function RouteHeader({ scrollTop }) {
   return (
      <div className={style.routeHeader}>
         <Row>
            <Col md="4">
               <Row>
                  <Col md="4">
                     <FontAwesomeIcon onClick={(() => window.scrollTo(0, 0))} cursor="pointer" className={style.homeButton} icon={faHouseUser} size="2x" />
                  </Col>
                  <Col md="4">
                     <Link to="/task/myTasks" className={style.routeBox}>
                        <span>My Tasks</span>
                     </Link>
                  </Col>
                  <Col md="4">
                     <Link to="/task/pendings" className={style.routeBox}>
                        <span>Pending Tasks</span>
                     </Link>
                  </Col>
               </Row>
            </Col>
            <Col md="8">
               <div className={style.createBox}>
                  <Link to="/task/create" className={style.routeBox}>
                     <span>Add New Task</span>
                  </Link>
               </div>
            </Col>
         </Row>
      </div>
   )
};

