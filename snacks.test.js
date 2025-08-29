const { getInitials, createSlug, average } = require('./snacks');

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

