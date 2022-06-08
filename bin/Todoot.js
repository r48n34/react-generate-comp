"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    data: []
};
const todootSlice = (0, toolkit_1.createSlice)({
    name: 'todoot',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.data.push(100);
        },
    }
});
exports.addItem = todootSlice.actions.addItem;
exports.default = todootSlice.reducer;
