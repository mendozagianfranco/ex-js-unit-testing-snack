function getInitials(name) {
    let initials = '';
    const nameSplit = name.split(' ');
    for (let i = 0; i < nameSplit.length; i++) {
        initials += nameSplit[i][0];
    }
    return initials;
}

module.exports = {
    getInitials
};