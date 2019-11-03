import { createSlice } from 'redux-starter-kit'

let nextCardId = 0

const cardsSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        addCard: {
            reducer(state, action) {
                const { id, title, description } = action.payload
                state.push({ id, title, description })
            },
            prepare(title, description) {
                return { payload: {title, description, id: nextCardId++ }}
            }
        },
        deleteCard: {
            reducer(state, action) {
                return state.filter(card => card.id !== parseInt(action.payload.id))
            }
        }
    }
})

export const { addCard, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer