import { exec } from "child_process"
import fs from "fs"

describe('Test generate comp', () => {
  
    test("Command 'rgc -c helloComp' works", (done:any) => {
        exec('rgc -c helloComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('HelloComp.tsx');
    
            fs.unlinkSync("./HelloComp.tsx");
            done();
        });
    });

    test("Command 'rgc -n -c helloNativeComp' works", (done:any) => {
        exec('rgc -n -c helloNativeComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('HelloNativeComp.tsx');
    
            fs.unlinkSync("./HelloNativeComp.tsx");
            done();
        });
    });
    
    test("Command 'rgc -c yoloComp' works", (done:any) => {
        exec('rgc -c yoloComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('YoloComp.tsx');
    
            fs.unlinkSync("./YoloComp.tsx");
            done();
        });
    });
    
    test("Command 'rgc -j -c orangeComp' works", (done:any) => {
        exec('rgc -j -c orangeComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('OrangeComp.jsx');
    
            fs.unlinkSync("./OrangeComp.jsx");
            done();
        });
    });

    test("Command 'rgc -n -j -c orangeNativeComp' works", (done:any) => {
        exec('rgc -n -j -c orangeNativeComp', (err, out) => {
            const listDir = fs.readdirSync("./");
            expect(listDir).toContain('OrangeNativeComp.jsx');
    
            fs.unlinkSync("./OrangeNativeComp.jsx");
            done();
        });
    })

});
