const { getInitials } = require('./snacks');

// Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Gianfranco Mendoza')).toBe('GM');
});

