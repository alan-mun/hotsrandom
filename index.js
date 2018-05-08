const params = require('./params.js')
const heroes = require('./heroes.js')

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function get_heroes() {
    const length = heroes.length
    let ids = []
    let result = []
    for (let i = 0; i < params.heroes; ++i) {
        let next = getRandom(length)
        while (ids.includes(next)) {
            next = getRandom(length)
        }
        ids.push(next)
        result.push(heroes[next])
    }
    return result
}

console.log(get_heroes())