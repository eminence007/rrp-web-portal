import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {apiBaseUrl} from "../../configs/envconst.config"
function DropdownList(props) {
  return (
    
    <DropdownButton variant="secondary" title="Download"   className="my-1" >
      {props.items.map((item, index) => (
        <Dropdown.Item
          href={`${apiBaseUrl}${item.link}`}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {item.linkname}
        </Dropdown.Item>
      ))}
    </DropdownButton>
   

    // <Dropdown className="m-1 d-flex">
    //   <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="m-1 d-inline-block">
    //     Download
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu >
    //     {props.items.map((item, index) => (
    //       <Dropdown.Item
    //         href={item.link}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         key={index}
    //         className="w-100"
    //       >
    //         {item.linkname}
    //       </Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>
  );
}

export default DropdownList;
