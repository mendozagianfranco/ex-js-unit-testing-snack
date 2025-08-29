function getInitials(name) {
    let initials = '';
    const nameSplit = name.split(' ').filter(str => str !== '');
    for (let i = 0; i < nameSplit.length; i++) {
        initials += nameSplit[i][0].toUpperCase();
    }
    return initials;
}

module.exports = {
    getInitials
};