import { strToSmallAndBig } from "./bigSmallLetter.ts";

function genComponents( inputName: string = '', lang: string | null = 'Typescript' ) {
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
