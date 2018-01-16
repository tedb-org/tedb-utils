export function debounce(fn: any, wait: number) {
    let inDebounce: any;
    return function(this: any, ...args: any[]) {
        const context: any = this;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => fn.apply(context, args), wait);
    };
};
