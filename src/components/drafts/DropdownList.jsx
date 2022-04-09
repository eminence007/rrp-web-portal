import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
function DropsownList(props) {
  return (
    <DropdownButton variant="secondary" title="Download">
      {props.items.map((item ,index)=><Dropdown.Item href={item.link} target="_blank" rel="noopener noreferrer" key={index} >{item.linkname}</Dropdown.Item>)}  
    </DropdownButton>
  );
}

export default DropsownList;