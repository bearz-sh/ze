import { IExecOptions, IExecSyncOptions, exec, execSync, registerExe } from "../base/mod.ts";


function register(exe: string) {
    registerExe(exe, { 
        windows: [
            `%Program Files%\\Git\\usr\\bin\\${exe}.exe`,
            `%ChocolateyInstall%\\msys2\\usr\\bin\\${exe}.exe`,
            `%SystemDrive%\\msys64\\usr\\bin\\${exe}.exe`,
            `%SystemDrive%\\msys\\usr\\bin\\${exe}.exe`,
        ]
    });
}

const programs = [
    'arch',
    'base64',
    'basename',
    'cat',
    'chcon',
    'chgrp',
    'chmod',
    'chown',
    'chroot',
    'cksum',
    'cp',
    'csplit',
    'cut',
    'date',
    'dd',
    'df',
    'dir',
    'dircolors',
    'dirname',
    'du',
    'echo',
    'env',
    'expand',
    'expr',
    'factor',
    'false',
    'fmt',
    'fold',
    'groups',
    'head',
    'hostid',
    'hostname',
    'id',
    'install',
    'join',
    'kill',
    'link',
    'ln',
    'logname',
    'ls',
    'md5sum',
    'mkdir',
    'mkfifo',
    'mknod',
    'mktemp',
    'mv',
    'nice',
    'nl',
    'nohup',
    'nproc',
    'numfmt',
    'od',
    'paste',
    'pathchk',
    'pinky',
    'pr',
    'printenv',
    'printf',
    'ptx',
    'pwd',
    'readlink',
    'realpath',
    'rm',
    'rmdir',
    'runcon',
    'seq',
    'sha1sum',
    'sha224sum',
    'sha256sum',
    'sha384sum',
    'sha512sum',
    'shred',
    'shuf',
    'sleep',
    'sort', 
    'split',
    'stat',
    'stdbuf',
    'stty',
    'sum',
    'sync',
    'tac',
    'tail',
    'tee',
    'test',
    'timeout',
    'touch',
    'tr',
    'true',
    'truncate',
    'tsort',
    'tty',
    'uname',
    'unexpand',
    'uniq',
    'unlink',
    'uptime',
    'users',
    'vdir',
    'wc',
    'who',
    'whoami',
    'yes'
]

for (const program of programs) {
    register(program);
}

export async function arch(args?: string[], options?: IExecOptions) {
    return await exec("arch", args, options);
}

export function archSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("arch", args, options);
}

export function bash(args?: string[], options?: IExecOptions) {
    return exec("bash", args, options);
}

export function bashSync(args?: string[], options?: IExecOptions) {
    return execSync("bash", args, options);
}

export function base64(args?: string[], options?: IExecOptions) {
    return exec("base64", args, options);
}

export function base64Sync(args?: string[], options?: IExecOptions) {
    return execSync("base64", args, options);
}

export function basename(args?: string[], options?: IExecOptions) {
    return exec("basename", args, options);
}

export function basenameSync(args?: string[], options?: IExecOptions) {
    return execSync("basename", args, options);
}

export function cat(args?: string[], options?: IExecOptions) {
    return exec("cat", args, options);
}

export function catSync(args?: string[], options?: IExecOptions) {
    return execSync("cat", args, options);
}

export function chcon(args?: string[], options?: IExecOptions) {
    return exec("chcon", args, options);
}

export function chconSync(args?: string[], options?: IExecOptions) {
    return execSync("chcon", args, options);
}

export function chgrp(args?: string[], options?: IExecOptions) {
    return exec("chgrp", args, options);
}

export function chgrpSync(args?: string[], options?: IExecOptions) {
    return execSync("chgrp", args, options);
}

export function chmod(args?: string[], options?: IExecOptions) {
    return exec("chmod", args, options);
}

export function chmodSync(args?: string[], options?: IExecOptions) {
    return execSync("chmod", args, options);
}

export function chown(args?: string[], options?: IExecOptions) {
    return exec("chown", args, options);
}

export function chownSync(args?: string[], options?: IExecOptions) {
    return execSync("chown", args, options);
}

export function chroot(args?: string[], options?: IExecOptions) {
    return exec("chroot", args, options);
}

export function chrootSync(args?: string[], options?: IExecOptions) {
    return execSync("chroot", args, options);
}

export function cksum(args?: string[], options?: IExecOptions) {
    return exec("cksum", args, options);
}

export function cksumSync(args?: string[], options?: IExecOptions) {
    return execSync("cksum", args, options);
}

export function cp(args?: string[], options?: IExecOptions) {
    return exec("cp", args, options);
}

export function cpSync(args?: string[], options?: IExecOptions) {
    return execSync("cp", args, options);
}

export function csplit(args?: string[], options?: IExecOptions) {
    return exec("csplit", args, options);
}

export function csplitSync(args?: string[], options?: IExecOptions) {
    return execSync("csplit", args, options);
}

export function cut(args?: string[], options?: IExecOptions) {
    return exec("cut", args, options);
}

export function cutSync(args?: string[], options?: IExecOptions) {
    return execSync("cut", args, options);
}

export function date(args?: string[], options?: IExecOptions) {
    return exec("date", args, options);
}

export function dateSync(args?: string[], options?: IExecOptions) {
    return execSync("date", args, options);
}

export function dd(args?: string[], options?: IExecOptions) {
    return exec("dd", args, options);
}

export function ddSync(args?: string[], options?: IExecOptions) {
    return execSync("dd", args, options);
}

export function df(args?: string[], options?: IExecOptions) {
    return exec("df", args, options);
}

export function dfSync(args?: string[], options?: IExecOptions) {
    return execSync("df", args, options);
}

export function dir(args?: string[], options?: IExecOptions) {
    return exec("dir", args, options);
}

export function dirSync(args?: string[], options?: IExecOptions) {
    return execSync("dir", args, options);
}

export function dircolors(args?: string[], options?: IExecOptions) {
    return exec("dircolors", args, options);
}

export function dircolorsSync(args?: string[], options?: IExecOptions) {
    return execSync("dircolors", args, options);
}

export function dirname(args?: string[], options?: IExecOptions) {
    return exec("dirname", args, options);
}

export function dirnameSync(args?: string[], options?: IExecOptions) {
    return execSync("dirname", args, options);
}

export function du(args?: string[], options?: IExecOptions) {
    return exec("du", args, options);
}

export function duSync(args?: string[], options?: IExecOptions) {
    return execSync("du", args, options);
}

export function echo(args?: string[], options?: IExecOptions) {
    return exec("echo", args, options);
}


export function echoSync(args?: string[], options?: IExecOptions) {
    return execSync("echo", args, options);
}

export function env(args?: string[], options?: IExecOptions) {
    return exec("env", args, options);
}

export function envSync(args?: string[], options?: IExecOptions) {
    return execSync("env", args, options);
}

export function expand(args?: string[], options?: IExecOptions) {
    return exec("expand", args, options);
}

export function expandSync(args?: string[], options?: IExecOptions) {
    return execSync("expand", args, options);
}

export function expr(args?: string[], options?: IExecOptions) {
    return exec("expr", args, options);
}

export function exprSync(args?: string[], options?: IExecOptions) {
    return execSync("expr", args, options);
}

export function factor(args?: string[], options?: IExecOptions) {
    return exec("factor", args, options);
}

export function factorSync(args?: string[], options?: IExecOptions) {
    return execSync("factor", args, options);
}


export function false_(args?: string[], options?: IExecOptions) {
    return exec("false", args, options);
}

export function falseSync(args?: string[], options?: IExecOptions) {
    return execSync("false", args, options);
}

export function fmt(args?: string[], options?: IExecOptions) {
    return exec("fmt", args, options);
}

export function fmtSync(args?: string[], options?: IExecOptions) {
    return execSync("fmt", args, options);
}

export function fold(args?: string[], options?: IExecOptions) {
    return exec("fold", args, options);
}

export function foldSync(args?: string[], options?: IExecOptions) {
    return execSync("fold", args, options);
}

export function groups(args?: string[], options?: IExecOptions) {
    return exec("groups", args, options);
}

export function groupsSync(args?: string[], options?: IExecOptions) {
    return execSync("groups", args, options);
}

export function head(args?: string[], options?: IExecOptions) {
    return exec("head", args, options);
}

export function headSync(args?: string[], options?: IExecOptions) {
    return execSync("head", args, options);
}

export function hostid(args?: string[], options?: IExecOptions) {
    return exec("hostid", args, options);
}

export function hostidSync(args?: string[], options?: IExecOptions) {
    return execSync("hostid", args, options);
}

export function hostname(args?: string[], options?: IExecOptions) {
    return exec("hostname", args, options);
}

export function hostnameSync(args?: string[], options?: IExecOptions) {
    return execSync("hostname", args, options);
}

export function id(args?: string[], options?: IExecOptions) {
    return exec("id", args, options);
}

export function idSync(args?: string[], options?: IExecOptions) {
    return execSync("id", args, options);
}

export function install(args?: string[], options?: IExecOptions) {
    return exec("install", args, options);
}


export function installSync(args?: string[], options?: IExecOptions) {
    return execSync("install", args, options);
}

export function join(args?: string[], options?: IExecOptions) {
    return exec("join", args, options);
}

export function joinSync(args?: string[], options?: IExecOptions) {
    return execSync("join", args, options);
}

export function kill(args?: string[], options?: IExecOptions) {
    return exec("kill", args, options);
}

export function killSync(args?: string[], options?: IExecOptions) {
    return execSync("kill", args, options);
}

export function link(args?: string[], options?: IExecOptions) {
    return exec("link", args, options);
}

export function linkSync(args?: string[], options?: IExecOptions) {
    return execSync("link", args, options);
}

export function ln(args?: string[], options?: IExecOptions) {
    return exec("ln", args, options);
}

export function lnSync(args?: string[], options?: IExecOptions) {
    return execSync("ln", args, options);
}

export function logname(args?: string[], options?: IExecOptions) {
    return exec("logname", args, options);
}

export function lognameSync(args?: string[], options?: IExecOptions) {
    return execSync("logname", args, options);
}

export function ls(args?: string[], options?: IExecOptions) {
    return exec("ls", args, options);
}

export function lsSync(args?: string[], options?: IExecOptions) {
    return execSync("ls", args, options);
}

export function md5sum(args?: string[], options?: IExecOptions) {    
    return exec("md5sum", args, options);
}

export function md5sumSync(args?: string[], options?: IExecOptions) {
    return execSync("md5sum", args, options);
}

export function mkdir(args?: string[], options?: IExecOptions) {
    return exec("mkdir", args, options);
}

export function mkdirSync(args?: string[], options?: IExecOptions) {
    return execSync("mkdir", args, options);
}

export function mkfifo(args?: string[], options?: IExecOptions) {
    return exec("mkfifo", args, options);
}

export function mkfifoSync(args?: string[], options?: IExecOptions) {
    return execSync("mkfifo", args, options);
}

export function mknod(args?: string[], options?: IExecOptions) {
    return exec("mknod", args, options);
}

export function mknodSync(args?: string[], options?: IExecOptions) {
    return execSync("mknod", args, options);
}

export function mktemp(args?: string[], options?: IExecOptions) {
    return exec("mktemp", args, options);
}

export function mktempSync(args?: string[], options?: IExecOptions) {
    return execSync("mktemp", args, options);
}

export function mv(args?: string[], options?: IExecOptions) {
    return exec("mv", args, options);
}

export function mvSync(args?: string[], options?: IExecOptions) {
    return execSync("mv", args, options);
}

export function nice(args?: string[], options?: IExecOptions) {
    return exec("nice", args, options);
}

export function niceSync(args?: string[], options?: IExecOptions) {
    return execSync("nice", args, options);
}

export function nl(args?: string[], options?: IExecOptions) {
    return exec("nl", args, options);
}

export function nlSync(args?: string[], options?: IExecOptions) {
    return execSync("nl", args, options);
}

export function nohup(args?: string[], options?: IExecOptions) {
    return exec("nohup", args, options);
}

export function nohupSync(args?: string[], options?: IExecOptions) {
    return execSync("nohup", args, options);
}

export function nproc(args?: string[], options?: IExecOptions) {
    return exec("nproc", args, options);
}

export function nprocSync(args?: string[], options?: IExecOptions) {
    return execSync("nproc", args, options);
}

export function numfmt(args?: string[], options?: IExecOptions) {
    return exec("numfmt", args, options);
}

export function numfmtSync(args?: string[], options?: IExecOptions) {
    return execSync("numfmt", args, options);
}

export function od(args?: string[], options?: IExecOptions) {
    return exec("od", args, options);
}

export function odSync(args?: string[], options?: IExecOptions) {
    return execSync("od", args, options);
}

export function paste(args?: string[], options?: IExecOptions) {
    return exec("paste", args, options);
}

export function pasteSync(args?: string[], options?: IExecOptions) {
    return execSync("paste", args, options);
}

export function pathchk(args?: string[], options?: IExecOptions) {
    return exec("pathchk", args, options);
}

export function pathchkSync(args?: string[], options?: IExecOptions) {  
    return execSync("pathchk", args, options);
}

export function pinky(args?: string[], options?: IExecOptions) {
    return exec("pinky", args, options);
}

export function pinkySync(args?: string[], options?: IExecOptions) {
    return execSync("pinky", args, options);
}

export function pr(args?: string[], options?: IExecOptions) {
    return exec("pr", args, options);
}

export function prSync(args?: string[], options?: IExecOptions) {
    return execSync("pr", args, options);
}

export function printenv(args?: string[], options?: IExecOptions) {
    return exec("printenv", args, options);
}

export function printenvSync(args?: string[], options?: IExecOptions) {
    return execSync("printenv", args, options);
}

export function printf(args?: string[], options?: IExecOptions) {
    return exec("printf", args, options);
}

export function printfSync(args?: string[], options?: IExecOptions) {
    return execSync("printf", args, options);
}

export function ptx(args?: string[], options?: IExecOptions) {
    return exec("ptx", args, options);
}

export function ptxSync(args?: string[], options?: IExecOptions) {
    return execSync("ptx", args, options);
}

export function pwd(args?: string[], options?: IExecOptions) {
    return exec("pwd", args, options);
}

export function pwdSync(args?: string[], options?: IExecOptions) {
    return execSync("pwd", args, options);
}

export function readlink(args?: string[], options?: IExecOptions) {
    return exec("readlink", args, options);
}

export function readlinkSync(args?: string[], options?: IExecOptions) {
    return execSync("readlink", args, options);
}

export function realpath(args?: string[], options?: IExecOptions) {
    return exec("realpath", args, options);
}

export function realpathSync(args?: string[], options?: IExecOptions) {
    return execSync("realpath", args, options);
}

export function rm(args?: string[], options?: IExecOptions) {
    return exec("rm", args, options);
}

export function rmSync(args?: string[], options?: IExecOptions) {
    return execSync("rm", args, options);
}

export function rmdir(args?: string[], options?: IExecOptions) {
    return exec("rmdir", args, options);
}

export function rmdirSync(args?: string[], options?: IExecOptions) {
    return execSync("rmdir", args, options);
}

export function runcon(args?: string[], options?: IExecOptions) {
    return exec("runcon", args, options);
}

export function runconSync(args?: string[], options?: IExecOptions) {
    return execSync("runcon", args, options);
}

export function seq(args?: string[], options?: IExecOptions) {
    return exec("seq", args, options);
}

export function seqSync(args?: string[], options?: IExecOptions) {
    return execSync("seq", args, options);
}   

export function sha1sum(args?: string[], options?: IExecOptions) {
    return exec("sha1sum", args, options);
}

export function sha1sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sha1sum", args, options);
}

export function sha224sum(args?: string[], options?: IExecOptions) {    
    return exec("sha224sum", args, options);
}

export function sha224sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sha224sum", args, options);
}

export function sha256sum(args?: string[], options?: IExecOptions) {
    return exec("sha256sum", args, options);
}

export function sha256sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sha256sum", args, options);
}

export function sha384sum(args?: string[], options?: IExecOptions) {
    return exec("sha384sum", args, options);
}

export function sha384sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sha384sum", args, options);
}

export function sha512sum(args?: string[], options?: IExecOptions) {
    return exec("sha512sum", args, options);
}

export function sha512sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sha512sum", args, options);
}

export function shred(args?: string[], options?: IExecOptions) {
    return exec("shred", args, options);
}

export function shredSync(args?: string[], options?: IExecOptions) {
    return execSync("shred", args, options);
}

export function shuf(args?: string[], options?: IExecOptions) {
    return exec("shuf", args, options);
}

export function shufSync(args?: string[], options?: IExecOptions) {
    return execSync("shuf", args, options);
}

export function sleep(args?: string[], options?: IExecOptions) {
    return exec("sleep", args, options);
}

export function sleepSync(args?: string[], options?: IExecOptions) {
    return execSync("sleep", args, options);
}

export function sort(args?: string[], options?: IExecOptions) {
    return exec("sort", args, options);
}

export function sortSync(args?: string[], options?: IExecOptions) {
    return execSync("sort", args, options);
}

export function split(args?: string[], options?: IExecOptions) {
    return exec("split", args, options);
}

export function splitSync(args?: string[], options?: IExecOptions) {
    return execSync("split", args, options);
}

export function stat(args?: string[], options?: IExecOptions) {
    return exec("stat", args, options);
}

export function statSync(args?: string[], options?: IExecOptions) {
    return execSync("stat", args, options);
}

export function stdbuf(args?: string[], options?: IExecOptions) {
    return exec("stdbuf", args, options);
}

export function stdbufSync(args?: string[], options?: IExecOptions) {
    return execSync("stdbuf", args, options);
}

export function stty(args?: string[], options?: IExecOptions) {
    return exec("stty", args, options);
}

export function sttySync(args?: string[], options?: IExecOptions) {
    return execSync("stty", args, options);
}

export function sum(args?: string[], options?: IExecOptions) {
    return exec("sum", args, options);
}

export function sumSync(args?: string[], options?: IExecOptions) {
    return execSync("sum", args, options);
}

export function sync(args?: string[], options?: IExecOptions) {
    return exec("sync", args, options);
}

export function syncSync(args?: string[], options?: IExecOptions) {
    return execSync("sync", args, options);
}

export function tac(args?: string[], options?: IExecOptions) {
    return exec("tac", args, options);
}

export function tacSync(args?: string[], options?: IExecOptions) {
    return execSync("tac", args, options);
}

export function tail(args?: string[], options?: IExecOptions) {
    return exec("tail", args, options);
}

export function tailSync(args?: string[], options?: IExecOptions) {
    return execSync("tail", args, options);
}

export function tee(args?: string[], options?: IExecOptions) {
    return exec("tee", args, options);
}

export function teeSync(args?: string[], options?: IExecOptions) {
    return execSync("tee", args, options);
}

export function test(args?: string[], options?: IExecOptions) {
    return exec("test", args, options);
}

export function testSync(args?: string[], options?: IExecOptions) {
    return execSync("test", args, options);
}

export function timeout(args?: string[], options?: IExecOptions) {
    return exec("timeout", args, options);
}

export function timeoutSync(args?: string[], options?: IExecOptions) {
    return execSync("timeout", args, options);
}

export function touch(args?: string[], options?: IExecOptions) {
    return exec("touch", args, options);
}

export function touchSync(args?: string[], options?: IExecOptions) {
    return execSync("touch", args, options);
}

export function tr(args?: string[], options?: IExecOptions) {
    return exec("tr", args, options);
}

export function trSync(args?: string[], options?: IExecOptions) {
    return execSync("tr", args, options);
}

export function true_(args?: string[], options?: IExecOptions) {
    return exec("true", args, options);
}

export function trueSync(args?: string[], options?: IExecOptions) {
    return execSync("true", args, options);
}

export function truncate(args?: string[], options?: IExecOptions) {
    return exec("truncate", args, options);
}

export function truncateSync(args?: string[], options?: IExecOptions) {
    return execSync("truncate", args, options);
}

export function tsort(args?: string[], options?: IExecOptions) {
    return exec("tsort", args, options);
}

export function tsortSync(args?: string[], options?: IExecOptions) {
    return execSync("tsort", args, options);
}

export function tty(args?: string[], options?: IExecOptions) {
    return exec("tty", args, options);
}

export function ttySync(args?: string[], options?: IExecOptions) {
    return execSync("tty", args, options);
}

export function uname(args?: string[], options?: IExecOptions) {
    return exec("uname", args, options);
}

export function unameSync(args?: string[], options?: IExecOptions) {
    return execSync("uname", args, options);
}

export function unexpand(args?: string[], options?: IExecOptions) {
    return exec("unexpand", args, options);
}

export function unexpandSync(args?: string[], options?: IExecOptions) {
    return execSync("unexpand", args, options);
}

export function uniq(args?: string[], options?: IExecOptions) {
    return exec("uniq", args, options);
}

export function uniqSync(args?: string[], options?: IExecOptions) {
    return execSync("uniq", args, options);
}

export function unlink(args?: string[], options?: IExecOptions) {
    return exec("unlink", args, options);
}

export function unlinkSync(args?: string[], options?: IExecOptions) {
    return execSync("unlink", args, options);
}

export function uptime(args?: string[], options?: IExecOptions) {
    return exec("uptime", args, options);
}

export function uptimeSync(args?: string[], options?: IExecOptions) {
    return execSync("uptime", args, options);
}

export function users(args?: string[], options?: IExecOptions) {
    return exec("users", args, options);
}

export function usersSync(args?: string[], options?: IExecOptions) {
    return execSync("users", args, options);
}

export function vdir(args?: string[], options?: IExecOptions) {
    return exec("vdir", args, options);
}

export function vdirSync(args?: string[], options?: IExecOptions) {
    return execSync("vdir", args, options);
}

export function wc(args?: string[], options?: IExecOptions) {
    return exec("wc", args, options);
}

export function wcSync(args?: string[], options?: IExecOptions) {
    return execSync("wc", args, options);
}

export function who(args?: string[], options?: IExecOptions) {
    return exec("who", args, options);
}

export function whoSync(args?: string[], options?: IExecOptions) {
    return execSync("who", args, options);
}

export function whoami(args?: string[], options?: IExecOptions) {
    return exec("whoami", args, options);
}

export function whoamiSync(args?: string[], options?: IExecOptions) {
    return execSync("whoami", args, options);
}

export function yes(args?: string[], options?: IExecOptions) {
    return exec("yes", args, options);
}

export function yesSync(args?: string[], options?: IExecOptions) {
    return execSync("yes", args, options);
}