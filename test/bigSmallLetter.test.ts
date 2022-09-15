import { strToSmallAndBig } from "../src/utilis/supportGen/bigSmallLetter"

describe('test strToSmallAndBig functions', () => {

    test('strToSmallAndBig function works in normal', () => {
        const testString = "helloComp";
        expect(strToSmallAndBig(testString)).toEqual(["HelloComp", "helloComp"]);
    });

    test('strToSmallAndBig function works in blank string', () => {
        const testString = "";
        expect(strToSmallAndBig(testString)).toEqual(["Values", "values"]);
    });

});