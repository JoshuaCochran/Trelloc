import { createSlice } from 'redux-starter-kit'

let nextCardId = 0

const listsSlice = createSlice({
    name: 'lists',
    initialState: {},
    reducers: {
        addList: {
            reducer(state, action) {
                const { id, title } = action.payload
                state[id] = { id, title }
            },
            prepare(title) {
                return { payload: {title, id: nextCardId++ }}
            }
        },
        deleteList: {
            reducer(state, action) {
                delete state[action.payload.id]
            }
        },
    }
})

export const { addList, deleteList } = listsSlice.actions

export default listsSlice.reducer