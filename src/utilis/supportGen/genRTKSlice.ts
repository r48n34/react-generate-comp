import { strToSmallAndBig } from "./bigSmallLetter";

function genRtkSlice ( inputName: string = '', lang: string | null = 'Typescript'){
    const [ bigLetterStr, lowLetterStr ] = strToSmallAndBig(inputName);
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
`

    return demoCode;
}

export { genRtkSlice }