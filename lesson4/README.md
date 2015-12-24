##Linting
- Linting is a way to automatically check your javascript code for errors
- It can be done at various stages during development
  - via your editor (live linting)
  - your build process
  - or your pre-commit hook in version control
- There’s also the difference of:
  - code style linting
    - can complain about code that isn’t properly camel cased
    - or a particular way of placing braces for a function
  - vs syntax (or structural) linting - this is what most people refer to when they say linting - these rules check for javascript anti-patterns such as unreachable statements or forgetting to do a strict comparison against null 
- The linter only checks for potential errors - it doesn’t have any idea about what you’re trying to accomplish

##Linters
- There are 3 popular JS linters out there that developers use:
  1. JSHint
  2. JSCS
  3. ESLint
    - supports modern es6 code
    - can be extended
    - has output that’s really easy to understand
