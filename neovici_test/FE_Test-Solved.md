# Cocktail Assistant

Build a tiny app that helps you gather a shopping list for multiple cocktails.

## UI Mockup

```
           ┌───────────────────────────────────────────────────────────────┬──────┐
           │ Margarita                                                     │Search│
           └───────────────────────────────────────────────────────────────┴──────┘

┌─────────────────────────────────────────────────────────────┐ ┌──────────────────────────────┐
│                                                             │ │                              │
│ ┌────────────┐  ────────────────────────────────────        │ │ Shopping List                │
│ │            │                                              │ │ ──────────────────────────── │
│ │            │  ───────────────                             │ │                              │
│ │            │                                              │ │  ─────────────────           │
│ │            │  ───────────────                             │ │                              │
│ │            │                                        ┌───┐ │ │  ─────────────────           │
│ │            │  ───────────────                       │ + │ │ │                              │
│ └────────────┘                                        └───┘ │ │  ─────────────────           │
│                                                             │ │                              │
└─────────────────────────────────────────────────────────────┘ │                              │
                                                                │                              │
                                                                │                              │
┌─────────────────────────────────────────────────────────────┐ │                              │
│                                                             │ │                              │
│ ┌────────────┐  ────────────────────────────────────        │ │                              │
│ │            │                                              │ │                              │
│ │            │  ───────────────                             │ │                              │
│ │            │                                              │ │                              │
│ │            │  ───────────────                             │ │                              │
│ │            │                                        ┌───┐ │ │ ┌─────┐                      │
│ │            │  ───────────────                       │ + │ │ │ │Print│                      │
│ └────────────┘                                        └───┘ │ │ └─────┘                      │
│                                                             │ │                              │
└─────────────────────────────────────────────────────────────┘ └──────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ ┌────────────┐  ────────────────────────────────────        │
│ │            │                                              │
│ │            │  ───────────────                             │
│ │            │                                              │
│ │            │  ───────────────                             │
│ │            │                                        ┌───┐ │      ┌─────────────────────────┐
│ │            │  ───────────────                       │ + │ │      │        Searching...     │
│ └────────────┘                                        └───┘ │      │                         │
│                                                             │      └─────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

## Features

- _search input_ with query submit button
- _query results listing_ with thumbnail, name, instructions and "add to
  shopping list" button for each
- _shopping list_ that collects all of the ingredients for the cocktails
  that the user adds
- _print shopping list_ button that opens up a browser dialog to print
  the ingredients list
- _toaster_ that displays various messages: "Searching...", "Here are the
  results.", "No results found.", "Ingredients added to shopping list.",
  "Ingredient removed from shopping list."

NOTE: the shopping list deduplicates the items (if two cocktails contain
Tequila, you only need to buy a single bottle of Tequila)

## Requirements

- all code is committed to a public github repository, that you create
- cocktails are fetched using TheCocktailDB`s open API:
  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
- fetch queries are made using the native fetch api:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- you have to use the haunted hooks library:
  https://github.com/matthewp/haunted
- the only UI libraries allowed are haunted and lit-html
- the app can be started locally by running these commands:
  `git clone <repo url>`, `npm install`, `npm start`

### About haunted

Haunted is a library inspired by [React hooks](https://reactjs.org/docs/hooks-intro.html).
It enables you to create native web components using hooks and lit-html.
At Neovici we use it extensively, so familiarity with it is very important.

# MY SOLUTION

### Requirements self-assessment

- all code is committed to a public github repository, that you create - check, you can find it at https://github.com/CarloBarone1897/neovici_test.
- cocktails are fetched using TheCocktailDB`s open API:
  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita - check.
- fetch queries are made using the native fetch api:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API - check.
- you have to use the haunted hooks library:
  https://github.com/matthewp/haunted - not check; I never used it before, and I preferred carrying out the project with what I already knew. I'm currently going through Haunted documentation, if needed I can work a bit more on it and try to implement it.
- the only UI libraries allowed are haunted and lit-html - same as above.
- the app can be started locally by running these commands:
  `git clone <repo url>`, `npm install`, `npm start` - check

### Features self-assesment

- _search input_ and _query results listings_ with query submit button: the search input is text-based, one starts typing the cocktail name and all the results containing that text key are displayed in form of cards containing the name and the ingredients of the cocktail.
- _query results listing_ with thumbnail, name, instructions and "add to shopping list" button for each: all of this requirements show up in the cocktail cards, so do the ingredients. It turned out easier to me to include them directly there, so to have all the fetching functions directed to the same place.
- _shopping list_ that collects all of the ingredients for the cocktails that the user adds: implemented and working. Apropå the deduplication: it works perfectly when selecting different cocktails, though it doesn't eliminate the duplicates within the same cocktail (e.g. the Watermelon Margarita includes watermelon and mint twice, the first time as actual ingredients and the second time as garnition dosages).
- _print shopping list_ button that opens up a browser dialog to print the ingredients list: done-ish, I'm not exactly sure about how to implement modals and printing windows, I created an alert which displays the ingredients in the shopping list at that time.
- _toaster_ that displays various messages: "Searching...", "Here are the results.", "No results found.", "Ingredients added to shopping list.", "Ingredient removed from shopping list." - this I didn't manage to do, for some crash-causing bugs which I am still working to fix. I did implement an empty Toaster component as a "placeholder".

NOTE: the shopping list deduplicates the items (if two cocktails contain Tequila, you only need to buy a single bottle of Tequila).

## GENERAL SELF-REMARKS

This is a walking skeleton: the core functionalities are implemented and the app serves its scope. Though, there are several ameliorments that can be carried out in more time. For instance:

* Implement the toaster. Its debugging phase proved to take longer than expected; though, the functionalities it would be supposed to highlight are implemented: printing mock-up, loading of information, incorrect value inserted catching, and so on.
* Improvement of the styling, UI- and UX-design-wise: better and softer shapes, fonts, animations are my insights on it; in general, the aspect of the app's interface can be improved under several points of wiev.
* Implementation of an actual printing modal.
