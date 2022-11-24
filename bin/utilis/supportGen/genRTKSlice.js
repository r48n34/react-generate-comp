"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"genRtkSlice",{enumerable:true,get:()=>genRtkSlice});const _bigSmallLetter=require("./bigSmallLetter");function genRtkSlice(inputName="",lang="Typescript"){const[bigLetterStr,lowLetterStr]=(0,_bigSmallLetter.strToSmallAndBig)(inputName);const demoCode=`import { createSlice${lang==="Typescript"?", PayloadAction":""} } from '@reduxjs/toolkit'

${lang==="Typescript"?`export interface ${bigLetterStr}State { 
 data: any[] 
}`:""}

const initialState${lang==="Typescript"?`:${bigLetterStr}State`:""} = {
    data: []
}

const ${lowLetterStr}Slice = createSlice({
    name: '${lowLetterStr}',
    initialState: initialState,
    reducers: {
        addItem(state${lang==="Typescript"?`:${bigLetterStr}State`:""}, action${lang==="Typescript"?`:PayloadAction<number>`:""}) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = ${lowLetterStr}Slice.actions
export default ${lowLetterStr}Slice.reducer
`;return demoCode}