import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";
import { strToSmallAndBig } from "../src/utilis/supportGen/bigSmallLetter.ts"

Deno.test("strToSmallAndBig function works in normal", () => {
    const testString = "helloComp";
    assertEquals(strToSmallAndBig(testString), ["HelloComp", "helloComp"])
});

Deno.test("strToSmallAndBig function works in blank string", () => {
    const testString = "";
    assertEquals(strToSmallAndBig(testString), ["Values", "values"])
});
