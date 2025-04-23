import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts:
        {
            items: [],
        }

    },
        reducers: {
            addContact: (state, action) => {
               state.contacts.push(action.payload);
            },
            deleteContact: (state, action) => {
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            }
    }
})

export default slice.reducer;

export const { addContact, deleteContact} = slice.actions;