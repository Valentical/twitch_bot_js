const cooldown = new Set();

module.exports.set = (id, time) => {
    cooldown.add(id);
    setTimeout(() => {
        this.delete(id);
    }, time);

}

module.exports.delete = (id) => {
    cooldown.delete(id)
}

module.exports.has = (id) => {
    return cooldown.has(id)
}

const cooldown2 = new Set();

module.exports.set = (id, time) => {
    cooldown2.add(id);
    setTimeout(() => {
        this.delete(id);
    }, time);

}

module.exports.delete = (id) => {
    cooldown2.delete(id)
}

module.exports.has = (id) => {
    return cooldown2.has(id)
}
