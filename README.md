# react-generate-comp

Generate React components in current execute directory by typing with CLI.

### Features
1. Create a basic components with ts/js config  
2. Follow the practice of react official ts/js docs
3. Generate Components / Slice in one line

### Setup / Install:
Either global or not is Ok.
```
npm i -g react-generate-comp
or
yarn global add react-generate-comp
```

### Usage:

```
Generate Components
npx rgc <typescript Flag> -c <Components name>  
yarn rgc <typescript Flag> -c <Components name> 

Generate RTK Slice
yarn rgc <typescript Flag> -s <Slice name> 

<typescript Flag>  
-t, --typescript For enable typescript tsx generate 

<Components name>  
-c, --generateComp for Generate comp name

<Slice name>  
-s, --generateRTKSlice  Generate RTK slice

e.g.
Create a tsx components named "HelloComp"
rgc -t -c "helloComp"
rgc -tc "helloComp"

Create a jsx components named "Yolocomp"
rgc -c "yolocomp"

Create a tsx RTK Slice named "TodoSlice"
rgc -t -s "todo"
rgc -ts "todo"

Create a jsx RTK Slice named "NotTodoSlice"
rgc -s "notTodo"
```

## Generated template
```rgc -t -c "testComp"```
```tsx
// TestComp.tsx

type TestCompProps = {
    data?: string;
}
    
function TestComp({ data }: TestProps){
    return (
        <>
        <h1>Hello TestComp</h1>
        </>
    )
}
    
export default TestComp
```

```rgc -c "hiComp"```
```jsx
// HiComp.jsx

function HiComp({ data }){
    return (
        <>
        <h1>Hello HiComp</h1>
        </>
    )
}
    
export default HiComp
```

```rgc -t -s "todo"```
```tsx
// TodoSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState { 
 data: any[] 
}

const initialState:TodoState = {
    data: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem(state:TodoState, action:PayloadAction<number>) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = todoSlice.actions
export default todoSlice.reducer
```

```rgc -s "todo"```
```jsx
// TodoSlice.jsx
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = todoSlice.actions
export default todoSlice.reducer
```