"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"genStore",{enumerable:true,get:()=>genStore});const _bigSmallLetter=require("./bigSmallLetter");function genStore(sliceName="",isTypescript=true){const[bigLetterSliceName,lowLetterSliceName]=(0,_bigSmallLetter.strToSmallAndBig)(sliceName);let genText="import { configureStore } from '@reduxjs/toolkit' \n"+`import ${lowLetterSliceName}Reducer from './${bigLetterSliceName}Slice' 

`+`export let store = configureStore({
    reducer: {
        ${lowLetterSliceName}: ${lowLetterSliceName}Reducer
    }
})
`;genText+=isTypescript?"\nexport type IRootState = ReturnType<typeof store.getState>\nexport type AppDispatch = typeof store.dispatch ":"";return genText}