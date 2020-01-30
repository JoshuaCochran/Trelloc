import React from "react";
import { connect } from "react-redux";
import ListList from "../lists/ListList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderCards } from "../cards/cardsSlice";

const Board = ({ id, lists, reorderCards }) => {
  const onDragEnd = result => {
    const { draggableId, source, destination } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    reorderCards(draggableId, destination.droppableId, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListList
        boardId={id}
        lists={Object.values(lists).filter(list => list.boardId === id)}
      />
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatch = { reorderCards };

export default connect(mapStateToProps, mapDispatch)(Board);
