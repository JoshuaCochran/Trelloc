import React from "react";
import { connect } from "react-redux";
import ListList from "../lists/ListList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderCards } from "../cards/cardsSlice";
import { reorderLists } from "../lists/listsSlice";

const Board = ({ id, lists, reorderCards, reorderLists }) => {
  const onDragEnd = result => {
    const { draggableId, type, source, destination } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    if (type === "CARD") {
      console.log("I'm a card!");
      reorderCards(
        draggableId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    } else if (type === "LIST") {
      console.log("I'm a list!");
      reorderLists(
        draggableId,
        source.droppableId,
        source.index,
        destination.index
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id} type="LIST" direction="horizontal">
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

const mapDispatch = { reorderCards, reorderLists };

export default connect(mapStateToProps, mapDispatch)(Board);
