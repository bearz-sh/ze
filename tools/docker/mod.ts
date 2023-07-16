
import { IExecOptions, exec, execSync, registerExe } from "../base/mod.ts";

registerExe("docker", {
    windows: [
        "%Program Files%\\Docker\\Docker\\resources\\docker.exe",
    ]
});

export function docker(args?: string[], options?: IExecOptions) {
    return exec("docker", args, options);
}

export function dockerSync(args?: string[], options?: IExecOptions) {
    return execSync("docker", args, options);
}


