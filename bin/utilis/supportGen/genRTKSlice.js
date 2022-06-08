"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRtkSlice = void 0;
const bigSmallLetter_1 = require("./bigSmallLetter");
function genRtkSlice(inputName = '', lang = 'Typescript') {
    const [bigLetterStr, lowLetterStr] = (0, bigSmallLetter_1.strToSmallAndBig)(inputName);
    const demoCode = `import { createSlice${lang === "Typescript" ? ", PayloadAction" : ""} } from '@reduxjs/toolkit'

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
