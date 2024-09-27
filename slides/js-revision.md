---
theme: uncover
color: #000
colorSecondary: #5324fb
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
paginate: true
marp: true
---

# Revision Week 5 - 16

---

## Week 5: Variables & Data Types

---

### Introduction to Variables

- **var**: The `var` keyword is the oldest way to declare variables in JavaScript. Variables declared with `var` are function-scoped, meaning they are accessible within the function they are declared in. They can be re-assigned and re-declared within their scope.

  ```javascript
  var name = "Maroof Shittu"; // Declaration and initialization
  console.log(name); // Output: Maroof Shittu
  name = "John Doe"; // Re-assignment
  console.log(name); // Output: John Doe
  ```
---

- **let**: Introduced in ES6 (ECMAScript 2015), `let` allows you to declare block-scoped variables, which means they are only accessible within the block they are declared in. They can be re-assigned but not re-declared within the same scope.
  ```javascript
  let name = "Ekeson"; // Declaration and initialization
  console.log(name); // Output: Ekeson
  name = "John Doe"; // Re-assignment
  console.log(name); // Output: John Doe
  let name = "Jane Doe"; // Error: Identifier 'name' has already been declared
  ```
---
- **const**: Also introduced in ES6, `const` is used to declare block-scoped variables that cannot be re-assigned or re-declared. Once a value is assigned to a `const` variable, it cannot be changed.
  ```javascript
  const student = "Helen"; // Declaration and initialization
  console.log(student); // Output: Helen
  student = "John"; // Error: Assignment to constant variable
  ```
---

### Naming Conventions
- Cannot start with a number: Variable names must begin with a letter, underscore (_), or dollar sign ($).
  ```javascript
  let 1student = "Helen"; // Error: Invalid or unexpected token
  ```
- Cannot contain hyphens or dashes: Hyphens are not allowed in variable names.
  ```javascript
  let student-name = "Helen"; // Error: Unexpected token '-'
  ```
- Special characters: Only underscores and dollar signs are allowed.
  ```javascript
  let _student = "Helen"; // Valid
  let $student = "Helen"; // Valid
  ```
- Camel Case: Common convention for naming variables where the first word is lowercase and subsequent words are capitalized.
  ```javascript
  let myVariable = "value";
  ```
- **Descriptive names**: Use meaningful names that describe the variable's purpose.
  ```javascript
  let userAge = 25;
  ```

---

### Data Types**
- **Primitive**: Basic data types that are immutable (cannot be changed).
  - **string**: Represents textual data.
    ```javascript
    let name = "John";
    ```
  - **number**: Represents numeric values.
    ```javascript
    let age = 30;
    ```
  - **boolean**: Represents true or false values.
    ```javascript
    let isStudent = true;
    ```
  ---
  - **null**: Represents an intentional absence of any value.
    ```javascript
    let emptyValue = null;
    ```
  - **undefined**: Represents an uninitialized variable.
    ```javascript
    let notAssigned;
    ```
  - **symbol**: Represents a unique identifier.
    ```javascript
    let sym = Symbol("unique");
    ```
---
- **Reference**: Complex data types that can hold multiple values.
  - **object**: Collection of key-value pairs.
    ```javascript
    let person = { name: "John", age: 30 };
    ```
  - **array**: Ordered list of values.
    ```javascript
    let numbers = [1, 2, 3];
    ```
  - **function**: Block of code designed to perform a particular task.
    ```javascript
    function greet() {
      console.log("Hello, World!");
    }
    ```
---

## Week 6: Operators

---
### Arithmetic Operators
- **Addition (`+`)**: Adds two numbers.
  ```javascript
  let sum = 5 + 3; // Output: 8
  ```
- **Subtraction (`-`)**: Subtracts one number from another.
  ```javascript
  let difference = 5 - 3; // Output: 2
  ```
- **Multiplication (`*`)**: Multiplies two numbers.
  ```javascript
  let product = 5 * 3; // Output: 15
  ```
---
- **Division (`/`)**: Divides one number by another.
  ```javascript
  let quotient = 6 / 3; // Output: 2
  ```
- **Modulus (`%`)**: Returns the remainder of a division.
  ```javascript
  let remainder = 5 % 2; // Output: 1
  ```
- **Exponentiation (`**`)**: Raises one number to the power of another.
  ```javascript
  let power = 2 ** 3; // Output: 8
  ```
---

### Type Conversion
- **Implicit**: JavaScript automatically converts types when necessary.
  ```javascript
  let result = "" + 2; // Output: "2" (string)
  ```
- **Explicit**: Manually convert types using functions like `Number()`, `String()`, etc.
  ```javascript
  let num = Number("2"); // Output: 2 (number)
  ```
---

### Comparison Operators
- **Equality (`==`)**: Compares values for equality, with type conversion.
  ```javascript
  console.log(2 == "2"); // Output: true
  ```
- **Strict Equality (`===`)**: Compares values for equality, without type conversion.
  ```javascript
  console.log(2 === "2"); // Output: false
  ```
---
- **Inequality (`!=`)**: Compares values for inequality, with type conversion.
  ```javascript
  console.log(2 != "2"); // Output: false
  ```
- **Strict Inequality (`!==`)**: Compares values for inequality, without type conversion.
  ```javascript
  console.log(2 !== "2"); // Output: true
  ```
- **Greater than / Less than (`>`, `<`, `>=`, `<=`)**: Compares values.
  ```javascript
  console.log(5 > 3); // Output: true
  console.log(5 < 3); // Output: false
  ```
---

### Conditional Statements
- **if, else, else if**: Executes code based on conditions.
  ```javascript
  let age = 18;
  if (age < 18) {
    console.log("Minor");
  } else if (age === 18) {
    console.log("Just turned adult");
  } else {
    console.log("Adult");
  }
  ```
---
- **switch**: Executes code based on different cases.
  ```javascript
  let fruit = "apple";
  switch (fruit) {
    case "banana":
      console.log("Banana is yellow");
      break;
    case "apple":
      console.log("Apple is red");
      break;
    default:
      console.log("Unknown fruit");
  }
  ```
---
- **Ternary Operator**: Short-hand for `if-else` statements.
  ```javascript
  let age = 18;
  let status = age >= 18 ? "Adult" : "Minor";
  console.log(status); // Output: Adult
  ```
---

### Logical Operators

- **AND (`&&`)**: Returns true if both operands are true.
  ```javascript
  let result = true && false; // Output: false
  ```
- **OR (`||`)**: Returns true if at least one operand is true.
  ```javascript
  let result = true || false; // Output: true
  ```
- **NOT (`!`)**: Inverts the boolean value.
  ```javascript
  let result = !true; // Output: false
  ```
---
- **Nullish Coalescing (`??`)**: Returns the right-hand operand when the left-hand operand is `null` or `undefined`.
  ```javascript
  let name = null;
  let defaultName = name ?? "Guest";
  console.log(defaultName); // Output: Guest
  ```
---
## Week 7: Loops
---
### Loop Structures

- **for**: Repeats a block of code a specified number of times.
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  ```
---
- **while**: Repeats a block of code as long as a condition is true.
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }
  ```
---
- **do...while**: Similar to `while`, but executes the block of code at least once.
  ```javascript
  let i = 0;
  do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  } while (i < 5)
---

# Javascript Objects
---
```javascript
// curly braces are used signify block of code and/or Object

  // this is a variable of data type objet
const  maroofObject = {
  fullName: "Maroof Shittu",
  age: 50,
  height: '180cm',
  courses: {
    programming: 'Javascript',
    networking: 'Internet Protocol',
  },
  single: false,
  married: true,
  divorced: true,
}
``` 
---

## The Document Object


```javascript
const myWebPage = {
  document: {
    Doctype: 'html',
    Html: {
     Head:{
      Title: 'One Mobile First School'
     },
     Body:{
     Header: {
        Div: {
        }
       }
     }
   }
  }
}

```

---

# The Document Object model

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page in a tree-like format, where each node is an object representing a part of the document, such as an element, attribute, or text.

Here’s a simple analogy: Imagine a web page is like a family tree. The DOM is the family tree diagram that shows how all the family members (elements) are related to each other.

---

### Key Concepts of the DOM

1. **Document Object**: This is the root of the DOM tree. It represents the entire HTML document.
2. **Elements**: These are the nodes in the DOM tree. Each HTML tag (like `<div>`, `<p>`, `<a>`) is an element.
3. **Attributes**: These are properties of elements, such as `id`, `class`, or `src`.
4. **Text**: The actual text inside an element is also a node in the DOM.

---

### How the DOM Works

When a web page loads, the browser creates a DOM of the page. JavaScript can then interact with the DOM to manipulate the content, structure, and style of the web page dynamically.

---

### Example

Here's a simple HTML snippet:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1 id="header">Welcome to My Web Page</h1>
    <p class="intro">This is a paragraph.</p>
</body>
</html>
```

In the DOM, this would be represented as a tree with the `document` object at the top, containing `html`, which contains `head` and `body`, and so on.

---

### Accessing and Manipulating the DOM

You can use JavaScript to access and manipulate the DOM. For example:

```javascript
// Accessing an element by its ID
const header = document.getElementById('header');

// Changing the content of the element
```

In this example, we accessed the `<h1>` element with the ID `header` and changed its content to "Hello, World!".

---

### Why the DOM is Important

The DOM is crucial because it allows developers to create dynamic and interactive web pages. By manipulating the DOM, you can update the content, structure, and style of a web page in response to user actions, making the web experience more engaging.

---

## Working with the DOM

- **Selecting Elements:** getElementById, querySelector
- **Manipulating Elements:** innerHTML, style, classList
- **Events:** addEventListener

---

### Selecting Elements

---

#### `getElementById`
This method selects an element by its unique ID.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <h1 id="header">Hello, World!</h1>
    <script>
        const header = document.getElementById('header');
        console.log(header); // Outputs: <h1 id="header">Hello, World!</h1>
    </script>
</body>
</html>
```

---

#### `querySelector`
This method selects the first element that matches a CSS selector.

---

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <p class="intro">This is an introduction.</p>
    <p class="intro">This is another introduction.</p>
    <script>
        const firstIntro = document.querySelector('.intro');
        console.log(firstIntro); // Outputs: <p class="intro">This is an introduction.</p>
    </script>
</body>
</html>
```

---

### Manipulating Elements

---

#### `innerHTML`
This property allows you to change the HTML content of an element.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <div id="content">Original Content</div>
    <script>
        const content = document.getElementById('content');
        content.innerHTML = 'Updated Content';
        console.log(content.innerHTML); // Outputs: Updated Content
    </script>
</body>
</html>
```
---

#### `style`
This property allows you to change the CSS styles of an element.

---

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <p id="text">Styled Text</p>
    <script>
        const text = document.getElementById('text');
        text.style.color = 'blue';
        text.style.fontSize = '20px';
        console.log(text.style.color); // Outputs: blue
    </script>
</body>
</html>
```

---

#### `classList`
This property allows you to add, remove, and toggle CSS classes on an element.

---

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <p id="text">Class List Example</p>
    <script>
        const text = document.getElementById('text');
        text.classList.add('highlight');
        console.log(text.classList); // Outputs: DOMTokenList ["highlight"]
    </script>
</body>
</html>
```
---

### Events

---
#### `addEventListener`
This method allows you to attach an event handler to an element.

---

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <button id="myButton">Click Me!</button>
    <script>
        const button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
```

In this example, when the button is clicked, an alert box will appear with the message "Button was clicked!".

---


