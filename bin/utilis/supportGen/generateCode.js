"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{genComponents:()=>genComponents,genUseState:()=>genUseState});const _bigSmallLetter=require("./bigSmallLetter");function genComponents(inputName="",lang="Typescript"){const[compNameUpper,_]=(0,_bigSmallLetter.strToSmallAndBig)(inputName);const demoCode=`${lang==="Typescript"?`type ${compNameUpper}Props = {
    data?: any;
}`:""}
    
function ${compNameUpper}({ data }${lang==="Typescript"?`: ${compNameUpper}Props`:""}){
    return (
        <>
        <h1>Hello ${compNameUpper}</h1>
        </>
    )
}
    
export default ${compNameUpper}
`;return demoCode}function genUseState(inputName="",lang="Typescript"){const[bigLetterStr,lowLetterStr]=(0,_bigSmallLetter.strToSmallAndBig)(inputName);const demoCode=`
const [ ${lowLetterStr}, set${bigLetterStr} ] = useState${lang==="Typescript"?"<any>":""}("");
useEffect( () => {
    console.log(${lowLetterStr});
},[${lowLetterStr}]);
`;return demoCode}