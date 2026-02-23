## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- `getElementById`: Returns a single element object that matches a specific `id`. It's very specific because IDs are unique.
- `getElementsByClassName`: Returns a live `HTMLCollection` of all elements with a specific class name. "Live" means if the DOM changes, the collection updates automatically.
- `querySelector`: Returns the first element that matches a CSS selector (e.g., `.class`, `#id`, `div > p`).
- `querySelectorAll`: Returns a static `NodeList` of all elements matching a CSS selector. Static means it doesn't automatically update if the DOM changes.

### 2. How do you create and insert a new element into the DOM?
1. **Create:** Use `document.createElement('tagName')` to create the element.
2. **Configure:** Set attributes or content (e.g., `element.innerText = "Hello"`, `element.className = "my-class"`).
3. **Insert:** Use methods like `appendChild()`, `prepend()`, or `insertBefore()` on a parent element to add it to the DOM tree. Example: `parent.appendChild(newElement)`.

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a way of event propagation in the DOM where an event starts at the target element (the one clicked) and then "bubbles" up through its parents in the DOM tree, triggering their event handlers too. For example, if you click a button inside a `div`, the button's click event fires first, then the `div`'s click event fires, then the `body`'s, and so on.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where one can attach a single event listener to a parent element instead of multiple listeners to each child. It relies on Event Bubbling.
- **Why it's useful:** It improves performance and handles dynamically added elements automatically (since the listener is on the parent, it will catch events from new children too).

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- `preventDefault()`: Stops the default action of an element (e.g., preventing a link from following a URL or a form from submitting).
- `stopPropagation()`: Stops the event from bubbling up (or tunneling down) the DOM tree, preventing parent handlers from being triggered.
