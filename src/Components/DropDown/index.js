import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, } from '@fortawesome/free-solid-svg-icons'



export default function DropDown() {

   return (
      <Dropdown className={"mt-2 d-flex ml-2"} >
         <Dropdown.Toggle className={"bg-secondary"} variant="success" id="dropdown-basic">
            <FontAwesomeIcon icon={faFolderPlus} color="pink"/>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item href="/task/myTasks">My Tasks</Dropdown.Item>
            <Dropdown.Item href="/task/pendings">Pending Tasks</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/task/create">Create a Task</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   )
};

