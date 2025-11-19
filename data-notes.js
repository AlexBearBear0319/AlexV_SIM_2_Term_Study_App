/* ==========================================================================
   DETAILED NOTES DATA - Comprehensive Study Materials
   ========================================================================== */

const notesData = {
    "CSIT121": [
        {
            title: "L3: Classes & Objects",
            summary: "The foundation of OOP. Learn how to define blueprints (classes) and create instances (objects).",
            content: `
                <h4>1. Defining a Class</h4>
                <p>Use the <code>class</code> keyword. Class names should be <b>Capitalized</b> (PascalCase).</p>
                <pre>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y</pre>
                
                <h4>2. The <code>__init__</code> Method</h4>
                <p>This is the <b>Constructor</b>. It runs automatically when you create a new object.</p>
                <p><code>self</code> refers to the specific object being created/accessed.</p>

                <h4>3. Class vs Instance Variables</h4>
                <ul>
                    <li><b>Instance Variables:</b> Defined inside methods using <code>self</code>. Unique to each object.</li>
                    <li><b>Class Variables:</b> Defined outside methods (at class level). Shared by ALL instances.</li>
                </ul>
                <pre>class Student:
    school = "UOW"  # Class variable
    
    def __init__(self, name):
        self.name = name  # Instance variable</pre>
                
                <h4>4. Special Methods (Magic Methods)</h4>
                <ul>
                    <li><code>__str__(self)</code>: Returns human-readable string (for print statements).</li>
                    <li><code>__repr__(self)</code>: Returns unambiguous representation (for debugging).</li>
                    <li><code>__eq__(self, other)</code>: Defines behavior for the <code>==</code> operator.</li>
                    <li><code>__len__(self)</code>: Defines behavior for <code>len()</code> function.</li>
                    <li><code>__add__(self, other)</code>: Defines behavior for <code>+</code> operator.</li>
                </ul>

                <h4>5. Public vs Private Members</h4>
                <ul>
                    <li><b>Public:</b> <code>self.name</code> - accessible everywhere.</li>
                    <li><b>Protected:</b> <code>self._name</code> - convention only, still accessible.</li>
                    <li><b>Private:</b> <code>self.__name</code> - name mangling applied, harder to access.</li>
                </ul>
            `
        },
        {
            title: "L4: Modules & Packages",
            summary: "Organizing code into reusable files and folders.",
            content: `
                <h4>1. Modules vs Packages</h4>
                <ul>
                    <li><b>Module:</b> A single Python file (e.g., <code>math.py</code>). Import with <code>import math</code>.</li>
                    <li><b>Package:</b> A folder containing modules and a special <code>__init__.py</code> file.</li>
                </ul>

                <h4>2. Importing Syntax</h4>
                <pre>import math             # Usage: math.sqrt(4)
from math import sqrt   # Usage: sqrt(4)
import numpy as np      # Usage: np.array([])</pre>

                <h4>3. The <code>__name__</code> Variable</h4>
                <p>This is crucial for code that can be run as a script OR imported.</p>
                <pre>def main():
    print("Running main code")

if __name__ == "__main__":
    # This runs ONLY if you execute this file directly.
    # It does NOT run if you import this file.
    main()</pre>
            `
        },
        {
            title: "L5: Inheritance & Polymorphism",
            summary: "How to build class hierarchies, reuse code efficiently, and implement polymorphic behavior.",
            content: `
                <h4>1. Basic Inheritance</h4>
                <p>Create a child class by passing the parent class in parentheses.</p>
                <pre>class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):
    pass  # Inherits speak() method</pre>
                
                <h4>2. The <code>super()</code> Function</h4>
                <p>Used to call methods from the parent class. <b>Critical</b> in constructors to ensure parent is initialized.</p>
                <pre>class Employee:
    def __init__(self, name):
        self.name = name

class Manager(Employee):
    def __init__(self, name, department):
        super().__init__(name)  # Call parent constructor
        self.department = department</pre>
                
                <h4>3. Method Overriding (Polymorphism)</h4>
                <p>Child classes can override parent methods. Python determines which method to run at runtime based on object type.</p>
                <pre>class Animal:
    def speak(self):
        return "Generic sound"

class Cat(Animal):
    def speak(self):  # Override
        return "Meow"

# Polymorphism in action
animals = [Cat(), Dog()]
for a in animals:
    print(a.speak())  # Calls appropriate method</pre>
                
                <h4>4. Multiple Inheritance</h4>
                <p>Python supports inheriting from multiple parent classes.</p>
                <pre>class A:
    pass
class B:
    pass
class C(A, B):  # Inherits from both A and B
    pass</pre>
                
                <h4>5. Abstract Base Classes (ABC)</h4>
                <p>Used to enforce a contract. Subclasses <b>MUST</b> implement abstract methods.</p>
                <pre>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass  # Child must implement

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):  # Must implement or error
        return 3.14 * self.radius ** 2</pre>
                
                <h4>6. <code>isinstance()</code> and <code>issubclass()</code></h4>
                <ul>
                    <li><code>isinstance(obj, Class)</code>: Check if object is instance of class.</li>
                    <li><code>issubclass(Child, Parent)</code>: Check if class is subclass of another.</li>
                </ul>
            `
        },
        {
            title: "L6: Exception Handling",
            summary: "Managing errors gracefully so programs don't crash unexpectedly.",
            content: `
                <h4>1. The Try-Except Block</h4>
                <pre>try:
    # Code that might raise an exception
    x = 1 / 0
except ZeroDivisionError:
    # Code that runs if error happens
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid value!")</pre>
                
                <h4>2. Else & Finally Blocks</h4>
                <ul>
                    <li><code>else:</code> Runs only if NO exception occurs in try block.</li>
                    <li><code>finally:</code> Runs NO MATTER WHAT (even if exception occurs). Good for cleanup.</li>
                </ul>
                <pre>try:
    f = open("file.txt")
    data = f.read()
except FileNotFoundError:
    print("File not found")
else:
    print("File read successfully")
finally:
    f.close()  # Always close the file</pre>

                <h4>3. Raising Exceptions</h4>
                <p>You can manually trigger an error if data is invalid:</p>
                <pre>def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    self.age = age</pre>

                <h4>4. Custom Exceptions</h4>
                <p>Create your own exception classes by inheriting from <code>Exception</code>.</p>
                <pre>class InvalidScoreError(Exception):
    pass

def set_score(score):
    if score < 0 or score > 100:
        raise InvalidScoreError("Score must be 0-100")</pre>

                <h4>5. Exception Hierarchy</h4>
                <ul>
                    <li><b>BaseException:</b> Root of all exceptions.</li>
                    <li><b>Exception:</b> Base for all non-exit exceptions (use this for custom).</li>
                    <li><b>Common:</b> ValueError, TypeError, KeyError, IndexError, AttributeError.</li>
                </ul>
            `
        },
        {
            title: "L7: Properties & Encapsulation",
            summary: "Controlling access to class attributes using getters and setters.",
            content: `
                <h4>1. The Problem Properties Solve</h4>
                <p>Direct attribute access doesn't allow validation or control.</p>
                <pre># BAD - No validation
student.score = -50  # Invalid but allowed!</pre>

                <h4>2. Getters & Setters with @property</h4>
                <p>Python uses the <code>@property</code> decorator to make methods behave like attributes.</p>
                <pre>class Student:
    def __init__(self, score):
        self._score = score  # Protected variable
    
    @property
    def score(self):  # Getter
        return self._score
    
    @score.setter
    def score(self, value):  # Setter
        if value < 0 or value > 100:
            raise ValueError("Score must be 0-100")
        self._score = value

# Usage (looks like attribute access!)
s = Student(85)
print(s.score)    # Calls getter
s.score = 90      # Calls setter (validates)
s.score = -10     # Raises ValueError</pre>

                <h4>3. Read-Only Properties</h4>
                <p>Omit the setter to make property read-only.</p>
                <pre>class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def area(self):  # No setter - read-only
        return 3.14 * self._radius ** 2

c = Circle(5)
print(c.area)  # Works
c.area = 100   # AttributeError!</pre>

                <h4>4. Deleter</h4>
                <p>Use <code>@property.deleter</code> for custom delete behavior.</p>
                <pre>@score.deleter
def score(self):
    print("Deleting score")
    del self._score</pre>
            `
        },
        {
            title: "L8: File I/O & Serialization",
            summary: "Reading, writing, and persisting data to files.",
            content: `
                <h4>1. Opening Files</h4>
                <p>Modes: <code>'r'</code> read, <code>'w'</code> write (overwrites), <code>'a'</code> append, <code>'r+'</code> read/write.</p>
                <pre>f = open("file.txt", "r")
content = f.read()
f.close()</pre>

                <h4>2. Context Managers (with statement)</h4>
                <p><b>BEST PRACTICE:</b> Automatically closes file even if error occurs.</p>
                <pre>with open("file.txt", "r") as f:
    content = f.read()
# File automatically closed here</pre>

                <h4>3. Reading Methods</h4>
                <ul>
                    <li><code>read()</code>: Reads entire file as string.</li>
                    <li><code>readline()</code>: Reads one line at a time.</li>
                    <li><code>readlines()</code>: Reads all lines into a list.</li>
                </ul>

                <h4>4. Writing to Files</h4>
                <pre>with open("output.txt", "w") as f:
    f.write("Hello World\\n")
    f.writelines(["Line 1\\n", "Line 2\\n"])</pre>

                <h4>5. Serialization with Pickle</h4>
                <p>Save Python objects to files (binary format).</p>
                <pre>import pickle

# Save object
with open("data.pkl", "wb") as f:
    pickle.dump(my_object, f)

# Load object
with open("data.pkl", "rb") as f:
    loaded_obj = pickle.load(f)</pre>

                <h4>6. JSON Serialization</h4>
                <p>Human-readable, language-agnostic format.</p>
                <pre>import json

# Save to JSON
data = {"name": "Alice", "age": 25}
with open("data.json", "w") as f:
    json.dump(data, f)

# Load from JSON
with open("data.json", "r") as f:
    loaded = json.load(f)</pre>
            `
        },
        {
            title: "L9: Regular Expressions (Python)",
            summary: "Pattern matching strings using the 're' module.",
            content: `
                <h4>1. The <code>re</code> Module</h4>
                <pre>import re</pre>

                <h4>2. Key Functions</h4>
                <ul>
                    <li><code>re.match(pattern, string)</code>: Checks for a match only at the <b>beginning</b> of the string.</li>
                    <li><code>re.search(pattern, string)</code>: Searches the <b>entire string</b> for the first match.</li>
                    <li><code>re.findall(pattern, string)</code>: Returns a <b>list</b> of all non-overlapping matches.</li>
                </ul>

                <h4>3. Common Patterns</h4>
                <pre>
^      Start of string
$      End of string
.      Any character (except newline)
\\d     Digit (0-9)
\\w     Word char (a-z, A-Z, 0-9, _)
\\s     Whitespace
* Zero or more
+      One or more
?      Zero or one
                </pre>

                <h4>4. Example</h4>
                <pre>
import re

text = "My email is test@email.com"
pattern = r"[\\w.]+@[\\w.]+"

match = re.search(pattern, text)
if match:
    print("Found:", match.group())  # test@email.com
                </pre>
            `
        },
        {
            title: "L10: Matplotlib Visualization",
            summary: "Creating graphs and visualizations for data analysis.",
            content: `
                <h4>1. Basic Setup</h4>
                <p>Import using <code>import matplotlib.pyplot as plt</code>.</p>
                
                <h4>2. Line Plots</h4>
                <pre>import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y, label='Linear', color='blue', marker='o')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('My Graph')
plt.legend()
plt.grid(True)
plt.show()</pre>
                
                <h4>3. Bar Charts</h4>
                <pre>categories = ['A', 'B', 'C']
values = [10, 20, 15]
plt.bar(categories, values, color='green')
plt.show()</pre>

                <h4>4. Scatter Plots</h4>
                <pre>plt.scatter(x, y, s=100, c='red', alpha=0.5)
# s=size, c=color, alpha=transparency
plt.show()</pre>

                <h4>5. Subplots (Multiple Graphs)</h4>
                <pre>fig, (ax1, ax2) = plt.subplots(1, 2)  # 1 row, 2 cols
ax1.plot(x, y)
ax2.bar(categories, values)
plt.show()</pre>

                <h4>6. Customization Options</h4>
                <ul>
                    <li><code>color</code>: 'red', 'blue', '#FF5733' (hex), 'rgb(1,0,0)'.</li>
                    <li><code>linestyle</code>: '-', '--', '-.', ':'.</li>
                    <li><code>marker</code>: 'o', 's', '^', '*', '+'.</li>
                    <li><code>linewidth</code>: Thickness of line.</li>
                </ul>
            `
        },
        {
            title: "L11: Design Patterns",
            summary: "Standard solutions to common software architecture problems.",
            content: `
                <h4>1. Singleton Pattern</h4>
                <p>Ensures a class has only <b>ONE</b> instance (e.g., Database Connection, Logger).</p>
                <pre>class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Both variables reference same instance
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True</pre>
                
                <h4>2. Observer Pattern</h4>
                <p>Defines a subscription mechanism. When one object changes state, all dependents are notified.</p>
                <p><b>Use Case:</b> Event systems, notifications, MVC architecture.</p>
                <pre>class Subject:
    def __init__(self):
        self._observers = []
    
    def attach(self, observer):
        self._observers.append(observer)
    
    def notify(self, message):
        for obs in self._observers:
            obs.update(message)</pre>
                
                <h4>3. Iterator Pattern</h4>
                <p>Provides standard way to traverse a collection using <code>__iter__</code> and <code>__next__</code>.</p>
                <pre>class Counter:
    def __init__(self, max):
        self.max = max
    
    def __iter__(self):
        self.n = 0
        return self
    
    def __next__(self):
        if self.n < self.max:
            result = self.n
            self.n += 1
            return result
        raise StopIteration

for i in Counter(5):
    print(i)  # 0, 1, 2, 3, 4</pre>
                
                <h4>4. Facade Pattern</h4>
                <p>Provides a simple interface to a complex subsystem (hides complexity).</p>
                <p><b>Use Case:</b> Library APIs, framework wrappers.</p>
                
                <h4>5. Factory Pattern</h4>
                <p>Creates objects without specifying exact class. Useful when class to instantiate is determined at runtime.</p>
                <pre>class AnimalFactory:
    @staticmethod
    def create(animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()</pre>
            `
        }
    ],

    "CSIT128": [
        {
            title: "L1 & L2: HTML & CSS Basics",
            summary: "Foundational tags, table structures, and styling rules.",
            content: `
                <h4>1. HTML Structure</h4>
                <p>Root is <code>&lt;html&gt;</code>. Metadata goes in <code>&lt;head&gt;</code>. Content goes in <code>&lt;body&gt;</code>.</p>
                
                <h4>2. Essential Tags</h4>
                <ul>
                    <li><b>Lists:</b> <code>&lt;ul&gt;</code> (bullets) vs <code>&lt;ol&gt;</code> (numbers). Items use <code>&lt;li&gt;</code>.</li>
                    <li><b>Links:</b> <code>&lt;a href="page.html" target="_blank"&gt;</code> (opens in new tab).</li>
                    <li><b>Images:</b> <code>&lt;img src="pic.jpg" alt="Description"&gt;</code> (alt is required for accessibility).</li>
                </ul>

                <h4>3. Tables</h4>
                <pre>&lt;table border="1"&gt;
    &lt;tr&gt; &lt;!-- Row --&gt;
        &lt;th&gt;Header&lt;/th&gt;
        &lt;td colspan="2"&gt;Spans 2 Columns&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>

                <h4>4. CSS Selectors</h4>
                <ul>
                    <li><b>Class (.):</b> <code>.btn { ... }</code> (Multiple elements)</li>
                    <li><b>ID (#):</b> <code>#header { ... }</code> (Unique element)</li>
                    <li><b>Contextual:</b> <code>div p { ... }</code> (All paragraphs inside divs)</li>
                    <li><b>Direct Child:</b> <code>div > p { ... }</code> (Only direct children)</li>
                </ul>
            `
        },
        {
            title: "CSS Priority (Specificity)",
            summary: "Determining which style rule wins when multiple rules apply.",
            content: `
                <h4>1. The Hierarchy (Highest to Lowest)</h4>
                <ol>
                    <li><b>Inline Style</b> (e.g., <code>style="color:red"</code>) - <b>Highest Priority</b></li>
                    <li><b>ID Selector</b> (e.g., <code>#header</code>)</li>
                    <li><b>Class/Attribute/Pseudo-class</b> (e.g., <code>.text</code>, <code>:hover</code>)</li>
                    <li><b>Tag/Element</b> (e.g., <code>p</code>, <code>div</code>) - <b>Lowest Priority</b></li>
                </ol>

                <h4>2. The "Point" System</h4>
                <p>Think of it as a score:</p>
                <ul>
                    <li>Inline: 1000 points</li>
                    <li>ID: 100 points</li>
                    <li>Class: 10 points</li>
                    <li>Tag: 1 point</li>
                </ul>
                <p><b>Example:</b> <code>div#main .content p</code> vs <code>#main p</code></p>
                <ul>
                    <li>Rule A: <code>div#main .content p</code> = 1 Tag + 1 ID + 1 Class + 1 Tag = <b>112 points</b></li>
                    <li>Rule B: <code>#main p</code> = 1 ID + 1 Tag = <b>101 points</b></li>
                    <li><b>Winner:</b> Rule A wins.</li>
                </ul>

                <h4>3. The <code>!important</code> Rule</h4>
                <p>Overrides <b>everything</b>, even inline styles. Use sparingly.</p>
                <pre>p { color: red !important; }</pre>
            `
        },
        {
            title: "L3: HTML Forms",
            summary: "Collecting and submitting user input using various form elements.",
            content: `
                <h4>1. The <code>&lt;form&gt;</code> Tag</h4>
                <p>Main attributes:</p>
                <ul>
                    <li><code>action</code>: URL where form data is sent.</li>
                    <li><code>method</code>: GET (data in URL) or POST (data in body - more secure).</li>
                </ul>
                <pre>&lt;form action="/submit" method="post"&gt;
    &lt;!-- form elements here --&gt;
&lt;/form&gt;</pre>
                
                <h4>2. Input Types</h4>
                <ul>
                    <li><code>type="text"</code>: Standard single-line text box.</li>
                    <li><code>type="password"</code>: Masks characters for security.</li>
                    <li><code>type="email"</code>: Validates email format.</li>
                    <li><code>type="number"</code>: Numeric input with min/max.</li>
                    <li><code>type="radio"</code>: Select ONE from group (must share same <code>name</code>).</li>
                    <li><code>type="checkbox"</code>: Select multiple options independently.</li>
                    <li><code>type="submit"</code>: Button that submits form.</li>
                    <li><code>type="button"</code>: Generic button (no default action).</li>
                </ul>

                <h4>3. Radio Buttons (Single Selection)</h4>
                <pre>&lt;input type="radio" name="gender" value="male"&gt; Male
&lt;input type="radio" name="gender" value="female"&gt; Female</pre>
                <p><b>Key:</b> Same <code>name</code> groups them together.</p>

                <h4>4. Checkboxes (Multiple Selection)</h4>
                <pre>&lt;input type="checkbox" name="interests" value="coding"&gt; Coding
&lt;input type="checkbox" name="interests" value="gaming"&gt; Gaming</pre>

                <h4>5. Dropdown Lists</h4>
                <pre>&lt;select name="country"&gt;
    &lt;option value="au"&gt;Australia&lt;/option&gt;
    &lt;option value="us" selected&gt;USA&lt;/option&gt;
    &lt;option value="uk"&gt;UK&lt;/option&gt;
&lt;/select&gt;</pre>

                <h4>6. Textarea (Multi-line Text)</h4>
                <pre>&lt;textarea name="comments" rows="4" cols="50"&gt;
Default text here
&lt;/textarea&gt;</pre>

                <h4>7. Form Validation Attributes</h4>
                <ul>
                    <li><code>required</code>: Field must be filled.</li>
                    <li><code>minlength</code> / <code>maxlength</code>: Character limits.</li>
                    <li><code>min</code> / <code>max</code>: Numeric limits.</li>
                    <li><code>pattern</code>: Regex validation pattern.</li>
                </ul>
            `
        },
        {
            title: "L4: CSS Fundamentals",
            summary: "Styling HTML elements with selectors, properties, and the box model.",
            content: `
                <h4>1. CSS Selectors</h4>
                <ul>
                    <li><b>Tag:</b> <code>p { color: blue; }</code> - Selects all &lt;p&gt; tags.</li>
                    <li><b>Class:</b> <code>.highlight { color: yellow; }</code> - Select by class attribute.</li>
                    <li><b>ID:</b> <code>#header { font-size: 24px; }</code> - Select by id (unique).</li>
                    <li><b>Descendant:</b> <code>div p { }</code> - All &lt;p&gt; inside &lt;div&gt;.</li>
                    <li><b>Child:</b> <code>div > p { }</code> - Direct children only.</li>
                    <li><b>Adjacent Sibling:</b> <code>h1 + p { }</code> - First &lt;p&gt; after &lt;h1&gt;.</li>
                </ul>

                <h4>2. Specificity Rules (Most Important!)</h4>
                <p>When multiple rules apply, specificity determines winner:</p>
                <ol>
                    <li><b>Inline styles:</b> <code>style="..."</code> (1000 points)</li>
                    <li><b>ID selectors:</b> <code>#id</code> (100 points)</li>
                    <li><b>Class/Attribute selectors:</b> <code>.class</code> (10 points)</li>
                    <li><b>Tag selectors:</b> <code>p</code> (1 point)</li>
                </ol>
                <p><b>!important</b> overrides everything (but avoid it!).</p>

                <h4>3. Box Model</h4>
                <p>Every element is a box with 4 parts (inside to outside):</p>
                <ul>
                    <li><b>Content:</b> The actual content (text, image).</li>
                    <li><b>Padding:</b> Space between content and border.</li>
                    <li><b>Border:</b> The border line.</li>
                    <li><b>Margin:</b> Space outside the border.</li>
                </ul>

                <h4>4. Display Property</h4>
                <ul>
                    <li><code>block</code>: Takes full width, starts new line (div, p, h1).</li>
                    <li><code>inline</code>: Only as wide as content, no line break (span, a).</li>
                    <li><code>inline-block</code>: Hybrid - inline but accepts width/height.</li>
                    <li><code>none</code>: Hides element completely.</li>
                </ul>

                <h4>5. Position Property</h4>
                <ul>
                    <li><code>static</code>: Normal flow (default).</li>
                    <li><code>relative</code>: Relative to normal position.</li>
                    <li><code>absolute</code>: Relative to nearest positioned ancestor.</li>
                    <li><code>fixed</code>: Relative to viewport (stays on screen when scrolling).</li>
                </ul>
            `
        },
        {
            title: "L5: JavaScript Validation & Regex",
            summary: "Checking data on client side before sending to server using regular expressions.",
            content: `
                <h4>1. Form Validation Basics</h4>
                <pre>&lt;form onsubmit="return validateForm()"&gt;
    &lt;input type="text" id="username"&gt;
    &lt;input type="submit"&gt;
&lt;/form&gt;

&lt;script&gt;
function validateForm() {
    let name = document.getElementById("username").value;
    if (name == "") {
        alert("Name cannot be empty!");
        return false;  // Prevents submission
    }
    return true;  // Allows submission
}
&lt;/script&gt;</pre>

                <h4>2. Regular Expressions (Regex)</h4>
                <p>Patterns to match character combinations.</p>
                <table border="1" style="width:100%; margin:10px 0;">
                    <tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr>
                    <tr><td>^</td><td>Start of string</td><td>^A matches "Apple"</td></tr>
                    <tr><td>$</td><td>End of string</td><td>t$ matches "cat"</td></tr>
                    <tr><td>\\d</td><td>Any digit (0-9)</td><td>\\d{3} matches "123"</td></tr>
                    <tr><td>\\w</td><td>Word character (a-z, A-Z, 0-9, _)</td><td>\\w+ matches "hello"</td></tr>
                    <tr><td>\\s</td><td>Whitespace</td><td>\\s matches space</td></tr>
                    <tr><td>[A-Z]</td><td>Any uppercase letter</td><td>[A-Z]{2} matches "AB"</td></tr>
                    <tr><td>[0-9]</td><td>Any digit</td><td>[0-9]{4} matches "2024"</td></tr>
                    <tr><td>.</td><td>Any character</td><td>a.c matches "abc", "a1c"</td></tr>
                    <tr><td>+</td><td>One or more</td><td>\\d+ matches "123"</td></tr>
                    <tr><td>*</td><td>Zero or more</td><td>\\d* matches "" or "123"</td></tr>
                    <tr><td>?</td><td>Zero or one</td><td>\\d? matches "" or "1"</td></tr>
                    <tr><td>{n}</td><td>Exactly n times</td><td>\\d{3} matches "123"</td></tr>
                    <tr><td>{n,m}</td><td>Between n and m times</td><td>\\d{2,4} matches "12" to "1234"</td></tr>
                </table>

                <h4>3. Common Patterns</h4>
                <ul>
                    <li><b>Email:</b> <code>^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$</code></li>
                    <li><b>Phone (AU):</b> <code>^04\\d{8}$</code> (starts with 04, then 8 digits)</li>
                    <li><b>Postcode (AU):</b> <code>^\\d{4}$</code> (exactly 4 digits)</li>
                    <li><b>Student ID:</b> <code>^[A-Z]{2}\\d{4}$</code> (2 letters + 4 digits)</li>
                </ul>

                <h4>4. Using Regex in JavaScript</h4>
                <pre>function validateCode() {
    let code = document.getElementById("code").value;
    let pattern = /^[A-Z]{2}\\d{3}$/;  // AB123 format
    
    if (!pattern.test(code)) {
        alert("Invalid code format!");
        return false;
    }
    return true;
}</pre>

                <h4>5. Regex Methods</h4>
                <ul>
                    <li><code>test()</code>: Returns true/false if pattern matches.</li>
                    <li><code>match()</code>: Returns array of matches or null.</li>
                    <li><code>replace()</code>: Replaces matched pattern with string.</li>
                </ul>
            `
        },
        {
            title: "L6: Events & DOM Manipulation",
            summary: "Making pages interactive using the Document Object Model and event handlers.",
            content: `
                <h4>1. Accessing DOM Elements</h4>
                <pre>// By ID (most common)
let element = document.getElementById("myId");

// By class name (returns HTMLCollection)
let elements = document.getElementsByClassName("myClass");

// By tag name
let paragraphs = document.getElementsByTagName("p");

// Modern selectors
let element = document.querySelector("#myId");  // First match
let elements = document.querySelectorAll(".myClass");  // All matches</pre>

                <h4>2. Modifying Content</h4>
                <pre>// Change text content
element.textContent = "New text";

// Change HTML (including tags)
element.innerHTML = "&lt;b&gt;Bold text&lt;/b&gt;";

// Change attribute
element.setAttribute("src", "image.jpg");
element.className = "newClass";

// Change style
element.style.color = "red";
element.style.display = "none";</pre>

                <h4>3. Common Events</h4>
                <table border="1" style="width:100%; margin:10px 0;">
                    <tr><th>Event</th><th>Trigger</th></tr>
                    <tr><td>onclick</td><td>User clicks element</td></tr>
                    <tr><td>ondblclick</td><td>User double-clicks</td></tr>
                    <tr><td>onmouseover</td><td>Mouse enters element</td></tr>
                    <tr><td>onmouseout</td><td>Mouse leaves element</td></tr>
                    <tr><td>onchange</td><td>Value of input changes</td></tr>
                    <tr><td>onkeydown</td><td>Key is pressed down</td></tr>
                    <tr><td>onkeyup</td><td>Key is released</td></tr>
                    <tr><td>onload</td><td>Page finishes loading</td></tr>
                    <tr><td>onsubmit</td><td>Form is submitted</td></tr>
                </table>

                <h4>4. Event Handler Methods</h4>
                <pre>// Method 1: Inline HTML
&lt;button onclick="myFunction()"&gt;Click&lt;/button&gt;

// Method 2: DOM property
element.onclick = function() {
    alert("Clicked!");
};

// Method 3: addEventListener (BEST)
element.addEventListener("click", function() {
    alert("Clicked!");
});</pre>

                <h4>5. Timers</h4>
                <pre>// Execute once after delay
let timeoutID = setTimeout(function() {
    console.log("Delayed");
}, 2000);  // 2 seconds

// Execute repeatedly
let intervalID = setInterval(function() {
    console.log("Repeating");
}, 1000);  // Every 1 second

// Stop timers
clearTimeout(timeoutID);
clearInterval(intervalID);</pre>

                <h4>6. Creating & Removing Elements</h4>
                <pre>// Create new element
let newDiv = document.createElement("div");
newDiv.textContent = "New content";

// Append to parent
document.body.appendChild(newDiv);

// Remove element
element.remove();  // Modern way
parent.removeChild(element);  // Old way</pre>
            `
        },
        {
            title: "L7: XML, DTD & XSD",
            summary: "Structuring and validating data using XML and schema definitions.",
            content: `
                <h4>1. XML Rules (CRITICAL!)</h4>
                <ul>
                    <li>Must have exactly <b>one root element</b>.</li>
                    <li>All tags must <b>close</b> (self-close if empty: <code>&lt;tag /&gt;</code>).</li>
                    <li>Tags are <b>case-sensitive</b> (<code>&lt;Name&gt;</code> ≠ <code>&lt;name&gt;</code>).</li>
                    <li>Attributes must have <b>quotes</b> (single or double).</li>
                    <li>Proper <b>nesting</b> required (no overlap).</li>
                    <li>Special characters must be <b>escaped</b>: &amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos;</li>
                </ul>

                <h4>2. Valid XML Example</h4>
                <pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;library&gt;
    &lt;book id="1"&gt;
        &lt;title&gt;Python Basics&lt;/title&gt;
        &lt;author&gt;John Smith&lt;/author&gt;
        &lt;year&gt;2023&lt;/year&gt;
    &lt;/book&gt;
    &lt;book id="2"&gt;
        &lt;title&gt;Web Design&lt;/title&gt;
        &lt;author&gt;Jane Doe&lt;/author&gt;
        &lt;year&gt;2024&lt;/year&gt;
    &lt;/book&gt;
&lt;/library&gt;</pre>

                <h4>3. DTD (Document Type Definition)</h4>
                <p>Defines legal structure and elements. Old but still used.</p>
                <pre>&lt;!DOCTYPE library [
    &lt;!ELEMENT library (book+)&gt;
    &lt;!ELEMENT book (title, author, year)&gt;
    &lt;!ELEMENT title (#PCDATA)&gt;
    &lt;!ELEMENT author (#PCDATA)&gt;
    &lt;!ELEMENT year (#PCDATA)&gt;
    &lt;!ATTLIST book id CDATA #REQUIRED&gt;
]&gt;</pre>
                <p><b>Symbols:</b></p>
                <ul>
                    <li><code>+</code> : One or more</li>
                    <li><code>*</code> : Zero or more</li>
                    <li><code>?</code> : Zero or one (optional)</li>
                    <li><code>#PCDATA</code> : Parsed character data (text)</li>
                </ul>

                <h4>4. XSD (XML Schema Definition)</h4>
                <p>More powerful than DTD. Written in XML. Supports data types.</p>
                <pre>&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
    &lt;xs:element name="library"&gt;
        &lt;xs:complexType&gt;
            &lt;xs:sequence&gt;
                &lt;xs:element name="book" maxOccurs="unbounded"&gt;
                    &lt;xs:complexType&gt;
                        &lt;xs:sequence&gt;
                            &lt;xs:element name="title" type="xs:string"/&gt;
                            &lt;xs:element name="author" type="xs:string"/&gt;
                            &lt;xs:element name="year" type="xs:integer"/&gt;
                        &lt;/xs:sequence&gt;
                        &lt;xs:attribute name="id" type="xs:integer" use="required"/&gt;
                    &lt;/xs:complexType&gt;
                &lt;/xs:element&gt;
            &lt;/xs:sequence&gt;
        &lt;/xs:complexType&gt;
    &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>

                <h4>5. Common XSD Data Types</h4>
                <ul>
                    <li><code>xs:string</code> : Text</li>
                    <li><code>xs:integer</code> : Whole number</li>
                    <li><code>xs:decimal</code> : Decimal number</li>
                    <li><code>xs:boolean</code> : true/false</li>
                    <li><code>xs:date</code> : Date (YYYY-MM-DD)</li>
                </ul>
            `
        },
        {
            title: "L8: XSLT Transformations",
            summary: "Transforming XML data into HTML or other formats for display.",
            content: `
                <h4>1. What is XSLT?</h4>
                <p><b>XSL Transformations</b> converts XML to HTML, text, or other XML formats.</p>

                <h4>2. Basic Structure</h4>
                <pre>&lt;?xml version="1.0"?&gt;
&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;

&lt;xsl:template match="/"&gt;
    &lt;html&gt;
    &lt;body&gt;
        &lt;!-- Transformation logic here --&gt;
    &lt;/body&gt;
    &lt;/html&gt;
&lt;/xsl:template&gt;

&lt;/xsl:stylesheet&gt;</pre>

                <h4>3. Key XSLT Elements</h4>
                <ul>
                    <li><code>&lt;xsl:template match="path"&gt;</code> : Defines template for matching nodes.</li>
                    <li><code>&lt;xsl:value-of select="node"&gt;</code> : Extracts and outputs text content.</li>
                    <li><code>&lt;xsl:for-each select="path"&gt;</code> : Loops through matching nodes.</li>
                    <li><code>&lt;xsl:sort select="element"&gt;</code> : Sorts output.</li>
                    <li><code>&lt;xsl:if test="condition"&gt;</code> : Conditional rendering.</li>
                    <li><code>&lt;xsl:choose&gt;</code> + <code>&lt;xsl:when&gt;</code> + <code>&lt;xsl:otherwise&gt;</code> : Multi-condition.</li>
                </ul>

                <h4>4. Complete Example</h4>
                <p><b>XML:</b></p>
                <pre>&lt;library&gt;
    &lt;book&gt;
        &lt;title&gt;Python Guide&lt;/title&gt;
        &lt;price&gt;29.99&lt;/price&gt;
    &lt;/book&gt;
    &lt;book&gt;
        &lt;title&gt;Web Design&lt;/title&gt;
        &lt;price&gt;39.99&lt;/price&gt;
    &lt;/book&gt;
&lt;/library&gt;</pre>

                <p><b>XSLT:</b></p>
                <pre>&lt;xsl:template match="/"&gt;
    &lt;html&gt;
    &lt;body&gt;
        &lt;h1&gt;Book List&lt;/h1&gt;
        &lt;table border="1"&gt;
            &lt;tr&gt;&lt;th&gt;Title&lt;/th&gt;&lt;th&gt;Price&lt;/th&gt;&lt;/tr&gt;
            &lt;xsl:for-each select="library/book"&gt;
                &lt;xsl:sort select="price" data-type="number"/&gt;
                &lt;tr&gt;
                    &lt;td&gt;&lt;xsl:value-of select="title"/&gt;&lt;/td&gt;
                    &lt;td&gt;$&lt;xsl:value-of select="price"/&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/xsl:for-each&gt;
        &lt;/table&gt;
    &lt;/body&gt;
    &lt;/html&gt;
&lt;/xsl:template&gt;</pre>

                <h4>5. Conditional Example</h4>
                <pre>&lt;xsl:for-each select="library/book"&gt;
    &lt;xsl:if test="price &amp;gt; 30"&gt;
        &lt;p style="color:red;"&gt;
            &lt;xsl:value-of select="title"/&gt; - Expensive!
        &lt;/p&gt;
    &lt;/xsl:if&gt;
&lt;/xsl:for-each&gt;</pre>
            `
        },
        {
            title: "L9: JSON & AJAX",
            summary: "Asynchronous data exchange and JSON format for modern web applications.",
            content: `
                <h4>1. JSON Format</h4>
                <p><b>JavaScript Object Notation</b> - lightweight data format.</p>
                <p><b>Rules:</b></p>
                <ul>
                    <li>Keys and strings use <b>double quotes</b> (not single!).</li>
                    <li>Objects use { }, arrays use [ ].</li>
                    <li>No trailing commas.</li>
                    <li>No comments allowed.</li>
                </ul>

                <h4>2. Valid JSON Examples</h4>
                <pre>// Object
{
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "courses": ["CSIT121", "CSIT128"]
}

// Array of objects
[
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
]</pre>

                <h4>3. JSON Methods in JavaScript</h4>
                <pre>// Convert Object to JSON string
let obj = {name: "Alice", age: 25};
let jsonString = JSON.stringify(obj);
// Result: '{"name":"Alice","age":25}'

// Convert JSON string to Object
let parsed = JSON.parse(jsonString);
console.log(parsed.name);  // "Alice"</pre>

                <h4>4. AJAX (Asynchronous JavaScript and XML)</h4>
                <p>Allows updating page without full reload.</p>

                <h4>5. XMLHttpRequest (Traditional Way)</h4>
                <pre>function loadData() {
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
        }
    };
    
    xhr.open("GET", "data.json", true);
    xhr.send();
}</pre>

                <h4>6. Fetch API (Modern Way)</h4>
                <pre>fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Update DOM here
    })
    .catch(error => console.error("Error:", error));</pre>

                <h4>7. ReadyState Values</h4>
                <ul>
                    <li><b>0:</b> UNSENT - Request not initialized</li>
                    <li><b>1:</b> OPENED - Connection established</li>
                    <li><b>2:</b> HEADERS_RECEIVED - Request received</li>
                    <li><b>3:</b> LOADING - Processing request</li>
                    <li><b>4:</b> DONE - Request complete</li>
                </ul>

                <h4>8. Status Codes</h4>
                <ul>
                    <li><b>200:</b> OK - Success</li>
                    <li><b>404:</b> Not Found</li>
                    <li><b>500:</b> Internal Server Error</li>
                </ul>
            `
        },
        {
            title: "L10: HTML5 Canvas & Drag-Drop",
            summary: "Advanced graphics rendering and interactive drag-and-drop functionality.",
            content: `
                <h4>1. Canvas Setup</h4>
                <pre>&lt;canvas id="myCanvas" width="500" height="400"&gt;&lt;/canvas&gt;

&lt;script&gt;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
&lt;/script&gt;</pre>

                <h4>2. Drawing Shapes</h4>
                <pre>// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(x, y, width, height);  // Filled
ctx.strokeRect(x, y, width, height);  // Outline only

// Circle
ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fill();  // or ctx.stroke();

// Line
ctx.beginPath();
ctx.moveTo(x1, y1);  // Start point
ctx.lineTo(x2, y2);  // End point
ctx.stroke();

// Text
ctx.font = "30px Arial";
ctx.fillText("Hello", x, y);</pre>

                <h4>3. Paths and Curves</h4>
                <pre>ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.closePath();  // Connects back to start
ctx.stroke();</pre>

                <h4>4. Colors and Styles</h4>
                <pre>ctx.fillStyle = "blue";  // Fill color
ctx.strokeStyle = "#FF5733";  // Stroke color
ctx.lineWidth = 5;  // Line thickness
ctx.globalAlpha = 0.5;  // Transparency (0-1)</pre>

                <h4>5. Drag and Drop API</h4>
                <p><b>Step 1:</b> Make element draggable</p>
                <pre>&lt;img id="drag1" src="image.jpg" draggable="true" ondragstart="drag(event)"&gt;</pre>

                <p><b>Step 2:</b> Create drop zone</p>
                <pre>&lt;div id="drop1" ondrop="drop(event)" ondragover="allowDrop(event)"&gt;&lt;/div&gt;</pre>

                <p><b>Step 3:</b> JavaScript handlers</p>
                <pre>function allowDrop(ev) {
    ev.preventDefault();  // MUST prevent default to allow drop
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data);
    ev.target.appendChild(element);  // Move element
}</pre>

                <h4>6. DataTransfer Methods</h4>
                <ul>
                    <li><code>setData(type, value)</code> : Store data during drag.</li>
                    <li><code>getData(type)</code> : Retrieve data on drop.</li>
                    <li><code>clearData()</code> : Clear stored data.</li>
                </ul>
            `
        }
    ]
};
