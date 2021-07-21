import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faHouseUser, faTrashAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'



export default function RouteHeader({ }) {
   return (
      <div className={style.routeHeader}>
         <Row>
            <Col md="4">
               <Row>
                  <Col md="4">
                     <FontAwesomeIcon cursor="pointer" className={style.deneme} icon={faHouseUser} size="2x" />
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

