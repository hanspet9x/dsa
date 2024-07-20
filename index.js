const log = (...items) => console.log(items)
const table = (item) => console.table(item)

const performance = (func, name='Performace') => {
    console.time(name);
    func();
    console.timeEnd(name);
}

module.exports = {
    _log: log,
    _table: table,
    _perf: performance
}