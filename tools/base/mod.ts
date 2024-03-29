import { which, whichSync } from '../../sdk/process/which.ts';
import { expand, get } from '../../sdk/os/env.ts';
import { isFile, isFileSync } from '../../sdk/fs/mod.ts';
import { IS_WINDOWS, IS_DARWIN } from '../../sdk/os/constants.ts';
import { IPsStartInfo, output, outputSync } from '../../sdk/process/ps.ts';
import { NotFoundOnPathError } from '../../sdk/process/errors.ts';

export interface IArgumentBuilderOptions {
    prefix?: string;
    assignment?: string;
    separator?: string;
    command?: string;
    subCommand?: string;
    commandOptions?: string[];
    append: string[];
    args?: string[];
}

export function convertToArgs(args: Record<string, unknown>, options?: IArgumentBuilderOptions) {
    const opts = {
        ...options,
    };

    opts.prefix ??= '--';
    opts.assignment ??= ' ';

    const result = [];
    if (opts.command) {
        const commands = opts.command.split(' ').filter((c) => c.length > 0);
        result.push(...commands);
    }

    const pushArg = (key: string, value: unknown) => {
        if (value === undefined || value === null) {
            return;
        }

        if (typeof value === 'boolean') {
            if (!value) {
                return;
            }

            result.push(opts.prefix + key);
            return;
        } else {
            if(opts.assignment === ' ') {
                result.push(opts.prefix + key, value.toString());
                return;
            }

            let v = value.toString();
            if (v.includes(' ')) {
                v = v.includes('$') ? `'${v}'` : `"${v}"`;
            }
            result.push(`${opts.prefix}${key}${opts.assignment}${v}`);
        }
    }

    const keys = Object.keys(args);
    args = { ...args };

    if (opts.commandOptions?.length) {
        for(const key in keys) {
            if (opts.commandOptions.includes(key)) {
                pushArg(key, args[key]);
                delete args[key];
            }
        }
    }

    if (opts.subCommand) {
        const subCommands = opts.subCommand.split(' ').filter((c) => c.length > 0);
        result.push(...subCommands);
    }

    if (!opts.append && opts.args?.length) {
        for(const key in keys) {
            if (opts.args.includes(key)) {
                const value = args[key];
                if (value === undefined || value === null) {
                    continue;
                }

                const v = value.toString();
                result.push(v);
                delete args[key];
            }
        }
    }

    for (const key in args) {
        const value = args[key];
        if (value === undefined || value === null) {
            continue;
        }

        if (typeof value === 'boolean') {
            if (value) {
                result.push(opts.prefix + key);
            }
        } else {
            result.push(opts.prefix + key + opts.assignment + value);
        }
    }

    if (opts.args?.length) {
        result.push(...opts.args);
    }

    return result;
}
 

export interface IPathFinderOptions {
    name: string;
    executable?: string;
    envVariable?: string;
    cached?: string;
    paths?: string[];
    windows?: string[];
    linux?: string[];
    darwin?: string[];
}

const registry = new Map<string, IPathFinderOptions>();

export function registerExe(name: string, options?: Partial<IPathFinderOptions>) {
    const o : IPathFinderOptions = {
        ...options,
        name: name
    };
    o.envVariable ??= (name.toUpperCase() + '_PATH');

    registry.set(name, o);
}

export function findExeSync(name: string) {
    let options = registry.get(name);
    if (!options) {
        options ??= {} as IPathFinderOptions;
        options.name = name;
        options.envVariable ??= (options.name.toUpperCase() + '_PATH');
        options.paths ??= [];
        options.windows ??= [];
        options.linux ??= [];
        options.darwin ??= [];
        registry.set(name, options);
    }

    if (options?.envVariable) {
        const envPath = get(options.envVariable);
        if (envPath) {
            const path = whichSync(envPath);
            if (path && isFileSync(path)) {
                return path;
            }
        }
    }

    if (options?.cached) {
        return options.cached;
    }

    const defaultPath = whichSync(name);
    if (defaultPath && isFileSync(defaultPath)) {
        options.cached = defaultPath;
        return defaultPath;
    }

    if (IS_WINDOWS) {
        if (options?.windows?.length) {
            for (const path of options.windows) {
                let next = path;
                next = expand(next);
                if (isFileSync(next)) {
                    options.cached = next;
                    return next;
                }
            }
        }

        return undefined;
    }

    if (IS_DARWIN) {
        if (options?.darwin?.length) {
            for (const path of options.darwin) {
                let next = path;
                next = expand(next);
                if (isFileSync(next)) {
                    options.cached = next;
                    return next;
                }
            }
        }
    }

    if (options?.linux?.length) {
        for (const path of options.linux) {
            let next = path;
            next = expand(next);
            if (isFileSync(next)) {
                options.cached = next;
                return next;
            }
        }
    }

    return undefined;
}

export async function findExe(name: string) {
    let options = registry.get(name);
    if (!options) {
        options ??= {} as IPathFinderOptions;
        options.name = name;
        options.envVariable ??= (options.name.toUpperCase() + '_PATH');
        options.paths ??= [];
        options.windows ??= [];
        options.linux ??= [];
        options.darwin ??= [];
        registry.set(name, options);
    }

    if (options?.envVariable) {
        const envPath = get(options.envVariable);
        if (envPath) {
            const path = await which(envPath);
            if (path && await isFile(path)) {
                return path;
            }
        }
    }

    if (options?.cached) {
        return options.cached;
    }

    const defaultPath = await which(name);
    if (defaultPath && await isFile(defaultPath)) {
        options.cached = defaultPath;
        return defaultPath;
    }

    if (IS_WINDOWS) {
        if (options?.windows?.length) {
            for (const path of options.windows) {
                let next = path;
                next = expand(next);
                if (await isFile(next)) {
                    options.cached = next;
                    return next;
                }
            }
        }

        return undefined;
    }

    if (IS_DARWIN) {
        if (options?.darwin?.length) {
            for (const path of options.darwin) {
                let next = path;
                next = expand(next);
                if (await isFile(next)) {
                    options.cached = next;
                    return next;
                }
            }
        }
    }

    if (options?.linux?.length) {
        for (const path of options.linux) {
            let next = path;
            next = expand(next);
            if (await isFile(next)) {
                options.cached = next;
                return next;
            }
        }
    }

    return undefined;
}

export interface IExecSyncOptions {
    /**
    * The working directory of the process.
    *
    * If not specified, the `cwd` of the parent process is used.
    */
    cwd?: string | URL;
    /**
     * Clear environmental variables from parent process.
     *
     * Doesn't guarantee that only `env` variables are present, as the OS may
     * set environmental variables for processes.
     */
    clearEnv?: boolean;
    /** Environmental variables to pass to the subprocess. */
    env?: Record<string, string>;
    /**
     * Sets the child process’s user ID. This translates to a setuid call in the
     * child process. Failure in the set uid call will cause the spawn to fail.
     */
    uid?: number;
    /** Similar to `uid`, but sets the group ID of the child process. */
    gid?: number;

    /** How `stdin` of the spawned process should be handled.
     *
     * Defaults to `"null"`. */
    stdin?: "piped" | "inherit" | "null";
    /** How `stdout` of the spawned process should be handled.
     *
     * Defaults to `"inherit"`. */
    stdout?: "piped" | "inherit" | "null";
    /** How `stderr` of the spawned process should be handled.
     *
     * Defaults to "inherit". */
    stderr?: "piped" | "inherit" | "null";

    /** Skips quoting and escaping of the arguments on Windows. This option
     * is ignored on non-windows platforms. Defaults to `false`. */
    windowsRawArguments?: boolean;
}

export interface IExecOptions extends IExecSyncOptions {

    /**
     * An {@linkcode AbortSignal} that allows closing the process using the
     * corresponding {@linkcode AbortController} by sending the process a
     * SIGTERM signal.
     *
     * Ignored by {@linkcode Command.outputSync}.
     */
    signal?: AbortSignal;
}


export async function exec(name: string, args?: string[], options?: IExecOptions) {
    const path = await findExe(name);
    if (!path) {
        throw new NotFoundOnPathError(name);
    }

    const si : IPsStartInfo = {
        ...options,
        file: path,
        args: args
    }

    return await output(si);
}

export function execSync(name: string, args?: string[], options?: IExecSyncOptions) {

    const path = findExeSync(name);
    if (!path) {
        throw new NotFoundOnPathError(name);
    }

    const si : IPsStartInfo = {
        ...options,
        file: path,
        args: args
    }
    return outputSync(si);
}

export function generateScriptFileSync(script: string, ext: string, tpl?: string) {
    const scriptFile = Deno.makeTempFileSync({ prefix: 'ze_scripts', suffix: ext });
    if (tpl) {
        Deno.writeTextFileSync(scriptFile, tpl.replace('{{script}}', script));
    } else {
        Deno.writeTextFileSync(scriptFile, script);
    }

    return scriptFile;
}

export async function generateScriptFile(script: string, ext: string, tpl?: string) {
    const scriptFile = Deno.makeTempFileSync({ prefix: 'ze_scripts', suffix: ext });
    if (tpl) {
        await Deno.writeTextFile(scriptFile, tpl.replace('{{script}}', script));
    } else {
        await Deno.writeTextFile(scriptFile, script);
    }

    return scriptFile;
}