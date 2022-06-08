"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRtkSlice = void 0;
function genRtkSlice(inputName = '', lang = 'Typescript') {
    const bigLetterStr = inputName.length >= 1 ? inputName.charAt(0).toUpperCase() + inputName.slice(1) : 'Values';
    const lowLetterStr = inputName.length >= 1 ? inputName.charAt(0).toLowerCase() + inputName.slice(1) : 'values';
    const demoCode = `import { createSlice, ${lang === "Typescript" ? "PayloadAction" : ""} } from '@reduxjs/toolkit'

${lang === "Typescript" ? `export interface ${bigLetterStr}State { \n data: any[] \n}` : ""}

const initialState${lang === "Typescript" ? `:${bigLetterStr}State` : ""} = {
    data: []
}

const ${lowLetterStr}Slice = createSlice({
    name: '${lowLetterStr}',
    initialState: initialState,
    reducers: {
        addItem(state${lang === "Typescript" ? `:${bigLetterStr}State` : ""}, action${lang === "Typescript" ? `:PayloadAction<number>` : ""}) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = ${lowLetterStr}Slice.actions
export default ${lowLetterStr}Slice.reducer
`;
    return demoCode;
}
exports.genRtkSlice = genRtkSlice;
