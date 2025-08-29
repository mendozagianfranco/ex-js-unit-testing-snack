const { getInitials, createSlug } = require('./snacks');

// Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Gianfranco Mendoza')).toBe('GM');
    expect(getInitials('gianfranco mendoza')).toBe('GM');
    expect(getInitials('gianfranco      mendoza    ')).toBe('GM');

});

//Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('JavaScript Testing Jest')).toBe('javascript testing jest');
});
