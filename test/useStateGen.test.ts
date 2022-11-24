import { useStateGen } from "../src/utilis/useStateGenUtilis"

describe('test useStateGen functions', () => {

    test('useStateGen function works in normal', () => {
        const testString = "yolo";
        expect(useStateGen(testString)).toContain("const [ yolo, setYolo ] = useState<any>(0);");
    });

    test('useStateGen function works in blank space', () => {
        const testString = "";
        expect(useStateGen(testString)).toContain("");
    });

    test('useStateGen function works in null', () => {
        const testString = null;
        expect(useStateGen(testString as any)).toContain("");

        const testString2 = undefined;
        expect(useStateGen(testString2 as any)).toContain("");
    });

});