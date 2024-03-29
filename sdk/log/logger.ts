// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { getLevelByName, getLevelName, LogLevels } from "./levels.ts";
import type { LevelName } from "./levels.ts";
import type { BaseHandler } from "./handlers.ts";
import { LogRecord } from "./log-record.ts";

// deno-lint-ignore no-explicit-any
export type GenericFunction = (...args: any[]) => any;

export interface LoggerOptions {
  handlers?: BaseHandler[];
}

export class Logger {
  #level: LogLevels;
  #handlers: BaseHandler[];
  readonly #loggerName: string;

  constructor(
    loggerName: string,
    levelName: LevelName,
    options: LoggerOptions = {},
  ) {
    this.#loggerName = loggerName;
    this.#level = getLevelByName(levelName);
    this.#handlers = options.handlers || [];
  }

  get level(): LogLevels {
    return this.#level;
  }
  set level(level: LogLevels) {
    this.#level = level;
  }

  get levelName(): LevelName {
    return getLevelName(this.#level);
  }
  set levelName(levelName: LevelName) {
    this.#level = getLevelByName(levelName);
  }

  get loggerName(): string {
    return this.#loggerName;
  }

  set handlers(hndls: BaseHandler[]) {
    this.#handlers = hndls;
  }
  get handlers(): BaseHandler[] {
    return this.#handlers;
  }

  /** If the level of the logger is greater than the level to log, then nothing
   * is logged, otherwise a log record is passed to each log handler.  `msg` data
   * passed in is returned.  If a function is passed in, it is only evaluated
   * if the msg will be logged and the return value will be the result of the
   * function, not the function itself, unless the function isn't called, in which
   * case undefined is returned.  All types are coerced to strings for logging.
   */
  #_log<T>(
    level: number,
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    if (this.level > level) {
      return msg instanceof Function ? undefined : msg;
    }

    let fnResult: T | undefined;
    let logMessage: string;
    if (msg instanceof Function) {
      fnResult = msg();
      logMessage = this.asString(fnResult);
    } else {
      logMessage = this.asString(msg);
    }
    const record: LogRecord = new LogRecord({
      msg: logMessage,
      args: args,
      level: level,
      loggerName: this.loggerName,
    });

    this.#handlers.forEach((handler) => {
      handler.handle(record);
    });

    return msg instanceof Function ? fnResult : msg;
  }

  asString(data: unknown): string {
    if (typeof data === "string") {
      return data;
    } else if (
      data === null ||
      typeof data === "number" ||
      typeof data === "bigint" ||
      typeof data === "boolean" ||
      typeof data === "undefined" ||
      typeof data === "symbol"
    ) {
      return String(data);
    } else if (data instanceof Error) {
      return data.stack!;
    } else if (typeof data === "object") {
      return JSON.stringify(data);
    }
    return "undefined";
  }

  verbose<T>(msg: () => T, ...args: unknown[]): T | undefined;
  verbose<T>(msg: T extends GenericFunction ? never : T, ...args: unknown[]): T;
  verbose<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.VERBOSE, msg, ...args);
  }

  debug<T>(msg: () => T, ...args: unknown[]): T | undefined;
  debug<T>(msg: T extends GenericFunction ? never : T, ...args: unknown[]): T;
  debug<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.DEBUG, msg, ...args);
  }

  info<T>(msg: () => T, ...args: unknown[]): T | undefined;
  info<T>(msg: T extends GenericFunction ? never : T, ...args: unknown[]): T;
  info<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.INFO, msg, ...args);
  }

  warning<T>(msg: () => T, ...args: unknown[]): T | undefined;
  warning<T>(msg: T extends GenericFunction ? never : T, ...args: unknown[]): T;
  warning<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.WARNING, msg, ...args);
  }

  error<T>(msg: () => T, ...args: unknown[]): T | undefined;
  error<T>(msg: T extends GenericFunction ? never : T, ...args: unknown[]): T;
  error<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.ERROR, msg, ...args);
  }

  critical<T>(msg: () => T, ...args: unknown[]): T | undefined;
  critical<T>(
    msg: T extends GenericFunction ? never : T,
    ...args: unknown[]
  ): T;
  critical<T>(
    msg: (T extends GenericFunction ? never : T) | (() => T),
    ...args: unknown[]
  ): T | undefined {
    return this.#_log(LogLevels.CRITICAL, msg, ...args);
  }
}