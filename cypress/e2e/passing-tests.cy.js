describe('Bookshelf Passing Tests', () => {
  beforeEach(() => {
    cy.visit('/');  // visits baseUrl before every test in this file
  });

  it('shows the search bar', () => {
    cy.get('.input-group').contains('Search') // Can help indicate we have a UI
  });

  // Why is this a worthwhile test?
  // It can be used as a quick way to verify, in the test, that some element of the application loaded is visible! In this case we know the search appears. The application does not have a heading, else we could also assert for that too.

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

  // Why is this a worthwhile test?
  // This test is worthwhile because it specifically verifies that a particular book, identified by its unique link, is present and displays a visible background image. This targeted check ensures that critical content—the book cover—is rendered correctly for important or featured items, helping catch any UI issues that might affect user experience. By confirming the background image’s presence and validity, the test helps maintain the visual integrity of the application and prevents broken or missing images for key books.


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

  // Why is this a worthwhile test? 
  // This test is valuable because it ensures that at least one book is displayed on the page and that the book’s cover image is properly rendered as a visible CSS background image. By randomly selecting a book each time the test runs, it helps catch issues that might only affect certain books, improving overall test coverage without slowing down the test suite. This approach balances efficiency with meaningful verification, helping prevent visual regressions in the user interface.

  it('searches for a book', () => {
    const searchTerm = 'outsiders';

    // Type into the search input
    cy.get('.form-control')
      .should('be.visible')
      .clear()
      .type(searchTerm);
    });

it('verifies sorting by Title using dropdown', () => {
  cy.visit('/');

  const label = 'Title';
  const selector = 'title';

  // Select the sorting option from dropdown
  cy.get('.form-select').select(label);

  cy.wait(500);

  cy.get(selector).then($els => {
    const texts = [...$els].map(el => el.innerText.trim());

    // Check ascending alphabetical order
    const isSortedAsc = arr => arr.every((v, i, a) => !i || a[i - 1].localeCompare(v) <= 0);

    expect(isSortedAsc(texts)).to.be.true;
  });
});
})

// Why is this a worthwhile test?
// This test is valuable because it checks that the books are correctly sorted by title when the user selects that option from the dropdown. Sorting by title is a common way users navigate large collections, so it’s important that this feature works properly.