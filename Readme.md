1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
        
1.getElementById and querySelector both return element.On the other hand,getElementsByClassName returns HTMLCollection but
querySelectorAll returns NodeList 

2.getElementById selects a single element by its id but getElementsByClassName selects all elements with a certain class name.querySelectorAll selects all elements that match any CSS selector but querySelector selects only the first element that matches any CSS selector.

---------------------------------------------------------------------------

2.How do you create and insert a new element into the DOM?

Ans:The steps i follow to create and insert a new element into the DOM are:

1.At first, I create the element using document.createElement() and assign it to a variable.

2.Then, I add content or attributes like innerText/innerHTML, class, or ID.

3.Next, I select the parent element where I want to insert the new element.

4.Finally, I append the new element  to the parent using appendChild() or append().

Here's a simple example of it:

```js
const newChild = document.createElement('li');
newChild.innerText = 'new book name';
const bookList = document.getElementById('book-list');
bookList.append(newChild);
```

---------------------------------------------------------------------------

3.What is Event Bubbling and how does it work?

Ans:Event Bubbling is a way that events travel through the DOM. When an event occurs on an element, it first runs on that element and then bubbles up to its parent, then the parent’s parent, and so on, all the way up to the document object.

 How Event Bubbling works:

1.Capturing phase:The event starts from document and moves down the DOM tree toward the target element.

2.Target phase:The event reaches the target element where the user actually created an event(e.g. click,mouseover).

3.Bubbling phase:The event then bubbles up from the target to its parent elements, grandparent, and finally the document.

---------------------------------------------------------------------------

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation is a technique in JavaScript where instead of attaching event listeners to multiple child elements, we attach a single event listener to their parent element. Then, using the event object, we determine which child element triggered the event.

Why it's useful:

1.Less memory usage:There's only one listener instead of many.

2.Better performance:Fewer listeners mean faster DOM.

3.Handles dynamic element:New children added later automatically work.

4.Easier maintenance manage:All child events in one place.

5.Cleaner code:Avoids repetitive listeners on multiple elements.Thus it increases code efficiency.

--------------------------------------------------------------------------

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:The difference between preventDefault() and stopPropagation() methods
is:

1.preventDefault() stops the default action of an element from happening but stopPropagation() stops the event from bubbling up through the DOM.

2.preventDefault() method usage:It can be used in forms to prevent the page from reloading after submitting.

```js
document.querySelector("form").addEventListener("submit", function (e){
e.preventDefault(); // form won’t submit
});
```

stopPropagation() method usage:Stops the event from bubbling up to parent elements.

```js
document.querySelector("button").addEventListener("click", function (e) {
e.stopPropagation(); // only button click runs
});
```
