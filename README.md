# react-generate-comp

Generate React components in current execute directory by typing with CLI.

### Features
1. Create a basic components with ts/js config  
2. Follow the practice of react official ts/js docs

### Setup / Install:
Either global or not is Ok.
```
npm i -g react-generate-comp
or
yarn global add react-generate-comp
```

### Usage:

```
npx rgc <typescript Flag> -c <Components name>  
yarn rgc <typescript Flag> -c <Components name>  

<typescript Flag>  
-t, --typescript For enable typescript tsx generate 

<Components name>  
-c, --generateComp for Generate comp name


e.g.
Create a tsx components named "HelloComp"
npx rgc -t -c "helloComp"
rgc -t -c "helloComp"
rgc -tc "helloComp"

Create a jsx components named "Yolocomp"
npx rgc -c "yolocomp"
rgc -c "yolocomp"
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
