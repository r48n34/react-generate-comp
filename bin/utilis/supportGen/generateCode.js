"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genUseState = exports.genComponents = void 0;
const bigSmallLetter_1 = require("./bigSmallLetter");
function genComponents(inputName = '', lang = 'Typescript') {
    const [compNameUpper, _] = (0, bigSmallLetter_1.strToSmallAndBig)(inputName);
    const demoCode = `${lang === 'Typescript' ? `type ${compNameUpper}Props = {\n    data?: string;\n}` : ''}
    
function ${compNameUpper}({ data }${lang === 'Typescript' ? `: ${compNameUpper}Props` : ''}){
    return (
        <>
        <h1>Hello ${compNameUpper}</h1>
        </>
    )
}
    
export default ${compNameUpper}
`;
    return demoCode;
}
exports.genComponents = genComponents;
function genUseState(inputName = '', lang = 'Typescript') {
    const [bigLetterStr, lowLetterStr] = (0, bigSmallLetter_1.strToSmallAndBig)(inputName);
    const demoCode = `
const [ ${lowLetterStr}, set${bigLetterStr} ] = useState${lang === 'Typescript' ? '<any>' : ''}("");
useEffect( () => {
    console.log(${lowLetterStr});
},[${lowLetterStr}]);
`;
    return demoCode;
}
exports.genUseState = genUseState;
