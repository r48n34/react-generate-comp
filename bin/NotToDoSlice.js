"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    data: []
};
const notToDoSlice = (0, toolkit_1.createSlice)({
    name: 'notToDo',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.data.push(action.payload);
        },
    }
});
exports.addItem = notToDoSlice.actions.addItem;
exports.default = notToDoSlice.reducer;
