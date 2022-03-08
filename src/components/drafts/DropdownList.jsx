import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
function DropsownList(props) {
  return (
    <DropdownButton variant="secondary" title="Download">
      {props.items.map(item =><Dropdown.Item href={item.link}>{item.linkname}</Dropdown.Item>)}  
    </DropdownButton>
  );
}

export default DropsownList;
