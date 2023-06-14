// import { unlinkSync } from "https://deno.land/std@0.112.0/node/fs.ts";
// import { assertArrayIncludes } from "https://deno.land/std@0.191.0/testing/asserts.ts";
// import { spawn } from "node:child_process";

// Deno.test("Command 'rgc -tc helloComp' works", async () => {

//     // Deno.run({cmd: ["rgc" ,]});
//     spawn("rgc", ["-c", "helloComp"]);

//     const listDir = [];

//     for (const dirEntry of Deno.readDirSync("/")) {
//         listDir.push(dirEntry.name);
//     }

//     assertArrayIncludes(listDir, ['HelloComp.tsx'])
//     unlinkSync("./HelloComp.tsx");

//     // exec('rgc -tc helloComp', async (err, out) => {
//     // });
// });


// describe('Test generate comp', () => {
  
//     test("Command 'rgc -tc helloComp' works", (done:any) => {
//         exec('rgc -tc helloComp', (err, out) => {
//             const listDir = fs.readdirSync("./");
//             expect(listDir).toContain('HelloComp.tsx');
    
//             await unlinkSync("./HelloComp.tsx");
//             done();
//         });
//     });
    
//     test("Command 'rgc -t -c yoloComp' works", (done:any) => {
//         exec('rgc -tc yoloComp', (err, out) => {
//             const listDir = fs.readdirSync("./");
//             expect(listDir).toContain('YoloComp.tsx');
    
//             await unlinkSync("./YoloComp.tsx");
//             done();
//         });
//     });
    
//     test("Command 'rgc -c orangeComp' works", (done:any) => {
//         exec('rgc -c orangeComp', (err, out) => {
//             const listDir = fs.readdirSync("./");
//             expect(listDir).toContain('OrangeComp.jsx');
    
//             await unlinkSync("./OrangeComp.jsx");
//             done();
//         });
//     });

// });

// describe('Test generate slice', () => {

//     test("Command 'rgc -ts apple' works", (done:any) => {
//         exec('rgc -ts apple', (err, out) => {
//             const listDir = fs.readdirSync("./");
//             expect(listDir).toContain('AppleSlice.tsx');
    
//             fs.unlinkSync("./AppleSlice.tsx");
//             done();
//         });
//     });
    
//     test("Command 'rgc -s apple' works", (done:any) => {
//         exec('rgc -s apple', (err, out) => {
//             const listDir = fs.readdirSync("./");
//             expect(listDir).toContain('AppleSlice.jsx');
    
//             fs.unlinkSync("./AppleSlice.jsx");
//             done();
//         });
//     });

// });
