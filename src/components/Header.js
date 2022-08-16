import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import Icon from "./Icon";

export default function Header({ title }) {
  return (
    <div className="header">
      <h5>{title}</h5>
      <Icon type={"about"} link={"/about"}>
          <FaSignInAlt size={30} />
      </Icon>
    </div>
  );
}
