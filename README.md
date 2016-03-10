# Kink.com Coding Challenge

## Goal
Create an API with NodeJS & Express that accepts a valid URL and returns the word count of the page referenced in the URL.

## Guidelines
- You may use any npm modules you feel are appropriate.
- All code should be written in vanilla JavaScript (no TypeScript or CoffeeScript).
- Include any tests you feel are necessary.
- Documentation and maintainability is a plus.

## URL Structure and Responses
- An example api request may look like this: `/api/words?url=http://www.kink.com/shoot/39563`
- An example successful response may look like this:
  ```
  // HTTP Status: 200
  {
    words: 2508
  }
  ```
  
- An example failed response may look like this:
  ```
  // HTTP Status: 500
  {
    error: "URL was invalid or not supplied"
  }

  // HTTP Status: 404
  {
	  error: "Page not found"
  }
  ```

### Time Allotment
We respect your time and would prefer you not spend more than 3-5 hours on this task. Feel free to include code comments to indicate any features you don't have time to implement.
