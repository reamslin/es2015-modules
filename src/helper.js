function choice(items) {
    const randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
};

function remove(items, item) {
    const itemIdx = items.indexOf(item);
    if (itemIdx !== -1) {
        items.splice(itemIdx, 1);
        return item
    } else {
        return undefined
    };
};

export { choice, remove };