import React from "react";
import { connect } from "react-redux";
import ListList from "../lists/ListList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderCards } from "../cards/cardsSlice";

const Board = ({ id, lists, reorderCards }) => {
  const onDragEnd = result => {
    const { draggableId, type, source, destination } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    if (type === "CARD")
    {
      console.log("I'm a card!")
      reorderCards(draggableId, source.droppableId, destination.droppableId, source.index, destination.index);
    }
    else
      return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id} type="LIST">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <ListList
              boardId={id}
              lists={Object.values(lists).filter(list => list.boardId === id)}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatch = { reorderCards };

export default connect(mapStateToProps, mapDispatch)(Board);
