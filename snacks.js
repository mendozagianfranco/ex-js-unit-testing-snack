function getInitials(name) {
    let initials = '';
    const nameSplit = name.split(' ').filter(str => str !== '');
    for (let i = 0; i < nameSplit.length; i++) {
        initials += nameSplit[i][0].toUpperCase();
    }
    return initials;
}

function createSlug(string) {
    return string.toLowerCase();
}

function average(arrayNums) {
    return arrayNums.reduce((acc, num) => acc + num, 0) / arrayNums.length;
}

module.exports = {
    getInitials, createSlug, average
};