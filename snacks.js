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

function findPostById(arrayPosts, id) {
    if (isNaN(id)) {
        throw new Error('ID non è numerico');
    }
    arrayPosts.forEach(p => {
        if (p.id === undefined || p.title === undefined || p.slug === undefined) {
            throw new Error('Array di Post non valido');
        }
    });
    return arrayPosts.find(p => p.id === id) || null;
}

function addPost(arrayPosts, post) {
    arrayPosts.push(post);
}

function removePost(arrayPosts, id) {
    const index = arrayPosts.findIndex(p => p.id === id);
    arrayPosts.splice(index, 1);
}

module.exports = {
    getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost
};