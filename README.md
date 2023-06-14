# react-generate-comp-deno

Generate React components in current execute directory by typing with CLI.

<p align="left">

<a href="https://www.npmjs.com/package/react-generate-comp"> <img src="https://img.shields.io/npm/v/react-generate-comp" /> </a>
<a href="https://github.com/r48n34/react-generate-comp"><img src="https://img.shields.io/github/actions/workflow/status/r48n34/react-generate-comp/test.yml" /></a>

</p>

### Features
1. Create a basic components with ts / js config.  
2. Follow the practice of react official ts / js docs.
3. Generate Components / Slice / useState in one line.
4. No configs, easy to use with prompts.

### Setup / Install:
``` bash
deno install -n rgc -A -f src/index.ts
```

### Usage:
``` bash
Generate Components
rgc <typescript Flag> -c <Components name>  
rgc <typescript Flag> -c <Components name> 

Generate RTK Slice
rgc <typescript Flag> -s <Slice name> 

<typescript Flag>  
-t, --typescript For enable typescript tsx generate 

<Components name>  
-c, --generateComp for Generate comp name

<Slice name>  
-s, --generateRTKSlice  Generate RTK slice

<useState name>  
-u, --generateUseState  Generate useState line code to your clipboard

Usage:
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

Create a useState named with "[ number, setNumber ]"
rgc -u number

Create a set of folder and file for init the new Vite / CRP project
rgc --init
```

## Generated template
```rgc -t -c "testComp"``` or ```rgc -tc "testComp"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TestComp.tsx)

```rgc -c "hiComp"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/HiComp.jsx)

```rgc -t -s "todo"``` or ```rgc -ts "todo"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TodoSlice.tsx)

```rgc -s "todo"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TodoSlice.jsx)

## Road map  
- [x] First class typescript support  
- [x] Generate other related stuff
- [ ] Init more template

## Dev logs

### - 1.4.5
1. Add zustand template to `rgc --init`

### - 1.4.3
1. Cli '-c', '-s' will not overwrite file that already exist in the current path.

### - 1.4.1 / 1.4.2
1. `init project javascript` will not generate interface folder from now.

### - 1.4.0
1. Added `rgc --init` prompt features.
2. Added RTK generate in init project features.

### - 1.3.2
1. Fixing bug on prompt cancel issues.
2. Fixing RTKSlice Ts spacing issues.
3. Better reminder prompt.
4. Added `rgc --init` functions for init project folder data.

### - 1.3.0
1. Updated generate log syntax.  
2. Now typing `rgc` will active a prompts interface to select regarding generate stuff.   
3. Color log improvement.  

### - 1.2.x  
1. Added `rgc -u <setState_name>` generate function.  
