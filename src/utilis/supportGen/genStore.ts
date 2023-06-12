import { strToSmallAndBig } from "./bigSmallLetter.ts";

export function genStore( sliceName: string = '', isTypescript: boolean = true): string{
    const [ bigLetterSliceName, lowLetterSliceName ] = strToSmallAndBig(sliceName);

    let genText = "import { configureStore } from '@reduxjs/toolkit' \n"
        + `import ${lowLetterSliceName}Reducer from './${bigLetterSliceName}Slice' \n\n`
        + `export let store = configureStore({
    reducer: {
        ${lowLetterSliceName}: ${lowLetterSliceName}Reducer
    }
})
`;

    genText += isTypescript ? "\nexport type IRootState = ReturnType<typeof store.getState>\nexport type AppDispatch = typeof store.dispatch " : ""
  
    return genText
}

