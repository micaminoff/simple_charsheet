export const modifier = (value: number) => (
    Math.floor((value - 10) / 2)
);

// Places ', ' between items in an array, but not after the last one
export const format_string = (list: string[] = []) => (
    list.map((l, i) => i < list.length - 1 ? l + ', ' : l)
);