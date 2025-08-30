const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snacks');

// Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Gianfranco Mendoza')).toBe('GM');
    expect(getInitials('gianfranco mendoza')).toBe('GM');
    expect(getInitials('gianfranco      mendoza    ')).toBe('GM');

});

// Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('JavaScript Testing Jest')).toBe('javascript-testing-jest');
});

// Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([15, 5])).toBe(10);
});

// Snack 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Questo è un test')).toBe('questo-è-un-test');
});

// Snack 5 
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('osso')).toBeTruthy();
    expect(isPalindrome('Osso')).toBeTruthy();
    expect(isPalindrome('casa')).toBeFalsy();
    expect(isPalindrome('anna  ')).toBeTruthy();
});

// Snack 6
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow();
    expect(() => createSlug(null)).toThrow();
});

const arrayPosts = [
    { id: 1, title: 'Post 1', slug: 'post-1' },
    { id: 2, title: 'Post 2', slug: 'post-2' },
    { id: 3, title: 'Post 3', slug: 'post-3' },

];

// Snack 7
test('La funzione findPostById restituisce il post corretto dato l\'array di post e l\'id', () => {
    expect(findPostById(arrayPosts, 2)).toEqual({ id: 2, title: 'Post 2', slug: 'post-2' });
    expect(() => { findPostById(arrayPosts, 'ciao'); }).toThrow();
    expect(findPostById(arrayPosts, 100)).toBe(null);
    expect(() => { findPostById([1, 2, 3, 4,], 2); }).toThrow();

});