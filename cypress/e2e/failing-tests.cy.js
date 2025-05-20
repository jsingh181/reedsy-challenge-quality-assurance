describe('Bookshelf Failing tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checks each page for books missing background images', () => {
    const checkBookCovers = () => {
      cy.get('a.book').each(($book, index) => {
        cy.wrap($book)
          .should('be.visible')
          .should('have.css', 'background-image')
          .and('match', /url\(["']?.+["']?\)/); // Ensure a background image is present
      });
    };

    const checkAllPages = () => {
      checkBookCovers();

      cy.get('.pager > :nth-child(3)').then($next => {
        if ($next.is(':visible') && !$next.is(':disabled')) {
          cy.wrap($next).click();
          cy.wait(500); // 500 seems optimal
          checkAllPages();
        }
      });
    };

    checkAllPages(); // Checks all pages in the bookshelf sequentially checking for covers
  });
});

// Why does this test fail?
// By the time this test gets to Page 10 it fails because it is expecting to see book covers but there are none being rendered. It also helps ensure that book cover images are consistently displayed across all pages of the library. Cover art plays a key role in user experience and engagement—missing images can make the application look broken or unprofessional. By checking each page and verifying that every book has a visible background image, this test can catch issues related to lazy loading, broken image paths, or rendering errors that might not be immediately obvious in manual testing. It provides confidence that visual content is loading correctly as users navigate the app.


it('fails when a known book title yields no results', () => {
  cy.visit('/');

  const knownBookTitle = 'The Maze Runner'; // Given a valid book title

  cy.get('.form-control').type(knownBookTitle);
  cy.wait(500); // Wait for the search to apply

  cy.get('a.book').contains(knownBookTitle).should('exist');
});

// Why does this test fail?
// This test fails when the search bar does not return any matching book results even though books with the searched title exist in the application. Such a failure indicates a problem with the search functionality — either the search input isn’t correctly processed, the filtering logic is broken, or the UI isn’t updating to show the filtered results. Catching this failure is important because it directly impacts user experience, making it difficult for users to find the books they are looking for.