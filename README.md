# react-generate-comp

Generate React components in current execute directory by typing with CLI.

### Setup / Install:

```
npm i react-generate-comp
or
yarn add react-generate-comp
```

### Usage:

```
npx rt <typescript Flag> -c <Components name>
yarn rt <typescript Flag> -c <Components name>

<typescript Flag>
-t, --typescript For enable typescript tsx generate
-c, --generateComp for Generate comp name


e.g.
Create a tsx components named "HelloComp"
npx rt -t -c "helloComp"

Create a jsx components named "Yolocomp"
npx rt -c "Yolocomp"
```
