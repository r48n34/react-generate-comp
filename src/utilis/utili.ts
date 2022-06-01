import { genComponents } from './supportGen/generateCode';
import { writeFolder } from './supportGen/writeFolder';

function generateFunctionComp(isTypescript: boolean, compName: string = '') {
    try {
        let dataText = genComponents(
            compName,
            isTypescript ? 'Typescript' : 'Javascript',
        );

        let bigLetterStr: string =
            compName.length >= 1
                ? compName.charAt(0).toUpperCase() + compName.slice(1)
                : 'Test';
        bigLetterStr += isTypescript ? '.tsx' : '.jsx';
        let success = writeFolder(bigLetterStr, dataText);

        if (success) {
            console.log(
                `Writing components "${compName}" to "${process.cwd()}" Done.`,
            );
            return;
        }
    } catch (error: any) {
        console.log(error);
        return;
    }
}

export { generateFunctionComp };
