# react-generate-comp

Generate React components in current execute directory by typing with CLI. 

Works on Windows / MacOS / Linux.

> We are updating to V2 which supporting `Typescript` in default. If you are upgraded from V1, please be care that you do not have to use `Typescript -t` flag from now on. Instead of Javascript users, you have to apply the `Javascript -j` flag.

<p align="left">

<a href="https://www.npmjs.com/package/react-generate-comp"> <img src="https://img.shields.io/npm/v/react-generate-comp" /> </a>
<a href="https://github.com/r48n34/react-generate-comp"><img src="https://img.shields.io/github/actions/workflow/status/r48n34/react-generate-comp/test.yml" /></a>

</p>

### 🔧 Features
1. Create a basic components with ts / js config.  
2. Follow the practice of react official ts / js docs.
3. Generate Components / Slice / useState in one line.
4. No configs, easy to use with prompts.

### 💻 Setup / Instal
Recommended: Install with `-g`
``` bash
npm i -g react-generate-comp
```

Alternative: Use with `npm exec`
```bash
# With CLI
npm exec react-generate-comp

# Call With Args
npm exec react-generate-comp -- -c HelloComp
```

### 🗺️ Usage
``` bash
Generate Component
rgc -c <Components names>  
rgc <javascript Flag> -c <Components name> 

<Javascript Flag>  
-j, --javascript For enable javascript jsx generate 

<React native Flag>  
-n, --native For generate react native components

<Components name>  
-c, --components for Generate comp name

<useState name>  
-u, --useState  Generate useState line code to your clipboard

Usage:
Create a TSX components named "HelloComp" for `React`
rgc -c helloComp

Create two TSX components named "HelloComp" and "ByeComp" for `React`
rgc -c helloComp ByeComp

Create a JSX components named "Yolocomp" for `React`
rgc -j -c yolocomp

Create a TSX components named "HelloComp" for `React native`
rgc -n -c helloComp

Create a jsx components named "Yolocomp" for `React native`
rgc -j -n -c yolocomp

Create a useState named with "[ number, setNumber ]"
rgc -u number

Create a set of folder and file for init the new Vite / CRP project
rgc -i

```

## 🖼️ Generated Template
```rgc -t -c "testComp"```   
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TestComp.tsx)

```rgc -c "hiComp"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/HiComp.jsx)

```rgc -t -s "todo"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TodoSlice.tsx)

```rgc -s "todo"```  
[Template](https://github.com/r48n34/react-generate-comp/tree/main/template/TodoSlice.jsx)

## 🗺️ Road Map  
- ✅ First class typescript support  
- ✅ Generate other related stuff
- ⬜️ Init more template

## 📝 Dev Logs

### - 2.0.0
1. Default generating `.tsx`, `.ts` for all related files.
2. Remove `RTK Slice` generation.
3. Allow to create more than one componnents with same command.
4. Better UX for reminder.

### - 1.5.0
1. Add react native component generate `-n` flag

### - 1.4.5
1. Add zustand template to `rgc --init`

### - 1.4.3
1. Cli `-c`, `-s` will not overwrite file that already exist in the current path.

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

# 🚗 License
MIT