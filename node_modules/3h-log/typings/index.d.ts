declare type LoggerOutputMethod = (msg: string) => void;
interface LoggerOptions {
    logTime?: boolean;
    timeFormat?: string;
    upperCasePrefix?: boolean;
    prefixLength?: number;
    fixAlign?: (prefix: string) => string;
    levels?: string[];
    level?: number;
    output?: LoggerOutputMethod;
}
declare class Logger implements LoggerOptions {
    constructor(options?: LoggerOptions);
    static readonly defaultLevels: string[];
    logTime: boolean;
    timeFormat: string;
    upperCasePrefix: boolean;
    prefixLength: number;
    fixAlign(prefix: string): string;
    levels: string[];
    level: number;
    output: LoggerOutputMethod;
    setLevel(prefix: string): this;
    enableAll(): this;
    disableAll(): this;
    format(prefix: string, message: string): string;
    print(prefix: string, message: string): boolean;
    error(message: string): boolean;
    warn(message: string): boolean;
    info(message: string): boolean;
    log(message: string): boolean;
    debug(message: string): boolean;
}
export = Logger;
//# sourceMappingURL=index.d.ts.map