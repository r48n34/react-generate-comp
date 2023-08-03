import { strToSmallAndBig } from "./bigSmallLetter";

function generateReact(
    inputName: string = '',
    lang: string | null = 'Typescript'
){
    const [ compNameUpper, _ ] = strToSmallAndBig(inputName);

    const demoCode = `${ lang === 'Typescript'? `type ${compNameUpper}Props = {\n    data?: any;\n}\n`: ``}
function ${compNameUpper}({ data }${
        lang === 'Typescript' ? `: ${compNameUpper}Props` : ''
    }){
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

function generateReactNative(
    inputName: string = '',
    lang: string | null = 'Typescript',
){

    const [ compNameUpper, _ ] = strToSmallAndBig(inputName);

    const demoCode = `import React from 'react';
import { Text } from 'react-native';

${ lang === 'Typescript'? `type ${compNameUpper}Props = {\n    data?: any;\n}\n`: ``}
function ${compNameUpper}({ data }${
        lang === 'Typescript' ? `: ${compNameUpper}Props` : ''
    }){
    return (
        <>
        <Text>Hello ${compNameUpper}</Text>
        </>
    )
}
    
export default ${compNameUpper}
`;

    return demoCode;



}

function genComponents(
    inputName: string = '',
    lang: string | null = 'Typescript',
    isNative = false
) {
    return isNative 
        ? generateReactNative(inputName, lang)
        : generateReact(inputName, lang);
}

function genUseState(
    inputName: string = '',
    lang: string | null = 'Typescript',
) {

    const [ bigLetterStr, lowLetterStr ] = strToSmallAndBig(inputName);

    const demoCode = `
const [ ${lowLetterStr}, set${bigLetterStr} ] = useState${
        lang === 'Typescript' ? '<any>' : ''
    }("");
useEffect( () => {
    console.log(${lowLetterStr});
},[${lowLetterStr}]);
`;
    return demoCode;
}

export { genComponents, genUseState };
