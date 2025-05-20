describe('Bookshelf Passing Tests', () => {
  beforeEach(() => {
    cy.visit('/');  // visits baseUrl before every test in this file
  });

  it('shows the search bar', () => {
    cy.get('.input-group').contains('Search') // Can help indicate we have a UI
  });

  it('checks that the specific book has a visible background image', () => {
    cy.get('[href="/books/13"]')
      .should('have.length.greaterThan', 0) // Ensure books exist
      .each(($book, index) => {
        cy.wrap($book)
          .should('have.css', 'background-image')
          .and('match', /url\(["']?.+["']?\)/);

        // Optional: log which book was checked
        cy.log(`Checked book #${index + 1}`);
      });
  });

  it('randomly checks a book for a background image', () => {
      cy.get('a.book') // since books are wrapped in href, we need to target using <a>
      .then(($books) => {
        const total = $books.length;
        expect(total).to.be.greaterThan(0);

        const randomIndex = Math.floor(Math.random() * total);
        const randomBook = $books.eq(randomIndex);

        cy.wrap(randomBook)
          .should('be.visible')
          .should('have.css', 'background-image')
          .and('match', /url\(["']?.+["']?\)/);

        cy.log(`Checked random book #${randomIndex + 1}`);
      });
  });

  it('searches for a book', () => {
    const searchTerm = 'outsiders';

    // Type into the search input
    cy.get('.form-control')
      .should('be.visible')
      .clear()
      .type(searchTerm);
    });
});
