import {promises as FsPromises} from "fs"
import {promisify} from "util"
import fs from "fs"
import { writeFileSync, writeFile, readFile, rename } from "fs";

const childJsContent = await FsPromises.readFile("child.js", "utf-8");
// console.log(childJsContent);

// await FsPromises.writeFile("text.txt", "jlkfjkljflk")
// await FsPromises.writeFile("text.txt", "123456")
// await FsPromises.appendFile("text.txt", "-7891011")
// await FsPromises.appendFile("text.txt", "\n rtrytrytrty")
// await FsPromises.rename("text.txt", "new_text.txt")
// await FsPromises.unlink("new_text.txt")

// writeFileSync("text.txt", "jlkfjkljflk")
// writeFile("text.txt", "sdfadfds", (err) => {
//   readFile("text.txt", () => {
//     rename("text.txt", "new_text.txt", () => {});
//   });
// });

const renamePromise = promisify(fs.rename.bind(fs))
await renamePromise("new_text.txt", "new.txt");