import { exec } from "child_process"
import fs from "fs"

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