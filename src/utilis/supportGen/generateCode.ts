function genComponents(
    inputName: string = '',
    lang: string | null = 'Typescript',
) {
    const compNameUpper =
        inputName.length >= 1
            ? inputName.charAt(0).toUpperCase() + inputName.slice(1)
            : 'Test';

    const demoCode = `${
        lang === 'Typescript'
            ? `type ${compNameUpper}Props = {\n    data: string;\n}`
            : ''
    }
    
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
    const lowLetterStr =
        inputName.length >= 1
            ? inputName.charAt(0).toLowerCase() + inputName.slice(1)
            : 'values';
    const bigLetterStr =
        inputName.length >= 1
            ? inputName.charAt(0).toUpperCase() + inputName.slice(1)
            : 'Values';

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
