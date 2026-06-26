import { readdirSync, statSync, mkdirSync, copyFileSync } from "fs";
import { join, relative, dirname } from "path";

const srcDir = "./";
const outDir = "build";

function copyHtml(dir) {
    for (const entry of readdirSync(dir)) {
        const fullPath = join(dir, entry);

        if (statSync(fullPath).isDirectory()) {
            copyHtml(fullPath);
        } else if (fullPath.endsWith(".html")) {
            const relativePath = relative(srcDir, fullPath);
            const target = join(outDir, relativePath);

            mkdirSync(dirname(target), { recursive: true });
            copyFileSync(fullPath, target);
        }
    }
}

copyHtml(srcDir);