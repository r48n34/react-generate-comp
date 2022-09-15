import { exec } from "child_process"
import fs from "fs"

describe('Test generate comp', () => {
  
    test("Command 'rgc -tc helloComp' works", (done:any) => {
        exec('rgc -tc helloComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('HelloComp.tsx');
    
            fs.unlinkSync("./HelloComp.tsx");
            done();
        });
    });
    
    test("Command 'rgc -t -c yoloComp' works", (done:any) => {
        exec('rgc -tc yoloComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('YoloComp.tsx');
    
            fs.unlinkSync("./YoloComp.tsx");
            done();
        });
    });
    
    test("Command 'rgc -c orangeComp' works", (done:any) => {
        exec('rgc -c orangeComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('OrangeComp.jsx');
    
            fs.unlinkSync("./OrangeComp.jsx");
            done();
        });
    });
    
    test("Command 'rgc -ts' remain no changes", (done:any) => {
    
        const listDirBefore = fs.readdirSync("./");
    
        exec('rgc -ts', (err, out) => {
            const listDirAfter = fs.readdirSync("./");

            expect(listDirAfter.length).toBe(listDirBefore.length);
    
            done();
        });
    });

});

describe('Test generate slice', () => {

    test("Command 'rgc -ts apple' works", (done:any) => {
        exec('rgc -ts apple', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('AppleSlice.tsx');
    
            fs.unlinkSync("./AppleSlice.tsx");
            done();
        });
    });
    
    test("Command 'rgc -s apple' works", (done:any) => {
        exec('rgc -s apple', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('AppleSlice.jsx');
    
            fs.unlinkSync("./AppleSlice.jsx");
            done();
        });
    });

});

describe('Test Remaining cases.', () => {
    test("Command 'rgc -t' remain no changes", (done:any) => {
        
        const listDirBefore = fs.readdirSync("./");

        exec('rgc -t', (err, out) => {
            const listDirAfter = fs.readdirSync("./");
            expect(listDirAfter.length).toBe(listDirBefore.length);
            done();
        });
    });

    test("Command 'rgc' remain no changes", (done:any) => {
        
        const listDirBefore = fs.readdirSync("./");

        exec('rgc', (err, out) => {
            const listDirAfter = fs.readdirSync("./");
            expect(listDirAfter.length).toBe(listDirBefore.length);
            done();
        });
    });

});