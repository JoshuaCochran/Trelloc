import { createSlice } from 'redux-starter-kit'

let nextCardId = 0

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {},
    reducers: {
        addBoard: {
            reducer(state, action) {
                const { id, title } = action.payload
                state[id] = { id, title }
            },
            prepare(title) {
                return { payload: {title, id: nextCardId++ }}
            }
        },
        deleteBoard: {
            reducer(state, action) {
                delete state[action.payload.id]
            }
        },
    }
})

export const { addBoard, deleteBoard } = boardsSlice.actions

export default boardsSlice.reducer