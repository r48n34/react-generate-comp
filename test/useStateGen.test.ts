import { useStateGen } from "../src/utilis/useStateGenUtilis.ts"
import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";

Deno.test("useStateGen function works in hello", async () => {
    const testString = "hello";
    assertEquals(await useStateGen(testString), "const [ hello, setHello ] = useState<any>(0);")
});

Deno.test("useStateGen function works in blank space", async () => {
    const testString = "";
    assertEquals(await useStateGen(testString), "")
});

Deno.test("useStateGen function works in null", async () => {
    const testString = null;
    assertEquals(await useStateGen(testString as any), "");
});

Deno.test("useStateGen function works in undefined", async () => {
    const testString = undefined;
    assertEquals(await useStateGen(testString as any), "");
});


// describe('test useStateGen functions', () => {

//     // test('useStateGen function works in normal in windows', () => {
//     //     const testString = "yolo";
//     //     expect(useStateGen(testString)).toContain("const [ yolo, setYolo ] = useState<any>(0);");
//     // });

//     test('useStateGen function works in blank space', () => {
//         const testString = "";
//         expect(useStateGen(testString)).toContain("");
//     });

//     test('useStateGen function works in null', () => {
//         const testString = null;
//         expect(useStateGen(testString as any)).toContain("");

//         const testString2 = undefined;
//         expect(useStateGen(testString2 as any)).toContain("");
//     });

// });