function getInitials(name) {
    let initials = '';
    const nameSplit = name.split(' ').filter(str => str !== '');
    for (let i = 0; i < nameSplit.length; i++) {
        initials += nameSplit[i][0].toUpperCase();
    }
    return initials;
}

function createSlug(string) {
    if (!string) {
        throw new Error("Inserire titolo valido");
    }
    return string.toLowerCase().replaceAll(' ', '-');
}

function average(arrayNums) {
    return arrayNums.reduce((acc, num) => acc + num, 0) / arrayNums.length;
}

function isPalindrome(string) {
    let reserveString = string.trim().split('').reverse().join('').toLowerCase();
    return reserveString === string.toLowerCase().trim();
}


module.exports = {
    getInitials, createSlug, average, isPalindrome
};