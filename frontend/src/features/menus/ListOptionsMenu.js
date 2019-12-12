import React from "react";
import ListOptionsMenuMain from "./ListOptionsMenuMain";
import MoveListMenu from "./MoveListMenu";

const ListOptionsMenu = ({
  setIsVisible,
  showingMoveList,
  setShowingMoveList
}) => {
  if (showingMoveList)
    return (
      <MoveListMenu
        setIsVisible={setIsVisible}
        setShowingMoveList={setShowingMoveList}
      />
    );
  else
    return (
      <ListOptionsMenuMain
        setIsVisible={setIsVisible}
        setShowingMoveList={setShowingMoveList}
      />
    );
};

export default ListOptionsMenu;
