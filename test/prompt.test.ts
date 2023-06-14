// import fs from 'node:fs'
// import { rimrafSync } from 'npm:rimraf'
// import { initTemplate } from "../src/utilis/initTemplate/initTemplate.ts"

// import prompts from 'prompts'
// jest.mock('prompts');

// describe('Test initTemplate', () => {
  
//     it('initTemplate with raw ts template', async () => {

//         (prompts as any).mockReturnValue({ type: "raw", lang: "ts" });
//         await initTemplate();

//         const exceptArray = ["pages", "interface", "components", "utils"];

//         const listDir = fs.readdirSync("./");
//         exceptArray.forEach( v => expect(listDir).toContain(v));

//         exceptArray.forEach( v => rimrafSync(v) );

//     });

//     it('initTemplate with rtk ts template', async () => {

//         (prompts as any).mockReturnValue({ type: "rtk", lang: "ts" });
//         await initTemplate();

//         const exceptArray = ["pages", "interface", "components", "utils", "store"];

//         const listDir = fs.readdirSync("./");
//         exceptArray.forEach( v => expect(listDir).toContain(v));

//         exceptArray.forEach( v => rimrafSync(v) );

//     });

// });