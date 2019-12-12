import React, { useState } from "react";
import { Dropdown, Icon } from "antd";
import ListOptionsMenu from "../menus/ListOptionsMenu";

const ellipsisStyle = {
  borderColor: "#ebecf0",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  float: "right"
};

const ListOptionsDropDown = ({ setIsVisible }) => {
  const [showingMoveList, setShowingMoveList] = useState(false);

  return (
    <Dropdown
      overlay={
        <ListOptionsMenu
          setIsVisible={setIsVisible}
          showingMoveList={showingMoveList}
          setShowingMoveList={setShowingMoveList}
        />
      }
      trigger={["click"]}
      placement="bottomRight"
    >
      <Icon type="ellipsis" style={ellipsisStyle} />
    </Dropdown>
  );
};

export default ListOptionsDropDown;
