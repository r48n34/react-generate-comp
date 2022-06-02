# react-generate-comp

Generate React components in current execute directory by typing with CLI.

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
-c, --generateComp for Generate comp name


e.g.
Create a tsx components named "HelloComp"
npx rgc -t -c "helloComp"

Create a jsx components named "Yolocomp"
npx rgc -c "Yolocomp"
```
