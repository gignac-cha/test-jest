export const random(x?: number, y?: number) => {
    const random = Math.random();
    if (typeof x === 'number' && typeof y === 'number') {
        return Math.floor(x + r * (y - x));
    } else if (typeof x === 'number') {
        return Math.floor(x * r);
    }
    return r;
};

export const choice<T>(array: T[]): T => {
    return array[random(array.length)];
};

export const shuffle<T>(array: T[]): T[] => {
    for (let i = 0; i < array.length; ++i) {
        const j = random(array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
