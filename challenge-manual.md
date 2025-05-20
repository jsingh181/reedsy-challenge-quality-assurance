# Quality Assurance

## 1. About you

During my time at Team Satchel, I played a key role as the lead QA Engineer, contributing to the development and maintenance of their suite of cloud-based MIS and wellbeing applications, used by educational institutions in the UK and US. My work focused on ensuring high-quality user experiences across both web and mobile platforms, using a mix of manual and automated testing approaches.

I created and maintained detailed test plans and test cases, performed rigorous regression testing, and collaborated closely with cross-functional teams in an Agile environment. I was responsible for end-to-end testing across Satchel's web and native iOS/Android apps, leveraging tools like Cypress, BrowserStack, TestRail, and Jira to ensure coverage and defect management. I also tested for UI/UX responsiveness, performance, and accessibility across multiple browsers and devices.

A notable achievement was implementing Cypress-based automation to significantly reduce manual testing time while increasing coverage and reliability. I also contributed to the release process by building internal release note practices and aligning closely with developers and designers through a “shift-left” approach to quality. I also utilised BDD approaches to ensure that would then go on to improve collaboration with other teams, and make test cases more approachable to non-technical stakeholders, alongside it being living documentation of system behaviour.

This project allowed me to build a holistic understanding of the QA lifecycle within a fast-paced SaaS environment and refine my technical and communication skills to align with both business goals and user needs. In addition to web apps, I have also worked extensively with mobile app developers to ensure functionality consistency and a quality end user experience.

---

## 2. Manual testing

See below curated bug reports & enhancement tickets for the bookshelf app

### Bug Reports

```markdown
*Bug Report 1*
Inconsistent positioning of book titles next to covers

*Summary*
There is a slight inconsistency across the application where book titles are being displayed in different positions when the user clicks a title to view information about it

## Steps to Reproduce
1. User navigates to the bookshelf
2. User clicks the title 'The Outsiders'
3. User observes that the title, author and user rating is displayed beside it
4. User clicks back to go to the main library
5. User then clicks on the title 'Clockwork Angel' (Cassandra Clare)

## Expected Result
It is expected that that the title of the book 'Clockwork Angel' is displayed beside the book on the right hand side, where it appears for 'The Outsiders' title.

## Actual Result
The title, author and user rating information actually appears below the book

## Environment
- *Device/OS:*: Windows 11,
- *Browser/App:* Edge v136.0.3240
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
Other examples of books with inconsistent title/author layouts include: 'A Wrinkle in Time', 'Eragon (The Inheritance Cycle, #1' etc

```

```markdown
*Bug Report 2*
Library contains books which are missing cover art/titles

*Summary*
Whilst scrolling through the bookshelf app, there are some titles that are missing their cover art and when viewing the shelf, there are notable gaps between pages.

## Steps to Reproduce
1. User navigates to the bookshelf
2. User ensures they are on the first page of the library
3. User clicks the right chevron (>) to navigate to the second page
4. User observes there are two empty gaps for the titles on the bottom row of the bookshelf

## Expected Result
All titles that have their cover art should display this on the bookshelf when the user scrolls through it. When the book does not have any cover art available, then a placeholder should be shown so that the UI/UX is consistent for the end user.

## Actual Result
The cover art for the following book is missing and Book 35 has no title.
- Ender's Game (Ender's Saga, #1) - http://localhost:5173/books/34
- Book 35 has no information at all - no cover, no title

These books should still be displayed appropriately on the shelf, even without this information.

## Screenshot
Below is a screenshot of the issue
[View](./assets/missing_art.jpeg)

## Environment
- *Device/OS:*: MacOS 10.15,
- *Browser/App:* Chrome v136.0.7103.114
- *Build/Version:* N/A

## Severity
High

## Additional Information
Book 35 is missing more than just the cover art - this includes title
```

```markdown
*Bug Report 3*
The search bar does not seem to return any results

*Summary*
Whilst using the search bar it would appear that no results are being returned. This is despite using a valid title or keyword.

## Steps to Reproduce
1. User navigates to the bookshelf
2. User navigates to the top search bar
3. User enters a search term such as 'charlie'
4. User observes that no results are found, even though there is a book matching the search term

## Expected Result
The book 'Charlie and the Chocolate factory' should have been returned from the search criteria

## Actual Result
No books are being returned - user can see a blank page with only the page control visible

## Screenshot
Below is a screenshot of the issue
[View](./assets/no_search.jpeg)

## Environment
- *Device/OS:*: MacOS 10.15,
- *Browser/App:* Chrome v136.0.7103.114
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
Have tried this with numerous other books, all with the same result. Try the following keywords: charlie, eragon, outsiders, uglies etc
```

```markdown
*Bug Report 4*
Pagination controls show pages that do not have any books or return empty pages

*Summary*
Whilst using the pagination footer, it

## Steps to Reproduce
1. User navigates to the bookshelf
2. User clicks through each page in turn

## Expected Result
The pagination should only show valid pages that return book results, so any pages with no books should be hidden from the pagination control. This means that in theory, the bookshelf should only go up to Page 8 and the right chevron (>) should be disabled.

## Actual Result
Observe that after Page 8, no books are being returned but the user can still click through the page control, even up to page 50 and beyond! Even though there are not that many books present.

## Screenshot
Below is a screenshot of the issue
[View](./assets/no_books.jpeg)

## Environment
- *Device/OS:*: MacOS 10.15,
- *Browser/App:* Chrome v136.0.7103.114
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
N/A
```

### UI/UX Improvements

```markdown
*Enhancement Report 1*
Add back button to assist user navigation between titles in bookshelf

*Summary*
Though the bookshelf is a web application, a back button would be a useful addition to help users easily navigate between library titles. Currently they have to use to the browser back button which is not so intuitive.

## Steps to Reproduce
1. User navigates to the bookshelf
2. User clicks the title 'Pride and Prejudice'
3. User observes that there is no obvious way in the UI to return but needs to use browser back buttons
4. User clicks back to go to the main library

## Expected Result
A back button should be present to allow the user to seamlessly navigate between titles in the bookshelf without needing to rely on the browser back button. This is actually more important when using mobile devices as this button will often not be visible, therefore improving accessibility.

## Actual Result
No back button or obvious UI intention to return the user back to the page they were on.

## Environment
- *Device/OS:*: Windows 11,
- *Browser/App:* Edge v136.0.3240
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
Affects users on desktop and mobile
```

```markdown
*Enhancement Report 2*
Add a clear option to the search input field

*Summary*
There is currently no easy way for a user to return back to results once they have finished searching - considering adding a clear control (x) to the field to easily allow users to quickly clear the input. 

Currently the user needs to manually clear what they have typed in order to return back to the bookshelf

## Steps to Reproduce
1. User navigates to the bookshelf
2. User enters a search term such as 'eragon'
3. User observes that there is no easy way to clear the search term
4. User clears the search term they've entered and is returned back to the libary

## Expected Result
A clear button (x) is added to the search field to allow easy one-click clearing of the field to enable user to return to the libary

## Actual Result
No clear field button, user needs to manually clear any input

## Environment
- *Device/OS:*: MacOS 10.15,
- *Browser/App:* Chrome v136.0.7103.114
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
N/A
```

```markdown
*Enhancement Report 3*
Pagination controls are usually hidden when viewing the bookshelf on mobile/responsive devices

*Summary*
Whilst using a mobile device, especially a phone, the pagination controls can usually be hidden unless the user scrolls all the way to the end which can be counter-intuitive.

## Steps to Reproduce
1. User navigates to the bookshelf whilst on a mobile device
2. User scrolls down all the way to the bottom to see pagination control to see the next page

## Expected Result
The user should be able to see a floating pagination control so they can go back and forth between pages without needing to scroll to to the bottom. 

## Actual Result
No books are being returned - user can see a blank page with only the page control visible

## Screenshot

## Environment
- *Device/OS:*: MacOS 10.15,
- *Browser/App:* Chrome v136.0.7103.114
- *Build/Version:* N/A

## Severity
Medium

## Additional Information
When the user clicks the chevron to navigate to page two, there is also a weird layout bug where the page zoom will suddently increase - not sure if this is relate
```

---