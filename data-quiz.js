/* ==========================================================================
   QUIZ QUESTIONS DATA - Comprehensive Question Bank
   ========================================================================== */

const quizData = {
    "CSIT121": [
        // ===== SECTION 1: Classes & Objects (15 questions) =====
        {
            q: "Which method is automatically called when creating a new object?",
            options: ["__new__", "__init__", "__create__", "__start__"],
            a: 1,
            explain: "__init__ is the constructor method in Python that initializes new instances."
        },
        {
            q: "What does 'self' represent in a class method?",
            options: ["The class itself", "The instance being accessed", "Global scope", "The parent class"],
            a: 1,
            explain: "Self refers to the specific object instance that the method is called on."
        },
        {
            q: "How do you define a private variable in Python?",
            options: ["_var", "__var", "private var", "var_"],
            a: 1,
            explain: "Double underscore (__var) triggers name mangling, making it private to the class."
        },
        {
            q: "Which method converts an object to a user-readable string?",
            options: ["__text__", "__string__", "__str__", "__repr__"],
            a: 2,
            explain: "__str__ returns the string representation intended for end users."
        },
        {
            q: "Class variables are shared by...",
            options: ["Only one instance", "All instances of the class", "Only subclasses", "No instances"],
            a: 1,
            explain: "Class variables belong to the class itself and are shared across all instances."
        },
        {
            q: "What is the difference between __str__ and __repr__?",
            options: ["No difference", "__str__ for users, __repr__ for developers", "__repr__ for users, __str__ for developers", "They are the same method"],
            a: 1,
            explain: "__str__ is user-friendly, __repr__ should be unambiguous and reproduce the object."
        },
        {
            q: "How do you create an instance variable?",
            options: ["var = value", "self.var = value", "class.var = value", "@var = value"],
            a: 1,
            explain: "Instance variables are created using self.variable_name inside methods."
        },
        {
            q: "Which method defines equality comparison with ==?",
            options: ["__eq__", "__equal__", "__cmp__", "__compare__"],
            a: 0,
            explain: "__eq__(self, other) defines behavior for the == operator."
        },
        {
            q: "What does the __len__ method do?",
            options: ["Calculates object size", "Defines behavior for len() function", "Counts methods", "Returns memory usage"],
            a: 1,
            explain: "__len__ allows objects to work with Python's len() function."
        },
        {
            q: "Can you access private variables outside the class?",
            options: ["No, never", "Yes, but discouraged", "Only in subclasses", "Only with special syntax"],
            a: 3,
            explain: "Private variables can be accessed with _ClassName__variable syntax (name mangling)."
        },
        {
            q: "What is a class method decorator?",
            options: ["@static", "@classmethod", "@method", "@class"],
            a: 1,
            explain: "@classmethod decorator defines methods that receive the class as first argument (cls)."
        },
        {
            q: "What is the purpose of @staticmethod?",
            options: ["Makes method private", "Method doesn't need self or cls", "Makes method faster", "Prevents inheritance"],
            a: 1,
            explain: "@staticmethod creates methods that don't access instance or class data."
        },
        {
            q: "How do you delete an object in Python?",
            options: ["delete obj", "del obj", "remove obj", "obj.delete()"],
            a: 1,
            explain: "The 'del' keyword removes the object reference."
        },
        {
            q: "What does __add__(self, other) define?",
            options: ["Addition method", "Behavior for + operator", "Concatenation", "All of the above"],
            a: 3,
            explain: "__add__ defines how objects behave with the + operator."
        },
        {
            q: "Can a class have multiple constructors?",
            options: ["Yes, unlimited", "No, only one __init__", "Yes, using @classmethod", "Yes, using overloading"],
            a: 2,
            explain: "Python has one __init__, but you can use @classmethod to create alternative constructors."
        },

        // ===== SECTION 2: Inheritance & Polymorphism (15 questions) =====
        {
            q: "How do you inherit from a parent class?",
            options: ["class Child(Parent):", "class Child extends Parent:", "class Child implements Parent:", "class Child <- Parent:"],
            a: 0,
            explain: "Python uses parentheses after the class name to specify inheritance."
        },
        {
            q: "What function calls a parent class method?",
            options: ["parent()", "super()", "base()", "inherit()"],
            a: 1,
            explain: "super() returns a proxy object that delegates method calls to the parent class."
        },
        {
            q: "Can a Python class inherit from multiple parents?",
            options: ["Yes", "No", "Only with interfaces", "Only abstract classes"],
            a: 0,
            explain: "Python supports multiple inheritance: class C(A, B)."
        },
        {
            q: "What is method overriding?",
            options: ["Deleting a method", "Calling parent method", "Redefining parent method in child", "Creating multiple methods"],
            a: 2,
            explain: "Overriding allows a child class to provide specific implementation of a parent method."
        },
        {
            q: "Which function checks if an object is an instance of a class?",
            options: ["isclass()", "type()", "isinstance()", "check()"],
            a: 2,
            explain: "isinstance(obj, Class) returns True if obj is an instance of Class."
        },
        {
            q: "What is polymorphism?",
            options: ["Many classes", "Many forms", "Many methods with same name", "Multiple inheritance"],
            a: 2,
            explain: "Polymorphism allows different classes to have methods with same name but different behavior."
        },
        {
            q: "In multiple inheritance class C(A, B), which parent is checked first?",
            options: ["B", "A", "Random", "Both simultaneously"],
            a: 1,
            explain: "Python follows Method Resolution Order (MRO), checking left to right: A, then B."
        },
        {
            q: "Can child classes access parent's private variables?",
            options: ["Yes, always", "No, never", "Only with super()", "Through name mangling"],
            a: 3,
            explain: "Private variables are name-mangled but still accessible with special syntax."
        },
        {
            q: "What does issubclass(Child, Parent) check?",
            options: ["If Child inherits from Parent", "If objects are related", "If classes are equal", "If Child is abstract"],
            a: 0,
            explain: "issubclass() checks inheritance relationship between classes."
        },
        {
            q: "What happens if child __init__ doesn't call super().__init__()?",
            options: ["Error occurs", "Parent not initialized", "Nothing happens", "Automatic call"],
            a: 1,
            explain: "Parent constructor won't run, potentially leaving parent attributes uninitialized."
        },
        {
            q: "Can you override class variables in child classes?",
            options: ["No", "Yes", "Only if private", "Only with @override"],
            a: 1,
            explain: "Child classes can override parent class variables by redefining them."
        },
        {
            q: "What is the diamond problem?",
            options: ["Syntax error", "Multiple inheritance ambiguity", "Memory issue", "Performance problem"],
            a: 1,
            explain: "Diamond problem occurs when a class inherits from two classes with common ancestor."
        },
        {
            q: "How does Python resolve the diamond problem?",
            options: ["It doesn't", "Method Resolution Order (MRO)", "Random selection", "Always uses first parent"],
            a: 1,
            explain: "Python uses C3 linearization algorithm to determine MRO."
        },
        {
            q: "What does super() return?",
            options: ["Parent class", "Proxy object", "Parent instance", "Method reference"],
            a: 1,
            explain: "super() returns a proxy object that delegates calls to parent/sibling classes."
        },
        {
            q: "Can abstract methods have implementation?",
            options: ["No, never", "Yes, optional", "Only if marked", "Only in Python 3"],
            a: 1,
            explain: "Abstract methods can have default implementation that children can call via super()."
        },

        // ===== SECTION 3: Exception Handling (12 questions) =====
        {
            q: "Which keyword catches exceptions in Python?",
            options: ["catch", "except", "error", "handle"],
            a: 1,
            explain: "Python uses try...except blocks for exception handling."
        },
        {
            q: "When does the 'finally' block execute?",
            options: ["Only on success", "Only on error", "Always", "Never"],
            a: 2,
            explain: "Finally block runs regardless of whether an exception occurred."
        },
        {
            q: "How do you manually trigger an exception?",
            options: ["throw", "trigger", "raise", "error"],
            a: 2,
            explain: "The 'raise' keyword triggers an exception."
        },
        {
            q: "Which block runs only if NO error occurs?",
            options: ["then", "success", "else", "continue"],
            a: 2,
            explain: "The 'else' block in try-except runs only when no exception is raised."
        },
        {
            q: "What is the base class for all built-in exceptions?",
            options: ["Error", "BaseException", "Exception", "StandardError"],
            a: 1,
            explain: "BaseException is the root of Python's exception hierarchy."
        },
        {
            q: "Which exception is raised for division by zero?",
            options: ["ValueError", "ZeroDivisionError", "ArithmeticError", "MathError"],
            a: 1,
            explain: "ZeroDivisionError is raised when dividing by zero."
        },
        {
            q: "Can you catch multiple exception types in one except block?",
            options: ["No", "Yes, using tuple", "Only related exceptions", "Only with 'or'"],
            a: 1,
            explain: "Use except (TypeError, ValueError) to catch multiple types."
        },
        {
            q: "What does 'except:' without exception type catch?",
            options: ["Nothing", "All exceptions", "Only RuntimeError", "Syntax errors"],
            a: 1,
            explain: "Bare except catches all exceptions (not recommended - too broad)."
        },
        {
            q: "How do you create custom exceptions?",
            options: ["Inherit from Error", "Inherit from Exception", "Use @exception", "Define error class"],
            a: 1,
            explain: "Custom exceptions should inherit from Exception class."
        },
        {
            q: "Which exception is raised for invalid type operations?",
            options: ["ValueError", "TypeError", "AttributeError", "SyntaxError"],
            a: 1,
            explain: "TypeError is raised when operation is applied to wrong type."
        },
        {
            q: "Can finally block have return statement?",
            options: ["No", "Yes, but overwrites try/except return", "Only if no exception", "Syntax error"],
            a: 1,
            explain: "Finally's return will override any return from try or except blocks."
        },
        {
            q: "What happens to uncaught exceptions?",
            options: ["Ignored", "Program terminates", "Logged only", "Converted to warnings"],
            a: 1,
            explain: "Uncaught exceptions cause program to terminate with traceback."
        },

        // ===== SECTION 4: Properties (8 questions) =====
        {
            q: "Which decorator creates a getter method?",
            options: ["@get", "@property", "@getter", "@read"],
            a: 1,
            explain: "@property decorator turns a method into a read-only attribute."
        },
        {
            q: "How do you create a setter for a property?",
            options: ["@set", "@name.setter", "@setter", "@write"],
            a: 1,
            explain: "Use @property_name.setter after defining the property."
        },
        {
            q: "Why use properties instead of direct attribute access?",
            options: ["Faster execution", "Validation and control", "Less memory", "Required by Python"],
            a: 1,
            explain: "Properties allow validation, computed values, and controlled access."
        },
        {
            q: "Can properties be read-only?",
            options: ["No, must have setter", "Yes, omit setter", "Only with @readonly", "Only class properties"],
            a: 1,
            explain: "Properties without @property.setter are read-only."
        },
        {
            q: "What naming convention indicates protected attributes?",
            options: ["single underscore _", "double underscore __", "trailing underscore_", "camelCase"],
            a: 0,
            explain: "Single underscore (_attribute) indicates protected by convention."
        },
        {
            q: "What happens if you try to set a read-only property?",
            options: ["Silently ignored", "AttributeError", "ValueError", "Creates new attribute"],
            a: 1,
            explain: "Attempting to set read-only property raises AttributeError."
        },
        {
            q: "Can properties call other methods?",
            options: ["No", "Yes", "Only private methods", "Only if static"],
            a: 1,
            explain: "Properties can contain any code, including method calls."
        },
        {
            q: "What is the @property.deleter decorator for?",
            options: ["Delete class", "Define behavior for 'del attribute'", "Remove property", "Clear cache"],
            a: 1,
            explain: "@property.deleter defines what happens when 'del obj.property' is called."
        },

        // ===== SECTION 5: File I/O (10 questions) =====
        {
            q: "Which mode opens a file for reading?",
            options: ["'w'", "'r'", "'a'", "'x'"],
            a: 1,
            explain: "'r' mode opens file for reading (default mode)."
        },
        {
            q: "Which mode opens a file for appending?",
            options: ["'w'", "'r'", "'a'", "'x'"],
            a: 2,
            explain: "'a' mode appends to end of file without overwriting."
        },
        {
            q: "How do you automatically close a file?",
            options: ["open()", "close()", "with open() as f:", "auto close()"],
            a: 2,
            explain: "'with' statement uses context manager to automatically close files."
        },
        {
            q: "Which method reads all lines into a list?",
            options: ["read()", "readline()", "readlines()", "getlines()"],
            a: 2,
            explain: "readlines() returns list where each element is a line."
        },
        {
            q: "What does 'w' mode do if file exists?",
            options: ["Appends", "Overwrites completely", "Raises error", "Creates backup"],
            a: 1,
            explain: "'w' mode truncates (empties) existing file before writing."
        },
        {
            q: "What mode creates new file or fails if exists?",
            options: ["'w'", "'a'", "'x'", "'n'"],
            a: 2,
            explain: "'x' mode creates file exclusively, raising error if it exists."
        },
        {
            q: "Which module handles JSON serialization?",
            options: ["json", "pickle", "serialize", "marshal"],
            a: 0,
            explain: "The 'json' module handles JSON encoding and decoding."
        },
        {
            q: "What does pickle.dump() do?",
            options: ["Prints object", "Saves object to file", "Deletes object", "Converts to JSON"],
            a: 1,
            explain: "pickle.dump() serializes Python object to binary file."
        },
        {
            q: "Is Pickle format human-readable?",
            options: ["Yes", "No, it's binary", "Only with pretty print", "Depends on object"],
            a: 1,
            explain: "Pickle creates binary format; use JSON for human-readable serialization."
        },
        {
            q: "Which is safer: pickle or JSON?",
            options: ["Pickle", "JSON", "Same safety", "Neither is safe"],
            a: 1,
            explain: "JSON is safer; pickle can execute arbitrary code when loading."
        },

        // ===== SECTION 6: Matplotlib (8 questions) =====
        {
            q: "Which function creates a line plot?",
            options: ["plt.line()", "plt.plot()", "plt.draw()", "plt.graph()"],
            a: 1,
            explain: "plt.plot(x, y) creates a line graph."
        },
        {
            q: "Which function creates a scatter plot?",
            options: ["plt.dots()", "plt.scatter()", "plt.points()", "plt.mark()"],
            a: 1,
            explain: "plt.scatter(x, y) creates disconnected points."
        },
        {
            q: "How do you display the plot?",
            options: ["plt.display()", "plt.show()", "plt.render()", "plt.draw()"],
            a: 1,
            explain: "plt.show() displays the plot window."
        },
        {
            q: "How do you enable grid lines?",
            options: ["plt.grid()", "plt.grid(True)", "plt.showGrid()", "Both A and B"],
            a: 3,
            explain: "plt.grid() or plt.grid(True) enables grid lines."
        },
        {
            q: "Which function creates a bar chart?",
            options: ["plt.bar()", "plt.column()", "plt.bars()", "plt.chart()"],
            a: 0,
            explain: "plt.bar(x, y) creates vertical bar chart."
        },
        {
            q: "How do you add a title to the plot?",
            options: ["plt.title('text')", "plt.heading('text')", "plt.name('text')", "plt.label('text')"],
            a: 0,
            explain: "plt.title() sets the plot title."
        },
        {
            q: "How do you label the x-axis?",
            options: ["plt.x('label')", "plt.xlabel('label')", "plt.xaxis('label')", "plt.label_x('label')"],
            a: 1,
            explain: "plt.xlabel() sets the x-axis label."
        },
        {
            q: "How do you show the legend?",
            options: ["plt.legend()", "plt.key()", "plt.labels()", "plt.showLegend()"],
            a: 0,
            explain: "plt.legend() displays the legend (requires 'label' parameter in plot)."
        },

        // ===== SECTION 7: Regular Expressions (8 questions) =====
        {
            q: "Which module handles regex in Python?",
            options: ["regex", "re", "regexp", "pattern"],
            a: 1,
            explain: "'import re' is the standard regex module."
        },
        {
            q: "What does '^' match in regex?",
            options: ["End of string", "Start of string", "Any character", "Uppercase only"],
            a: 1,
            explain: "^ asserts position at start of string."
        },
        {
            q: "What does '$' match in regex?",
            options: ["Dollar sign", "Variable", "End of string", "Start of string"],
            a: 2,
            explain: "$ asserts position at end of string."
        },
        {
            q: "What does '\\d' match?",
            options: ["Any character", "Digit 0-9", "Whitespace", "Letter"],
            a: 1,
            explain: "\\d matches any digit character (0-9)."
        },
        {
            q: "What does '+' quantifier mean?",
            options: ["Zero or more", "One or more", "Optional", "Exactly one"],
            a: 1,
            explain: "+ matches one or more occurrences of preceding pattern."
        },
        {
            q: "What does '*' quantifier mean?",
            options: ["Any character", "Zero or more", "One or more", "End of line"],
            a: 1,
            explain: "* matches zero or more occurrences."
        },
        {
            q: "What does '.' match in regex?",
            options: ["Period only", "Any character except newline", "Whitespace", "End of word"],
            a: 1,
            explain: ". matches any single character except newline."
        },
        {
            q: "Which method tests if pattern matches?",
            options: ["re.test()", "re.match()", "re.search()", "All of the above"],
            a: 3,
            explain: "re.match() matches from start; re.search() finds anywhere; both return match object or None."
        },

        // ===== SECTION 8: Design Patterns (8 questions) =====
        {
            q: "Which pattern ensures only one instance exists?",
            options: ["Factory", "Singleton", "Observer", "Prototype"],
            a: 1,
            explain: "Singleton pattern restricts class to single instance."
        },
        {
            q: "Which pattern provides simplified interface to complex system?",
            options: ["Adapter", "Facade", "Bridge", "Decorator"],
            a: 1,
            explain: "Facade pattern hides complexity behind simple interface."
        },
        {
            q: "Which pattern notifies dependents of state changes?",
            options: ["Observer", "Strategy", "Command", "Mediator"],
            a: 0,
            explain: "Observer pattern implements publish-subscribe mechanism."
        },
        {
            q: "Which pattern provides standard way to traverse collections?",
            options: ["Iterator", "Visitor", "Composite", "Chain"],
            a: 0,
            explain: "Iterator pattern provides sequential access without exposing internal structure."
        },
        {
            q: "What does Factory pattern do?",
            options: ["Create objects", "Destroy objects", "Copy objects", "Validate objects"],
            a: 0,
            explain: "Factory pattern creates objects without specifying exact class."
        },
        {
            q: "Which methods implement Iterator pattern in Python?",
            options: ["__iter__ and __next__", "__get__ and __set__", "__enter__ and __exit__", "__start__ and __stop__"],
            a: 0,
            explain: "__iter__ returns iterator object; __next__ returns next item."
        },
        {
            q: "What is the main benefit of Observer pattern?",
            options: ["Speed", "Loose coupling", "Memory savings", "Security"],
            a: 1,
            explain: "Observer decouples subjects from observers, improving maintainability."
        },
        {
            q: "Is Singleton pattern thread-safe by default in Python?",
            options: ["Yes", "No, needs synchronization", "Only in Python 3", "Only with threading module"],
            a: 1,
            explain: "Basic Singleton needs locking for thread safety."
        },

        // ===== SECTION 9: Abstract Classes (6 questions) =====
        {
            q: "Which module provides Abstract Base Classes?",
            options: ["abc", "abstract", "interface", "base"],
            a: 0,
            explain: "'from abc import ABC, abstractmethod' provides ABC functionality."
        },
        {
            q: "Can you instantiate an Abstract Base Class?",
            options: ["Yes", "No", "Only with __init__", "Only subclasses"],
            a: 1,
            explain: "ABCs cannot be instantiated directly; raises TypeError."
        },
        {
            q: "What decorator marks abstract methods?",
            options: ["@abstract", "@abstractmethod", "@virtual", "@interface"],
            a: 1,
            explain: "@abstractmethod decorator marks methods that must be implemented."
        },
        {
            q: "Must child classes implement all abstract methods?",
            options: ["No", "Yes, or remain abstract", "Only if instantiated", "Optional"],
            a: 1,
            explain: "Concrete subclasses must implement all abstract methods or can't be instantiated."
        },
        {
            q: "What's the purpose of Abstract Base Classes?",
            options: ["Save memory", "Enforce interface contracts", "Improve speed", "Hide implementation"],
            a: 1,
            explain: "ABCs ensure subclasses implement required methods, defining contracts."
        },
        {
            q: "Which UML relationship represents a 'Strong' ownership (child dies with parent)?",
            options: ["Aggregation", "Association", "Composition", "Inheritance"],
            a: 2,
            explain: "Composition (Filled Diamond) implies strong ownership. The child cannot exist independently."
        },
        {
            q: "In Python, if you create an object INSIDE the __init__ method, it is usually:",
            options: ["Aggregation", "Composition", "Inheritance", "Association"],
            a: 1,
            explain: "Creating it inside __init__ (self.eng = Engine()) usually creates a Composition relationship."
        },
        {
            q: "What does a Hollow Diamond (◇) represent in UML?",
            options: ["Composition", "Aggregation", "Inheritance", "Dependency"],
            a: 1,
            explain: "A Hollow Diamond represents Aggregation (Weak 'Has-A' relationship)."
        },
        // ===== NEW: EXAM TIPS (Code Analysis & Theory) =====
        { 
            q: "Code Analysis: `class Cat(Animal): def speak(self):...` represents which concept?", 
            options: ["Encapsulation", "Method Overriding", "Composition", "Abstraction"], 
            a: 1, 
            explain: "Redefining a parent method (`speak`) in a child class (`Cat`) is Method Overriding." 
        },
        { 
            q: "Code Analysis: `self.__balance = 100` represents which concept?", 
            options: ["Polymorphism", "Inheritance", "Encapsulation", "Recursion"], 
            a: 2, 
            explain: "Using double underscores (`__`) to hide data restricts access, which is Encapsulation." 
        },
        { 
            q: "Theory: Why use JSON over Pickle?", 
            options: ["It is faster", "It supports custom Python objects", "It is human-readable & language-independent", "It is binary"], 
            a: 2, 
            explain: "JSON is text-based and works across all languages (Java, JS, etc.). Pickle is Python-specific." 
        },
        { 
            q: "Theory: What is `__repr__` used for?", 
            options: ["User-friendly output", "Developer debugging output", "String concatenation", "Equality check"], 
            a: 1, 
            explain: "`__str__` is for users; `__repr__` is for developers (unambiguous representation)." 
        },
        // ===== QUESTIONS FROM CSIT121 VAULT PDF =====
        { 
            q: "Which UML relationship indicates a general relationship between two classes (Uses-A)?", 
            options: ["Composition", "Aggregation", "Association", "Inheritance"], 
            a: 2, 
            explain: "Association represents a general relationship where classes interact but don't strictly 'own' each other." 
        },
        { 
            q: "Which of these is traditionally considered a compiled language?", 
            options: ["Python", "JavaScript", "PHP", "Java"], 
            a: 3, 
            explain: "Java is a statically typed, compiled language (compiles to bytecode), whereas Python/JS are interpreted." 
        },
        { 
            q: "Which statement is the BEST option to import only 'Car' and 'Bus' classes from a 'database' module?", 
            options: ["import database", "from database import *", "from database import Car, Bus", "import database.Car, database.Bus"], 
            a: 2, 
            explain: "Explicitly importing specific classes ('from module import A, B') is preferred over '*' (pollutes namespace) or importing the whole module." 
        },
        { 
            q: "In the class definition 'class Staff(People):', what is 'People'?", 
            options: ["The Subclass", "The Superclass (Parent)", "The Instance", "The Module"], 
            a: 1, 
            explain: "The class inside the parentheses is the Parent class (Superclass) being inherited from." 
        },
        { 
            q: "If you are in 'payments/square.py', how do you use a relative import to access 'database.py' in the parent folder?", 
            options: ["import database", "from .. import database", "from . import database", "from ... import database"], 
            a: 1, 
            explain: "Two dots (..) move up one level in the package hierarchy to the parent directory." 
        }
    ],

    "CSIT128": [
        // ===== SECTION 1: HTML Forms (15 questions) =====
        {
            q: "Which tag defines a form?",
            options: ["<input>", "<form>", "<submit>", "<field>"],
            a: 1,
            explain: "<form> is the container element for form controls."
        },
        {
            q: "Which HTTP method is more secure for forms?",
            options: ["GET", "POST", "PUT", "SEND"],
            a: 1,
            explain: "POST sends data in request body, not URL, making it more secure."
        },
        {
            q: "Which input type allows selecting ONE option from a group?",
            options: ["checkbox", "radio", "select", "option"],
            a: 1,
            explain: "Radio buttons allow single selection when sharing same name attribute."
        },
        {
            q: "Which input type allows selecting MULTIPLE options?",
            options: ["radio", "checkbox", "multiselect", "option"],
            a: 1,
            explain: "Checkboxes allow multiple independent selections."
        },
        {
            q: "What attribute groups radio buttons together?",
            options: ["id", "class", "name", "group"],
            a: 2,
            explain: "Radio buttons with same 'name' attribute are grouped together."
        },
        {
            q: "Which attribute makes a field required?",
            options: ["mandatory", "required", "necessary", "must"],
            a: 1,
            explain: "The 'required' attribute (HTML5) enforces field completion."
        },
        {
            q: "Which tag creates a dropdown list?",
            options: ["<dropdown>", "<list>", "<select>", "<options>"],
            a: 2,
            explain: "<select> creates dropdown containing <option> elements."
        },
        {
            q: "Which input type masks password characters?",
            options: ["text", "password", "hidden", "secure"],
            a: 1,
            explain: "type='password' displays bullets/dots instead of characters."
        },
        {
            q: "Which tag creates multi-line text input?",
            options: ["<input>", "<text>", "<textarea>", "<multiline>"],
            a: 2,
            explain: "<textarea> allows multi-line text input with rows/cols attributes."
        },
        {
            q: "What does GET method do with form data?",
            options: ["Hides in URL", "Appends to URL", "Encrypts data", "Sends in body"],
            a: 1,
            explain: "GET appends form data to URL as query string (visible and limited)."
        },
        {
            q: "Which attribute specifies where form data is sent?",
            options: ["target", "action", "destination", "url"],
            a: 1,
            explain: "'action' attribute specifies the URL to send form data."
        },
        {
            q: "Which input type validates email format (HTML5)?",
            options: ["text", "email", "mail", "address"],
            a: 1,
            explain: "type='email' provides automatic email validation in HTML5."
        },
        {
            q: "What attribute sets default selected option?",
            options: ["default", "selected", "checked", "value"],
            a: 1,
            explain: "'selected' attribute on <option> makes it default selection."
        },
        {
            q: "What attribute pre-selects checkbox/radio?",
            options: ["selected", "checked", "default", "active"],
            a: 1,
            explain: "'checked' attribute pre-selects checkbox or radio button."
        },
        {
            q: "Which input type creates clickable button?",
            options: ["button", "click", "submit", "action"],
            a: 0,
            explain: "type='button' creates generic button (type='submit' submits form)."
        },

        // ===== SECTION 2: CSS (12 questions) =====
        {
            q: "Which selector has highest specificity?",
            options: ["Tag", "Class", "ID", "Inline style"],
            a: 3,
            explain: "Inline styles (style='...') have highest specificity (1000 points)."
        },
        {
            q: "Which symbol selects elements by ID?",
            options: [".", "#", "@", "*"],
            a: 1,
            explain: "# is the ID selector (e.g., #header)."
        },
        {
            q: "Which symbol selects elements by class?",
            options: [".", "#", "@", "*"],
            a: 0,
            explain: ". is the class selector (e.g., .highlight)."
        },
        {
            q: "Which selector targets direct children only?",
            options: ["A B", "A > B", "A + B", "A ~ B"],
            a: 1,
            explain: "> is the child combinator (selects direct children only)."
        },
        {
            q: "What does 'display: none' do?",
            options: ["Hides element, keeps space", "Removes element completely", "Makes transparent", "Minimizes element"],
            a: 1,
            explain: "display: none removes element from layout (no space reserved)."
        },
        {
            q: "What does 'visibility: hidden' do?",
            options: ["Removes element", "Hides but keeps space", "Makes transparent", "Disables element"],
            a: 1,
            explain: "visibility: hidden hides element but preserves its space in layout."
        },
        {
            q: "Which position value keeps element in normal flow?",
            options: ["static", "relative", "absolute", "fixed"],
            a: 0,
            explain: "position: static is default - normal document flow positioning."
        },
        {
            q: "Which position stays fixed on screen when scrolling?",
            options: ["static", "relative", "absolute", "fixed"],
            a: 3,
            explain: "position: fixed stays in same position relative to viewport when scrolling."
        },
        {
            q: "What is the correct order of Box Model from inside out?",
            options: ["Content, Border, Padding, Margin", "Content, Padding, Border, Margin", "Content, Margin, Padding, Border", "Padding, Content, Border, Margin"],
            a: 1,
            explain: "Box model: Content → Padding → Border → Margin (inside to outside)."
        },
        {
            q: "Which display value makes element take full width?",
            options: ["inline", "block", "inline-block", "flex"],
            a: 1,
            explain: "display: block makes element take full available width and start on new line."
        },
        {
            q: "What does '!important' do?",
            options: ["Adds emphasis", "Overrides all other styles", "Creates comment", "Makes style required"],
            a: 1,
            explain: "!important gives style highest priority, overriding other rules (use sparingly)."
        },
        {
            q: "Which property controls text color?",
            options: ["font-color", "color", "text-color", "text"],
            a: 1,
            explain: "'color' property sets text color."
        },

        // ===== SECTION 3: JavaScript Basics (12 questions) =====
        {
            q: "Which keyword declares a variable in modern JavaScript?",
            options: ["var", "let", "const", "All of the above"],
            a: 3,
            explain: "var, let, and const all declare variables (let and const are modern/preferred)."
        },
        {
            q: "How do you write to the browser console?",
            options: ["print()", "console.log()", "write()", "alert()"],
            a: 1,
            explain: "console.log() outputs to browser's developer console."
        },
        {
            q: "What does 'NaN' stand for?",
            options: ["Not a Null", "Not a Number", "Null and None", "New Numeric"],
            a: 1,
            explain: "NaN represents 'Not-a-Number', result of invalid numeric operations."
        },
        {
            q: "How do you declare a function?",
            options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "method myFunc() {}"],
            a: 0,
            explain: "function name() {} is standard function declaration syntax."
        },
        {
            q: "Which operator checks equality without type coercion?",
            options: ["==", "===", "equals", "is"],
            a: 1,
            explain: "=== checks strict equality (value AND type); == allows type coercion."
        },
        {
            q: "What is the result of '5' + 3?",
            options: ["8", "53", "Error", "NaN"],
            a: 1,
            explain: "+ with string performs concatenation: '5' + 3 = '53'."
        },
        {
            q: "What is the result of '5' - 3?",
            options: ["2", "53", "Error", "NaN"],
            a: 0,
            explain: "- operator converts '5' to number: 5 - 3 = 2."
        },
        {
            q: "How do you write a single-line comment?",
            options: ["# comment", "// comment", "<!-- comment -->", "' comment"],
            a: 1,
            explain: "// creates single-line comments in JavaScript."
        },
        {
            q: "How do you write a multi-line comment?",
            options: ["// comment", "/* comment */", "<!-- comment -->", "''' comment '''"],
            a: 1,
            explain: "/* */ creates multi-line comments in JavaScript."
        },
        {
            q: "What does 'typeof' operator do?",
            options: ["Converts type", "Returns type as string", "Checks type", "Defines type"],
            a: 1,
            explain: "typeof returns string indicating data type (e.g., 'number', 'string')."
        },
        {
            q: "Which creates a popup dialog box?",
            options: ["console.log()", "alert()", "popup()", "dialog()"],
            a: 1,
            explain: "alert() displays message in popup dialog box."
        },
        {
            q: "What does 'undefined' mean?",
            options: ["Variable not declared", "Variable declared but no value assigned", "Null value", "Error state"],
            a: 1,
            explain: "undefined means variable declared but not initialized with value."
        },

        // ===== SECTION 4: DOM Manipulation (12 questions) =====
        {
            q: "Which method gets element by ID?",
            options: ["getElement()", "document.getElementById()", "getElementById()", "$('#id')"],
            a: 1,
            explain: "document.getElementById('id') returns single element with specified ID."
        },
        {
            q: "Which property changes element's text content?",
            options: ["value", "innerHTML", "text", "content"],
            a: 1,
            explain: "innerHTML changes HTML content (textContent for plain text only)."
        },
        {
            q: "Which property changes element's CSS?",
            options: ["css", "style", "stylesheet", "design"],
            a: 1,
            explain: "element.style.property allows direct CSS manipulation."
        },
        {
            q: "Which event fires when user clicks element?",
            options: ["onpress", "onclick", "ontouch", "onhit"],
            a: 1,
            explain: "onclick event fires when element is clicked."
        },
        {
            q: "Which event fires when input loses focus?",
            options: ["onfocus", "onblur", "onleave", "onout"],
            a: 1,
            explain: "onblur fires when element loses focus."
        },
        {
            q: "Which method is best for adding event listeners?",
            options: ["onclick property", "addEventListener()", "attachEvent()", "on()"],
            a: 1,
            explain: "addEventListener() allows multiple handlers and better control."
        },
        {
            q: "How do you create a new HTML element?",
            options: ["createElement()", "document.createElement()", "new Element()", "createNode()"],
            a: 1,
            explain: "document.createElement('tagName') creates new element."
        },
        {
            q: "How do you add element to page?",
            options: ["insert()", "appendChild()", "add()", "append()"],
            a: 1,
            explain: "parent.appendChild(element) adds element to parent's children."
        },
        {
            q: "Which property gets input field value?",
            options: ["text", "value", "content", "data"],
            a: 1,
            explain: "For input elements, .value gets/sets the field content."
        },
        {
            q: "Which method finds first matching CSS selector?",
            options: ["querySelector()", "find()", "select()", "search()"],
            a: 0,
            explain: "document.querySelector() returns first element matching CSS selector."
        },
        {
            q: "Which method finds ALL matching CSS selectors?",
            options: ["querySelector()", "querySelectorAll()", "selectAll()", "findAll()"],
            a: 1,
            explain: "document.querySelectorAll() returns NodeList of all matching elements."
        },
        {
            q: "How do you remove an element?",
            options: ["delete()", "remove()", "destroy()", "clear()"],
            a: 1,
            explain: "element.remove() removes element from DOM (modern way)."
        },

        // ===== SECTION 5: JavaScript Events & Timers (10 questions) =====
        {
            q: "Which function executes code repeatedly?",
            options: ["setTimeout", "setInterval", "repeat", "loop"],
            a: 1,
            explain: "setInterval() executes function repeatedly at specified interval."
        },
        {
            q: "Which function executes code once after delay?",
            options: ["setTimeout", "setInterval", "delay", "wait"],
            a: 0,
            explain: "setTimeout() executes function once after specified delay."
        },
        {
            q: "How do you stop a setInterval timer?",
            options: ["stopInterval()", "clearInterval()", "cancelInterval()", "removeInterval()"],
            a: 1,
            explain: "clearInterval(id) stops interval created by setInterval()."
        },
        {
            q: "How do you stop a setTimeout timer?",
            options: ["stopTimeout()", "clearTimeout()", "cancelTimeout()", "removeTimeout()"],
            a: 1,
            explain: "clearTimeout(id) cancels timeout created by setTimeout()."
        },
        {
            q: "What is event bubbling?",
            options: ["Event moves from child to parent", "Event moves from parent to child", "Event fires twice", "Event is cancelled"],
            a: 0,
            explain: "Event bubbling means event propagates from target element up to parent elements."
        },
        {
            q: "How do you prevent default event behavior?",
            options: ["event.stop()", "event.preventDefault()", "event.cancel()", "return false"],
            a: 1,
            explain: "event.preventDefault() stops default action (e.g., form submission, link click)."
        },
        {
            q: "Which event fires when page finishes loading?",
            options: ["onload", "onready", "onstart", "oninit"],
            a: 0,
            explain: "window.onload fires when entire page including images loads."
        },
        {
            q: "Which event fires when mouse enters element?",
            options: ["onmousein", "onmouseover", "onmouseenter", "onenter"],
            a: 1,
            explain: "onmouseover (or onmouseenter) fires when mouse enters element."
        },
        {
            q: "Which event fires when key is pressed?",
            options: ["onkey", "onkeypress", "onkeydown", "ontype"],
            a: 2,
            explain: "onkeydown fires when key is pressed (onkeyup when released)."
        },
        {
            q: "What unit is time specified in for setTimeout?",
            options: ["Seconds", "Milliseconds", "Minutes", "Microseconds"],
            a: 1,
            explain: "setTimeout and setInterval use milliseconds (1000ms = 1 second)."
        },

        // ===== SECTION 6: Validation & Regex (12 questions) =====
        {
            q: "Which regex symbol matches start of string?",
            options: ["$", "^", "*", "\\b"],
            a: 1,
            explain: "^ asserts position at start of string."
        },
        {
            q: "Which regex symbol matches end of string?",
            options: ["$", "^", "*", "\\b"],
            a: 0,
            explain: "$ asserts position at end of string."
        },
        {
            q: "Which regex pattern matches any digit?",
            options: ["\\d", "\\w", "\\s", "[0-9]"],
            a: 0,
            explain: "\\d matches any digit 0-9 ([0-9] is equivalent)."
        },
        {
            q: "Which regex pattern matches any word character?",
            options: ["\\d", "\\w", "\\s", "\\c"],
            a: 1,
            explain: "\\w matches letters, digits, and underscore [A-Za-z0-9_]."
        },
        {
            q: "What does '+' mean in regex?",
            options: ["Zero or more", "One or more", "Exactly one", "Optional"],
            a: 1,
            explain: "+ quantifier matches one or more of preceding pattern."
        },
        {
            q: "What does '*' mean in regex?",
            options: ["Zero or more", "One or more", "Any character", "End of line"],
            a: 0,
            explain: "* quantifier matches zero or more of preceding pattern."
        },
        {
            q: "What does '?' mean in regex?",
            options: ["Any character", "Optional (0 or 1)", "One or more", "Question mark literal"],
            a: 1,
            explain: "? quantifier makes preceding pattern optional (0 or 1 occurrence)."
        },
        {
            q: "What does [A-Z] match?",
            options: ["Uppercase A to Z", "Any letter", "Alphabet", "Capital letters only"],
            a: 0,
            explain: "[A-Z] matches any single uppercase letter from A to Z."
        },
        {
            q: "Which method tests if string matches pattern?",
            options: ["match()", "test()", "search()", "find()"],
            a: 1,
            explain: "pattern.test(string) returns true/false for match."
        },
        {
            q: "What does {3} mean in regex?",
            options: ["At least 3", "At most 3", "Exactly 3", "3 or more"],
            a: 2,
            explain: "{3} matches exactly 3 occurrences of preceding pattern."
        },
        {
            q: "What does {2,5} mean in regex?",
            options: ["2 or 5", "Between 2 and 5", "2, 5, or between", "2 through 5"],
            a: 1,
            explain: "{2,5} matches between 2 and 5 (inclusive) occurrences."
        },

        // ===== SECTION 7: XML, DTD, XSD (12 questions) =====
        {
            q: "Must XML tags be closed?",
            options: ["No", "Yes, always", "Only container tags", "Optional"],
            a: 1,
            explain: "XML requires all tags to be properly closed (or self-closed)."
        },
        {
            q: "Are XML tags case-sensitive?",
            options: ["No", "Yes", "Only in strict mode", "Depends on parser"],
            a: 1,
            explain: "XML is case-sensitive: <Name> and <name> are different tags."
        },
        {
            q: "How do you write XML comments?",
            options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
            a: 1,
            explain: "XML uses <!-- comment --> syntax (same as HTML)."
        },
        {
            q: "What defines legal XML structure?",
            options: ["CSS", "DTD or XSD", "HTML", "JavaScript"],
            a: 1,
            explain: "DTD (Document Type Definition) or XSD (XML Schema) define structure."
        },
        {
            q: "What does #PCDATA mean in DTD?",
            options: ["Private data", "Parsed Character Data", "Primary data", "Protected data"],
            a: 1,
            explain: "#PCDATA means parsed character data (text content)."
        },
        {
            q: "What does '+' mean in DTD?",
            options: ["Zero or more", "One or more", "Optional", "Required"],
            a: 1,
            explain: "+ in DTD means one or more occurrences required."
        },
        {
            q: "What does '*' mean in DTD?",
            options: ["Zero or more", "One or more", "Required", "Any element"],
            a: 0,
            explain: "* in DTD means zero or more occurrences (optional, repeatable)."
        },
        {
            q: "What does '?' mean in DTD?",
            options: ["Required", "Optional (0 or 1)", "One or more", "Unknown"],
            a: 1,
            explain: "? in DTD means zero or one occurrence (optional, non-repeatable)."
        },
        {
            q: "Which is more powerful: DTD or XSD?",
            options: ["DTD", "XSD", "Equal", "Neither"],
            a: 1,
            explain: "XSD is more powerful: supports data types, namespaces, written in XML."
        },
        {
            q: "How do you declare XSD string type?",
            options: ["type='string'", "type='xs:string'", "datatype='string'", "string=true"],
            a: 1,
            explain: "XSD uses xs:string (or xsd:string depending on namespace prefix)."
        },
        {
            q: "Must XML have a root element?",
            options: ["No", "Yes, exactly one", "Yes, at least one", "Optional"],
            a: 1,
            explain: "XML must have exactly one root element containing all other elements."
        },
        {
            q: "How do you escape < in XML?",
            options: ["\\<", "&lt;", "<", "&#60;"],
            a: 1,
            explain: "Use &lt; for < and &gt; for > (entity references)."
        },

        // ===== SECTION 8: XSLT (10 questions) =====
        {
            q: "What does XSLT stand for?",
            options: ["XML Style Language Transformations", "XSL Transformations", "XML Standard Language Templates", "eXtensible Stylesheet Language Transform"],
            a: 1,
            explain: "XSLT = XSL Transformations (transforms XML to other formats)."
        },
        {
            q: "Which tag loops through XML nodes in XSLT?",
            options: ["<xsl:loop>", "<xsl:for-each>", "<xsl:iterate>", "<xsl:repeat>"],
            a: 1,
            explain: "<xsl:for-each select='path'> loops through matching nodes."
        },
        {
            q: "Which tag outputs node value in XSLT?",
            options: ["<xsl:value-of>", "<xsl:output>", "<xsl:print>", "<xsl:get>"],
            a: 0,
            explain: "<xsl:value-of select='node'> extracts and outputs text content."
        },
        {
            q: "Which tag sorts output in XSLT?",
            options: ["<xsl:order>", "<xsl:sort>", "<xsl:arrange>", "<xsl:organize>"],
            a: 1,
            explain: "<xsl:sort select='element'> sorts nodes before output."
        },
        {
            q: "Which tag implements conditional logic in XSLT?",
            options: ["<xsl:if>", "<xsl:condition>", "<xsl:when>", "<xsl:check>"],
            a: 0,
            explain: "<xsl:if test='condition'> provides conditional rendering."
        },
        {
            q: "What does <xsl:template match='/'> match?",
            options: ["All elements", "Root element", "First element", "Document root"],
            a: 3,
            explain: "match='/' matches document root (entire XML tree)."
        },
        {
            q: "How do you access attributes in XSLT?",
            options: ["@attribute", "attribute()", "#attribute", ".attribute"],
            a: 0,
            explain: "@ symbol accesses attributes: @id gets 'id' attribute value."
        },
        {
            q: "Which tag provides multi-condition logic in XSLT?",
            options: ["<xsl:if-else>", "<xsl:choose>", "<xsl:switch>", "<xsl:case>"],
            a: 1,
            explain: "<xsl:choose> with <xsl:when> and <xsl:otherwise> provides if-else-if logic."
        },
        {
            q: "How do you select all book elements in XSLT?",
            options: ["select='book'", "select='//book'", "select='*book'", "select='all.book'"],
            a: 1,
            explain: "// selects all matching nodes at any depth in tree."
        },
        {
            q: "Can XSLT transform XML to HTML?",
            options: ["No", "Yes", "Only with JavaScript", "Only XSL-FO"],
            a: 1,
            explain: "XSLT commonly transforms XML to HTML for web display."
        },

        // ===== SECTION 9: JSON & AJAX (12 questions) =====
        {
            q: "What does JSON stand for?",
            options: ["Java Standard Object Notation", "JavaScript Object Notation", "Java Script Object Naming", "Just Simple Object Notation"],
            a: 1,
            explain: "JSON = JavaScript Object Notation, lightweight data format."
        },
        {
            q: "Are single quotes valid in JSON?",
            options: ["Yes", "No, must use double quotes", "Only for strings", "Only for keys"],
            a: 1,
            explain: "JSON requires double quotes for both keys and strings."
        },
        {
            q: "Which is valid JSON?",
            options: ["{name:'John'}", "{'name':'John'}", "{\"name\":\"John\"}", "{name:John}"],
            a: 2,
            explain: "JSON requires double quotes for keys and string values."
        },
        {
            q: "Which method converts JavaScript object to JSON string?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.encode()"],
            a: 1,
            explain: "JSON.stringify() serializes JavaScript object to JSON string."
        },
        {
            q: "Which method converts JSON string to JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.load()"],
            a: 0,
            explain: "JSON.parse() deserializes JSON string to JavaScript object."
        },
        {
            q: "Can JSON contain comments?",
            options: ["Yes", "No", "Only single-line", "Only multi-line"],
            a: 1,
            explain: "JSON specification does not allow comments."
        },
        {
            q: "What does AJAX stand for?",
            options: ["Advanced JavaScript and XML", "Asynchronous JavaScript and XML", "Automatic Java and XML", "Async JSON and XML"],
            a: 1,
            explain: "AJAX = Asynchronous JavaScript and XML (now often uses JSON)."
        },
        {
            q: "What object is used for AJAX requests (traditional)?",
            options: ["XMLHttp", "XMLHttpRequest", "AjaxRequest", "HttpRequest"],
            a: 1,
            explain: "XMLHttpRequest object handles AJAX requests."
        },
        {
            q: "What readyState value means request complete?",
            options: ["0", "2", "4", "5"],
            a: 2,
            explain: "readyState 4 means DONE - request complete and response ready."
        },
        {
            q: "What HTTP status code means success?",
            options: ["100", "200", "404", "500"],
            a: 1,
            explain: "Status 200 means OK - successful HTTP request."
        },
        {
            q: "Which is the modern alternative to XMLHttpRequest?",
            options: ["ajax()", "fetch()", "request()", "get()"],
            a: 1,
            explain: "fetch() API is modern Promise-based alternative to XMLHttpRequest."
        },
        {
            q: "What does asynchronous mean in AJAX?",
            options: ["Requests are sequential", "Page doesn't reload", "Requests don't block execution", "Data is cached"],
            a: 2,
            explain: "Asynchronous means requests don't block code execution (non-blocking)."
        },

        // ===== SECTION 10: HTML5 Canvas & Drag-Drop (10 questions) =====
        {
            q: "Which method gets Canvas drawing context?",
            options: ["getContext('2d')", "getCanvas()", "getDrawing()", "context2d()"],
            a: 0,
            explain: "canvas.getContext('2d') returns 2D drawing context."
        },
        {
            q: "Which method draws filled rectangle?",
            options: ["fillRect()", "drawRect()", "rectangle()", "rect()"],
            a: 0,
            explain: "ctx.fillRect(x, y, width, height) draws filled rectangle."
        },
        {
            q: "Which method draws rectangle outline?",
            options: ["outlineRect()", "strokeRect()", "borderRect()", "drawRect()"],
            a: 1,
            explain: "ctx.strokeRect() draws rectangle outline without fill."
        },
        {
            q: "Which method starts a new drawing path?",
            options: ["newPath()", "beginPath()", "startPath()", "createPath()"],
            a: 1,
            explain: "ctx.beginPath() starts new path for drawing."
        },
        {
            q: "Which method actually renders the line?",
            options: ["draw()", "stroke()", "render()", "line()"],
            a: 1,
            explain: "ctx.stroke() renders the path outline (ctx.fill() fills shape)."
        },
        {
            q: "Which method moves pen without drawing?",
            options: ["move()", "moveTo()", "jump()", "goTo()"],
            a: 1,
            explain: "ctx.moveTo(x, y) moves drawing position without drawing line."
        },
        {
            q: "How do you make element draggable?",
            options: ["drag='true'", "draggable='true'", "canDrag='true'", "allowDrag='true'"],
            a: 1,
            explain: "Set draggable='true' attribute on HTML element."
        },
        {
            q: "Which event stores data when drag starts?",
            options: ["ondrag", "ondragstart", "ondragbegin", "onstart"],
            a: 1,
            explain: "ondragstart event fires when drag begins; use dataTransfer.setData()."
        },
        {
            q: "What must ondragover do to allow drop?",
            options: ["Nothing", "event.preventDefault()", "return true", "event.allowDrop()"],
            a: 1,
            explain: "Must call event.preventDefault() in ondragover to enable dropping."
        },
        {
            q: "Which method retrieves dragged data on drop?",
            options: ["dataTransfer.getData()", "event.getData()", "getDragData()", "transferData()"],
            a: 0,
            explain: "event.dataTransfer.getData(type) retrieves data stored during drag."
        },

        // ===== ADDITIONAL ERROR FINDING QUESTIONS (10 questions) =====
        {
            q: "Line 1: class Account; Line 2: def __init__(number, balance):; Line 3: self.number = number - What's wrong?",
            options: ["Line 1", "Line 2", "Line 3", "No error"],
            a: 1,
            explain: "Line 2: Missing 'self' parameter. Should be: def __init__(self, number, balance):"
        },
        {
            q: "Line 1: def calculate_area(radius):; Line 2: return 3.14 * radius ** 2; Line 3: print(calculate_area()) - What's wrong?",
            options: ["Line 1", "Line 2", "Line 3", "No error"],
            a: 2,
            explain: "Line 3: Missing required argument 'radius'. Should be: calculate_area(5)"
        },
        {
            q: "x = [1, 2, 3]; y = x; y.append(4); print(x) - What is printed?",
            options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "[4]"],
            a: 1,
            explain: "Lists are mutable. y and x reference same object, so x is also [1, 2, 3, 4]"
        },
        {
            q: "try: x = 10 / 0; except: print('Error'); else: print('Success') - What's printed?",
            options: ["Error", "Success", "Both Error and Success", "Nothing"],
            a: 0,
            explain: "Only 'Error' prints. 'else' executes only when no exception occurs."
        },
        {
            q: "@property decorator: def name(self): return self._name - How to call this?",
            options: ["obj.name()", "obj.name", "obj._name", "obj.getName()"],
            a: 1,
            explain: "@property decorator allows calling without parentheses: obj.name"
        },
        {
            q: "class A:; count = 0; def __init__(self): count += 1 - What's wrong?",
            options: ["Line 1", "Line 2", "Line 4", "No error"],
            a: 2,
            explain: "Line 4: Should be A.count += 1 (class variable) or self.count (instance)."
        },
        {
            q: "with open('data.txt', 'w') as f: data = f.read() - What's wrong?",
            options: ["Opening file", "Reading file", "Both operations", "No error"],
            a: 1,
            explain: "Can't read from file opened in write ('w') mode. Use 'r' mode."
        },
        {
            q: "def calculate(x, y=5, z): return x + y + z - What's wrong?",
            options: ["Function definition", "Return statement", "Both lines", "No error"],
            a: 0,
            explain: "Non-default parameter (z) can't follow default parameter (y=5)."
        },
        {
            q: "numbers = (1, 2, 3); numbers[0] = 10; print(numbers) - What happens?",
            options: ["Prints (10, 2, 3)", "Prints (1, 2, 3)", "TypeError", "IndexError"],
            a: 2,
            explain: "Tuples are immutable - can't modify elements. Raises TypeError."
        },
        {
            q: "from abc import ABC; class Shape(ABC): pass; s = Shape() - What's wrong?",
            options: ["Import statement", "Class definition", "Pass statement", "Instantiation"],
            a: 3,
            explain: "Can't instantiate abstract base class without implementing abstract methods."
        },

        // ===== ADDITIONAL OUTPUT TRACING QUESTIONS (10 questions) =====
        {
            q: "x = 5\ny = x\nx = 10\nprint(y)\nWhat's printed?",
            options: ["5", "10", "15", "Error"],
            a: 0,
            explain: "y = x copies the value (5). Changing x doesn't affect y."
        },
        {
            q: "for i in range(3):\n    print(i, end=' ')\nOutput?",
            options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
            a: 0,
            explain: "range(3) generates 0, 1, 2. end=' ' prints on same line."
        },
        {
            q: "x = [1, 2]\nx.extend([3, 4])\nprint(x)\nOutput?",
            options: ["[1, 2, [3, 4]]", "[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error"],
            a: 1,
            explain: "extend() adds elements individually: [1, 2, 3, 4]"
        },
        {
            q: "x = [1, 2]\nx.append([3, 4])\nprint(x)\nOutput?",
            options: ["[1, 2, [3, 4]]", "[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error"],
            a: 0,
            explain: "append() adds list as single element: [1, 2, [3, 4]]"
        },
        {
            q: "print('Hello' * 3)\nOutput?",
            options: ["HelloHelloHello", "Hello Hello Hello", "Hello3", "Error"],
            a: 0,
            explain: "String repetition: 'Hello' * 3 = 'HelloHelloHello'"
        },
        {
            q: "x = 10\nif x > 5:\n    print('A')\nelif x > 3:\n    print('B')\nelse:\n    print('C')\nOutput?",
            options: ["A", "B", "C", "AB"],
            a: 0,
            explain: "First condition (x > 5) is true, prints 'A'. Other conditions not checked."
        },
        {
            q: "result = 10 // 3\nprint(result)\nOutput?",
            options: ["3", "3.33", "4", "3.0"],
            a: 0,
            explain: "// is floor division: 10 // 3 = 3 (integer division)"
        },
        {
            q: "result = 10 % 3\nprint(result)\nOutput?",
            options: ["1", "3", "0", "3.33"],
            a: 0,
            explain: "% is modulo (remainder): 10 % 3 = 1"
        },
        {
            q: "print(bool([]))\nOutput?",
            options: ["True", "False", "[]", "Error"],
            a: 1,
            explain: "Empty list [] is falsy in Python: bool([]) = False"
        },
        {
            q: "x = [1, 2, 3]\nprint(len(x))\nOutput?",
            options: ["3", "6", "[1, 2, 3]", "Error"],
            a: 0,
            explain: "len() returns number of elements: len([1, 2, 3]) = 3"
        },

        // ===== CSIT128 ADDITIONAL QUESTIONS (15 questions) =====
        {
            q: "What does <!DOCTYPE html> declare?",
            options: ["HTML version 5", "Document type", "Both A and B", "XML compatibility"],
            a: 2,
            explain: "<!DOCTYPE html> declares HTML5 document type."
        },
        {
            q: "Which attribute makes input field mandatory?",
            options: ["mandatory", "required", "validate", "must"],
            a: 1,
            explain: "required attribute makes form field mandatory before submission."
        },
        {
            q: "What's the correct way to comment in CSS?",
            options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
            a: 1,
            explain: "CSS uses /* comment */ syntax (like C-style comments)."
        },
        {
            q: "What does event.target refer to?",
            options: ["Window object", "Element that triggered event", "Event type", "Parent element"],
            a: 1,
            explain: "event.target is the element that triggered the event."
        },
        {
            q: "How to select all <p> elements in JavaScript?",
            options: ["getElementsByTag('p')", "querySelectorAll('p')", "selectAll('p')", "getElements('p')"],
            a: 1,
            explain: "querySelectorAll('p') selects all <p> elements (returns NodeList)."
        },
        {
            q: "What's the correct XML declaration?",
            options: ["<?xml version='1.0'?>", "<xml version='1.0'>", "<!xml version='1.0'>", "[xml version='1.0']"],
            a: 0,
            explain: "XML declaration: <?xml version='1.0' encoding='UTF-8'?>"
        },
        {
            q: "In XML, what are attributes written in?",
            options: ["Single quotes only", "Double quotes only", "Either single or double", "No quotes needed"],
            a: 2,
            explain: "XML attributes can use single or double quotes (both valid)."
        },
        {
            q: "What does CDATA section do in XML?",
            options: ["Comments data", "Contains unparsed data", "Creates attributes", "Validates schema"],
            a: 1,
            explain: "CDATA sections contain character data not parsed (e.g., <![CDATA[<html>]]>)."
        },
        {
            q: "Which XPath selects all children?",
            options: ["/", "//", "*", "."],
            a: 2,
            explain: "* selects all children elements. // selects all descendants."
        },
        {
            q: "What does JSON.parse() return for invalid JSON?",
            options: ["null", "undefined", "Empty object", "Throws error"],
            a: 3,
            explain: "JSON.parse() throws SyntaxError for malformed JSON strings."
        },
        {
            q: "Which XMLHttpRequest property holds response?",
            options: ["response", "responseText", "data", "result"],
            a: 1,
            explain: "xhr.responseText contains server response as string."
        },
        {
            q: "What's readyState 4 mean in AJAX?",
            options: ["Request sent", "Loading", "Completed", "Error"],
            a: 2,
            explain: "readyState 4 = request completed (0=unsent, 1=opened, 2=headers, 3=loading, 4=done)."
        },
        {
            q: "Which canvas method draws rectangle?",
            options: ["drawRect()", "rect()", "rectangle()", "box()"],
            a: 1,
            explain: "ctx.rect(x, y, width, height) creates rectangle path."
        },
        {
            q: "What's the purpose of ctx.clearRect()?",
            options: ["Create rectangle", "Clear canvas area", "Draw outline", "Fill rectangle"],
            a: 1,
            explain: "ctx.clearRect(x, y, w, h) clears specified rectangular area."
        },

        // ===== PAST YEAR MCQ QUESTIONS FROM PDF (20 questions) =====
        {
            q: "What does the <!DOCTYPE html> declaration do?",
            options: ["Defines document type as HTML5", "Creates a comment", "Links to CSS", "Starts JavaScript"],
            a: 0,
            explain: "<!DOCTYPE html> declares the document as HTML5."
        },
        {
            q: "Which HTML element defines navigation links?",
            options: ["<navigation>", "<nav>", "<navigate>", "<links>"],
            a: 1,
            explain: "<nav> is the semantic element for navigation links."
        },
        {
            q: "What's the correct syntax for an HTML comment?",
            options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
            a: 2,
            explain: "HTML comments use <!-- comment --> syntax."
        },
        {
            q: "Which attribute specifies an alternate text for an image?",
            options: ["title", "alt", "text", "description"],
            a: 1,
            explain: "'alt' attribute provides alternative text for images."
        },
        {
            q: "What does CSS box-sizing: border-box do?",
            options: ["Removes borders", "Includes padding/border in width", "Makes border thicker", "Centers box"],
            a: 1,
            explain: "border-box includes padding and border in the element's total width/height."
        },
        {
            q: "Which CSS property controls spacing between lines of text?",
            options: ["line-height", "text-spacing", "line-spacing", "spacing"],
            a: 0,
            explain: "line-height controls the spacing between lines of text."
        },
        {
            q: "What does z-index control in CSS?",
            options: ["Font size", "Stack order", "Zoom level", "Z-axis rotation"],
            a: 1,
            explain: "z-index controls the stack order of positioned elements."
        },
        {
            q: "Which JavaScript method converts a string to lowercase?",
            options: ["lower()", "toLowerCase()", "toLower()", "lowercase()"],
            a: 1,
            explain: "toLowerCase() converts a string to lowercase letters."
        },
        {
            q: "What does === operator check in JavaScript?",
            options: ["Value only", "Type only", "Value and type", "Assignment"],
            a: 2,
            explain: "=== checks both value and type (strict equality)."
        },
        {
            q: "Which method adds an element to the end of an array?",
            options: ["add()", "append()", "push()", "insert()"],
            a: 2,
            explain: "push() adds one or more elements to the end of an array."
        },
        {
            q: "What does the 'this' keyword refer to in JavaScript?",
            options: ["Current function", "Global object", "Current object context", "Parent element"],
            a: 2,
            explain: "'this' refers to the object that is executing the current function."
        },
        {
            q: "Which method removes the last element from an array?",
            options: ["pop()", "remove()", "delete()", "shift()"],
            a: 0,
            explain: "pop() removes and returns the last element of an array."
        },
        {
            q: "What is the correct way to declare a JavaScript constant?",
            options: ["var x = 5", "let x = 5", "const x = 5", "constant x = 5"],
            a: 2,
            explain: "'const' declares a constant (cannot be reassigned)."
        },
        {
            q: "What does XML stand for?",
            options: ["eXtra Markup Language", "eXtensible Markup Language", "eXternal Markup Language", "eXample Markup Language"],
            a: 1,
            explain: "XML stands for eXtensible Markup Language."
        },
        {
            q: "Which XML component defines the structure of an XML document?",
            options: ["DTD or XSD", "CSS", "JavaScript", "HTML"],
            a: 0,
            explain: "DTD (Document Type Definition) or XSD (XML Schema Definition) defines XML structure."
        },
        {
            q: "What is the root element in an XML document?",
            options: ["First element", "Parent of all elements", "Largest element", "Main element"],
            a: 1,
            explain: "The root element is the single parent element that contains all other elements."
        },
        {
            q: "Which XSLT element is used to iterate over nodes?",
            options: ["<xsl:loop>", "<xsl:for-each>", "<xsl:iterate>", "<xsl:repeat>"],
            a: 1,
            explain: "<xsl:for-each> iterates over a set of nodes in XSLT."
        },
        {
            q: "What does AJAX stand for?",
            options: ["Asynchronous JavaScript And XML", "Advanced JavaScript And XML", "Automatic JavaScript And XML", "Active JavaScript And XML"],
            a: 0,
            explain: "AJAX stands for Asynchronous JavaScript And XML."
        },
        {
            q: "Which HTTP method is typically used for retrieving data?",
            options: ["POST", "GET", "PUT", "DELETE"],
            a: 1,
            explain: "GET method is used to retrieve/request data from a server."
        },
        {
            q: "What is the purpose of JSON.parse()?",
            options: ["Convert object to JSON string", "Parse JSON string to object", "Validate JSON", "Format JSON"],
            a: 1,
            explain: "JSON.parse() parses a JSON string and returns a JavaScript object."
        },
        {
            q: "Which selector has the highest priority (specificity)?",
            options: ["div p", ".content", "#header", "p[name='a']"],
            a: 2,
            explain: "IDs (#header) have higher specificity (100) than classes (10) or tags (1)."
        },
        {
            q: "What color will the text be?\n<p id='txt' class='blue' style='color:red'>Hello</p>\nCSS: #txt {color:green} .blue {color:blue}",
            options: ["Green", "Blue", "Red", "Black"],
            a: 2,
            explain: "Inline styles (style='...') have the highest priority, overriding IDs and Classes."
        },
        {
            q: "How do you override an inline style from CSS?",
            options: ["Use an ID", "Use !important", "Use a Class", "You cannot"],
            a: 1,
            explain: "The !important flag (e.g., color: blue !important;) is the only way to override an inline style."
        }
    ]
};