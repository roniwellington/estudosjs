function getFlagValue(flag){
    const index =  process.argv.indexOf(flag) + 1
    return process.argv[index];
}

module.exports = getFlagValue;