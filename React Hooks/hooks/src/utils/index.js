const memoize = fn => {
    const cache = Object.create(null);
    return value => cache[value] || (cache[value] = fn(value));
};