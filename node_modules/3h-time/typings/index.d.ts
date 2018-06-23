declare const Time: {
    replacers: {
        [id: string]: (date: Date) => string;
    };
    get(format: string): string;
    format(date: Date, format: string): string;
};
export = Time;
//# sourceMappingURL=index.d.ts.map