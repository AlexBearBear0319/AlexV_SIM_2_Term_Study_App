/* ==========================================================================
   PRACTICAL LABS DATA - Code Examples & Exercises
   ========================================================================== */

const practicalData = {
    "CSIT121": [
        {
            title: "Lab 1: Basic Class Creation",
            desc: "Create a simple `Student` class with name and ID attributes. Implement __init__, __str__, and a method to display details.",
            code: `class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
    
    def __str__(self):
        return f"Student: {self.name} (ID: {self.student_id})"
    
    def display_details(self):
        print(f"Name: {self.name}")
        print(f"ID: {self.student_id}")

# Usage
s = Student("Alice Smith", "S12345")
print(s)  # Calls __str__
s.display_details()`
        },
        {
            title: "Lab 2: Inheritance - Employee System",
            desc: "Create a base class `Employee` and subclass `Manager`. Use `super()` to initialize parent attributes.",
            code: `class Employee:
    def __init__(self, name, emp_id, salary):
        self.name = name
        self.emp_id = emp_id
        self.salary = salary
    
    def display_info(self):
        print(f"{self.name} (ID: {self.emp_id}) - Salary: \${self.salary}")

class Manager(Employee):
    def __init__(self, name, emp_id, salary, department):
        super().__init__(name, emp_id, salary)  # Call parent constructor
        self.department = department
    
    def display_info(self):  # Override parent method
        super().display_info()
        print(f"Department: {self.department}")

# Usage
m = Manager("Bob Jones", "E101", 75000, "Sales")
m.display_info()`
        },
        {
            title: "Lab 3: Exception Handling & File I/O",
            desc: "Read scores from a file. Raise custom exception if score is invalid. Handle file not found error.",
            code: `class InvalidScoreError(Exception):
    """Custom exception for invalid score values"""
    pass

def process_scores(filename):
    try:
        with open(filename, 'r') as f:
            for line in f:
                score = int(line.strip())
                
                # Validate score
                if score < 0 or score > 100:
                    raise InvalidScoreError(f"Score {score} out of range")
                
                print(f"Valid score: {score}")
    
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found")
    except ValueError:
        print("Error: File contains non-numeric data")
    except InvalidScoreError as e:
        print(f"Validation Error: {e}")
    finally:
        print("Processing complete")

# Usage
process_scores("scores.txt")`
        },
        {
            title: "Lab 4: Properties with Validation",
            desc: "Create a `BankAccount` class with balance property that validates deposits/withdrawals.",
            code: `class BankAccount:
    def __init__(self, account_number, initial_balance=0):
        self.account_number = account_number
        self._balance = initial_balance  # Protected variable
    
    @property
    def balance(self):
        """Getter - returns current balance"""
        return self._balance
    
    @balance.setter
    def balance(self, amount):
        """Setter - validates balance cannot be negative"""
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self._balance += amount
        print(f"Deposited \${amount}. New balance: \${self._balance}")
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        print(f"Withdrew \${amount}. New balance: \${self._balance}")

# Usage
account = BankAccount("ACC001", 1000)
print(f"Balance: \${account.balance}")
account.deposit(500)
account.withdraw(200)
# account.balance = -100  # Raises ValueError`
        },
        {
            title: "Lab 5: Abstract Base Class",
            desc: "Create abstract `Shape` class with abstract `area()` method. Implement concrete `Circle` and `Rectangle` classes.",
            code: `from abc import ABC, abstractmethod
import math

class Shape(ABC):
    """Abstract base class for all shapes"""
    
    @abstractmethod
    def area(self):
        """Calculate and return area - must be implemented by subclasses"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Calculate and return perimeter - must be implemented by subclasses"""
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# Usage
# shape = Shape()  # ERROR: Cannot instantiate abstract class
circle = Circle(5)
rect = Rectangle(4, 6)

print(f"Circle area: {circle.area():.2f}")
print(f"Rectangle area: {rect.area()}")`
        },
        {
            title: "Lab 6: JSON Serialization",
            desc: "Save and load a list of student objects using JSON format.",
            code: `import json

class Student:
    def __init__(self, name, age, courses):
        self.name = name
        self.age = age
        self.courses = courses
    
    def to_dict(self):
        """Convert object to dictionary for JSON"""
        return {
            'name': self.name,
            'age': self.age,
            'courses': self.courses
        }
    
    @staticmethod
    def from_dict(data):
        """Create Student object from dictionary"""
        return Student(data['name'], data['age'], data['courses'])

# Create students
students = [
    Student("Alice", 20, ["CSIT121", "CSIT128"]),
    Student("Bob", 21, ["CSIT121", "ISIT121"])
]

# Save to JSON file
with open("students.json", "w") as f:
    student_dicts = [s.to_dict() for s in students]
    json.dump(student_dicts, f, indent=4)
    print("Data saved to students.json")

# Load from JSON file
with open("students.json", "r") as f:
    loaded_data = json.load(f)
    loaded_students = [Student.from_dict(d) for d in loaded_data]
    
    for student in loaded_students:
        print(f"{student.name} ({student.age}) - {student.courses}")`
        },
        {
            title: "Lab 7: Matplotlib - Sales Data Visualization",
            desc: "Create multiple chart types to visualize monthly sales data.",
            code: `import matplotlib.pyplot as plt

# Sample data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [45000, 52000, 48000, 61000, 58000, 65000]
expenses = [30000, 32000, 31000, 35000, 34000, 36000]

# Create figure with 3 subplots
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(15, 4))

# 1. Line plot
ax1.plot(months, sales, marker='o', color='green', label='Sales')
ax1.plot(months, expenses, marker='s', color='red', label='Expenses')
ax1.set_title('Monthly Sales vs Expenses')
ax1.set_xlabel('Month')
ax1.set_ylabel('Amount ($)')
ax1.legend()
ax1.grid(True)

# 2. Bar chart
profit = [s - e for s, e in zip(sales, expenses)]
ax2.bar(months, profit, color='blue', alpha=0.7)
ax2.set_title('Monthly Profit')
ax2.set_xlabel('Month')
ax2.set_ylabel('Profit ($)')
ax2.axhline(y=0, color='black', linestyle='-', linewidth=0.5)

# 3. Scatter plot
ax3.scatter(expenses, sales, s=100, c='purple', alpha=0.6)
ax3.set_title('Sales vs Expenses Correlation')
ax3.set_xlabel('Expenses ($)')
ax3.set_ylabel('Sales ($)')
ax3.grid(True)

plt.tight_layout()
plt.show()`
        },
        {
            title: "Lab 8: Design Patterns - Singleton & Observer",
            desc: "Implement Singleton pattern for database connection and Observer pattern for notifications.",
            code: `# SINGLETON PATTERN
class Database:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connection = "Database Connected"
        return cls._instance
    
    def query(self, sql):
        return f"Executing: {sql}"

# Test Singleton
db1 = Database()
db2 = Database()
print(db1 is db2)  # True - same instance

# OBSERVER PATTERN
class NewsPublisher:
    def __init__(self):
        self._subscribers = []
    
    def subscribe(self, subscriber):
        self._subscribers.append(subscriber)
        print(f"{subscriber.name} subscribed")
    
    def unsubscribe(self, subscriber):
        self._subscribers.remove(subscriber)
        print(f"{subscriber.name} unsubscribed")
    
    def notify(self, news):
        print(f"\\nPublishing: {news}")
        for subscriber in self._subscribers:
            subscriber.update(news)

class Subscriber:
    def __init__(self, name):
        self.name = name
    
    def update(self, news):
        print(f"  {self.name} received: {news}")

# Test Observer
publisher = NewsPublisher()
alice = Subscriber("Alice")
bob = Subscriber("Bob")

publisher.subscribe(alice)
publisher.subscribe(bob)
publisher.notify("Python 3.13 Released!")
publisher.unsubscribe(bob)
publisher.notify("New AI Features Added")`
        }
    ],

    "CSIT128": [
        {
            title: "Lab 1: HTML Form with Validation",
            desc: "Create a registration form with various input types and HTML5 validation.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>
    <h2>User Registration</h2>
    <form action="/submit" method="post">
        <!-- Text Input -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" 
               required minlength="3" maxlength="20"
               pattern="[A-Za-z0-9]+" 
               title="Only letters and numbers allowed">
        <br><br>
        
        <!-- Email Input -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        
        <!-- Password Input -->
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" 
               required minlength="8">
        <br><br>
        
        <!-- Radio Buttons -->
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br><br>
        
        <!-- Checkboxes -->
        <label>Interests:</label><br>
        <input type="checkbox" id="coding" name="interests" value="coding">
        <label for="coding">Coding</label><br>
        <input type="checkbox" id="gaming" name="interests" value="gaming">
        <label for="gaming">Gaming</label>
        <br><br>
        
        <!-- Dropdown -->
        <label for="country">Country:</label>
        <select id="country" name="country" required>
            <option value="">-- Select --</option>
            <option value="au">Australia</option>
            <option value="us">USA</option>
            <option value="uk">UK</option>
        </select>
        <br><br>
        
        <!-- Submit Button -->
        <input type="submit" value="Register">
    </form>
</body>
</html>`
        },
        {
            title: "Lab 2: JavaScript Regex Validation",
            desc: "Implement validation functions using regex patterns for common formats.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Validation Demo</title>
    <script>
        function validateCode() {
            // Format: 2 uppercase letters + 3 digits (e.g., AB123)
            let code = document.getElementById("code").value;
            let pattern = /^[A-Z]{2}\\d{3}$/;
            
            if (!pattern.test(code)) {
                alert("Invalid code! Format: AB123");
                return false;
            }
            return true;
        }
        
        function validatePhone() {
            // Australian mobile: 04XX XXX XXX
            let phone = document.getElementById("phone").value;
            let pattern = /^04\\d{8}$/;
            
            if (!pattern.test(phone)) {
                alert("Invalid phone! Format: 04XXXXXXXX");
                return false;
            }
            return true;
        }
        
        function validateEmail() {
            // Basic email pattern
            let email = document.getElementById("email").value;
            let pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
            
            if (!pattern.test(email)) {
                alert("Invalid email format!");
                return false;
            }
            return true;
        }
        
        function validatePostcode() {
            // Australian postcode: 4 digits
            let postcode = document.getElementById("postcode").value;
            let pattern = /^\\d{4}$/;
            
            if (!pattern.test(postcode)) {
                alert("Invalid postcode! Must be 4 digits.");
                return false;
            }
            return true;
        }
        
        function validateAll() {
            return validateCode() && validatePhone() && 
                   validateEmail() && validatePostcode();
        }
    </script>
</head>
<body>
    <h2>Validation Demo</h2>
    <form onsubmit="return validateAll()">
        Code (AB123): <input type="text" id="code"><br><br>
        Phone (04XXXXXXXX): <input type="text" id="phone"><br><br>
        Email: <input type="text" id="email"><br><br>
        Postcode (XXXX): <input type="text" id="postcode"><br><br>
        <input type="submit" value="Validate">
    </form>
</body>
</html>`
        },
        {
            title: "Lab 3: DOM Manipulation & Events",
            desc: "Interactive page demonstrating various DOM manipulation techniques and event handlers.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>DOM Demo</title>
    <style>
        .highlight { background-color: yellow; }
        .hidden { display: none; }
        #output { border: 1px solid black; padding: 10px; margin: 10px 0; }
    </style>
</head>
<body>
    <h2>DOM Manipulation Demo</h2>
    
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button onclick="greet()">Greet</button>
    <button onclick="changeStyle()">Change Style</button>
    <button onclick="toggleVisibility()">Toggle Paragraph</button>
    <button onclick="addItem()">Add Item</button>
    
    <p id="greeting">Greeting will appear here</p>
    <p id="togglePara">This paragraph can be hidden/shown</p>
    
    <div id="output"></div>
    
    <ul id="itemList"></ul>
    
    <script>
        function greet() {
            let name = document.getElementById("nameInput").value;
            let greeting = document.getElementById("greeting");
            
            if (name === "") {
                alert("Please enter your name!");
                return;
            }
            
            greeting.textContent = "Hello, " + name + "!";
            greeting.style.color = "blue";
            greeting.style.fontSize = "24px";
        }
        
        function changeStyle() {
            let para = document.getElementById("greeting");
            para.classList.toggle("highlight");
        }
        
        function toggleVisibility() {
            let para = document.getElementById("togglePara");
            para.classList.toggle("hidden");
        }
        
        let itemCount = 0;
        function addItem() {
            itemCount++;
            
            // Create new list item
            let li = document.createElement("li");
            li.textContent = "Item " + itemCount;
            
            // Add click event to remove item
            li.onclick = function() {
                this.remove();
            };
            
            // Append to list
            document.getElementById("itemList").appendChild(li);
        }
        
        // Timer Demo
        let counter = 0;
        let intervalId = setInterval(function() {
            counter++;
            document.getElementById("output").innerHTML = 
                "Timer: " + counter + " seconds<br>" +
                "<button onclick='stopTimer()'>Stop Timer</button>";
        }, 1000);
        
        function stopTimer() {
            clearInterval(intervalId);
            document.getElementById("output").innerHTML += "<br>Timer stopped!";
        }
    </script>
</body>
</html>`
        },
        {
            title: "Lab 4: CSS Styling Challenge",
            desc: "Comprehensive CSS example demonstrating selectors, specificity, box model, and positioning.",
            code: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Global Reset */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        
        /* ID Selector (High specificity) */
        #header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        /* Class Selector */
        .card {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Descendant Selector */
        .card p {
            color: #555;
            line-height: 1.6;
        }
        
        /* Child Selector (Direct children only) */
        .card > h3 {
            color: #e74c3c;
            border-bottom: 2px solid #e74c3c;
            padding-bottom: 10px;
        }
        
        /* Pseudo-classes */
        .button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .button:hover {
            background-color: #2980b9;
        }
        
        /* Position Examples */
        .fixed-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #333;
            color: white;
            padding: 10px;
            z-index: 1000;
        }
        
        .relative-box {
            position: relative;
            background: #ecf0f1;
            padding: 30px;
            margin: 20px 0;
        }
        
        .absolute-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #e74c3c;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div id="header">
        <h1>CSS Demonstration</h1>
    </div>
    
    <div class="card">
        <h3>Box Model Example</h3>
        <p>This card demonstrates padding, border, and margin.</p>
        <button class="button">Hover Me!</button>
    </div>
    
    <div class="card relative-box">
        <span class="absolute-badge">NEW</span>
        <h3>Positioning Example</h3>
        <p>This uses relative positioning with an absolute badge.</p>
    </div>
</body>
</html>`
        },
        {
            title: "Lab 5: AJAX with JSON",
            desc: "Fetch data from an API and display it dynamically on the page.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>AJAX Demo</title>
    <style>
        #loading { color: blue; }
        #error { color: red; }
        .user-card {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h2>AJAX Data Fetching Demo</h2>
    <button onclick="loadUsers()">Load Users</button>
    <button onclick="loadWithFetch()">Load with Fetch API</button>
    
    <div id="loading" style="display:none;">Loading...</div>
    <div id="error"></div>
    <div id="output"></div>
    
    <script>
        // Method 1: XMLHttpRequest (Traditional)
        function loadUsers() {
            document.getElementById("loading").style.display = "block";
            document.getElementById("error").textContent = "";
            document.getElementById("output").innerHTML = "";
            
            let xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.getElementById("loading").style.display = "none";
                    
                    if (xhr.status === 200) {
                        let users = JSON.parse(xhr.responseText);
                        displayUsers(users.slice(0, 5)); // Show first 5
                    } else {
                        document.getElementById("error").textContent = 
                            "Error: " + xhr.status;
                    }
                }
            };
            
            xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
            xhr.send();
        }
        
        // Method 2: Fetch API (Modern)
        function loadWithFetch() {
            document.getElementById("loading").style.display = "block";
            document.getElementById("error").textContent = "";
            document.getElementById("output").innerHTML = "";
            
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("HTTP " + response.status);
                    }
                    return response.json();
                })
                .then(users => {
                    document.getElementById("loading").style.display = "none";
                    displayUsers(users.slice(0, 5));
                })
                .catch(error => {
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("error").textContent = 
                        "Error: " + error.message;
                });
        }
        
        function displayUsers(users) {
            let html = "<h3>Users:</h3>";
            
            users.forEach(user => {
                html += \`
                    <div class="user-card">
                        <h4>\${user.name}</h4>
                        <p><strong>Email:</strong> \${user.email}</p>
                        <p><strong>City:</strong> \${user.address.city}</p>
                    </div>
                \`;
            });
            
            document.getElementById("output").innerHTML = html;
        }
    </script>
</body>
</html>`
        },
        {
            title: "Lab 6: XML & XSLT Transformation",
            desc: "Transform XML data to HTML using XSLT for display in a browser.",
            code: `<!-- books.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="books.xsl"?>
<library>
    <book category="programming">
        <title>Python Crash Course</title>
        <author>Eric Matthes</author>
        <year>2023</year>
        <price>39.99</price>
    </book>
    <book category="web">
        <title>HTML & CSS</title>
        <author>Jon Duckett</author>
        <year>2022</year>
        <price>29.99</price>
    </book>
    <book category="programming">
        <title>Clean Code</title>
        <author>Robert Martin</author>
        <year>2021</year>
        <price>44.99</price>
    </book>
</library>

<!-- books.xsl -->
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
    <head>
        <title>Library Catalog</title>
        <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #4CAF50; color: white; }
            tr:nth-child(even) { background-color: #f2f2f2; }
            .expensive { color: red; font-weight: bold; }
        </style>
    </head>
    <body>
        <h1>Library Catalog</h1>
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
            
            <!-- Loop through books sorted by price -->
            <xsl:for-each select="library/book">
                <xsl:sort select="price" data-type="number" order="ascending"/>
                <tr>
                    <td><xsl:value-of select="title"/></td>
                    <td><xsl:value-of select="author"/></td>
                    <td><xsl:value-of select="year"/></td>
                    <td>
                        <!-- Conditional formatting for expensive books -->
                        <xsl:choose>
                            <xsl:when test="price &gt; 35">
                                <span class="expensive">
                                    $<xsl:value-of select="price"/>
                                </span>
                            </xsl:when>
                            <xsl:otherwise>
                                $<xsl:value-of select="price"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </td>
                    <td><xsl:value-of select="@category"/></td>
                </tr>
            </xsl:for-each>
        </table>
        
        <h2>Programming Books Only</h2>
        <ul>
            <xsl:for-each select="library/book[@category='programming']">
                <li><xsl:value-of select="title"/> by <xsl:value-of select="author"/></li>
            </xsl:for-each>
        </ul>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>`
        },
        {
            title: "Lab 7: HTML5 Canvas Drawing",
            desc: "Create various shapes and interactive drawings using Canvas API.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Canvas Demo</title>
    <style>
        canvas {
            border: 2px solid black;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h2>HTML5 Canvas Examples</h2>
    
    <h3>Basic Shapes</h3>
    <canvas id="canvas1" width="500" height="300"></canvas>
    
    <h3>Interactive Drawing</h3>
    <canvas id="canvas2" width="500" height="300"></canvas>
    <button onclick="clearCanvas()">Clear</button>
    
    <script>
        // Canvas 1: Basic Shapes
        let canvas1 = document.getElementById("canvas1");
        let ctx1 = canvas1.getContext("2d");
        
        // Rectangle
        ctx1.fillStyle = "red";
        ctx1.fillRect(50, 50, 100, 80);
        
        // Outline Rectangle
        ctx1.strokeStyle = "blue";
        ctx1.lineWidth = 3;
        ctx1.strokeRect(200, 50, 100, 80);
        
        // Circle
        ctx1.beginPath();
        ctx1.arc(100, 200, 40, 0, 2 * Math.PI);
        ctx1.fillStyle = "green";
        ctx1.fill();
        
        // Line
        ctx1.beginPath();
        ctx1.moveTo(250, 150);
        ctx1.lineTo(350, 200);
        ctx1.lineTo(450, 150);
        ctx1.strokeStyle = "purple";
        ctx1.lineWidth = 5;
        ctx1.stroke();
        
        // Text
        ctx1.font = "30px Arial";
        ctx1.fillStyle = "black";
        ctx1.fillText("Canvas Demo!", 300, 250);
        
        // Canvas 2: Interactive Drawing
        let canvas2 = document.getElementById("canvas2");
        let ctx2 = canvas2.getContext("2d");
        let isDrawing = false;
        
        canvas2.addEventListener("mousedown", function(e) {
            isDrawing = true;
            ctx2.beginPath();
            ctx2.moveTo(e.offsetX, e.offsetY);
        });
        
        canvas2.addEventListener("mousemove", function(e) {
            if (isDrawing) {
                ctx2.lineTo(e.offsetX, e.offsetY);
                ctx2.strokeStyle = "black";
                ctx2.lineWidth = 2;
                ctx2.stroke();
            }
        });
        
        canvas2.addEventListener("mouseup", function() {
            isDrawing = false;
        });
        
        canvas2.addEventListener("mouseleave", function() {
            isDrawing = false;
        });
        
        function clearCanvas() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        }
    </script>
</body>
</html>`
        },
        {
            title: "Lab 8: Drag and Drop Interface",
            desc: "Implement drag-and-drop functionality to move items between containers.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Drag & Drop Demo</title>
    <style>
        .container {
            display: inline-block;
            width: 200px;
            min-height: 300px;
            border: 2px solid #333;
            margin: 10px;
            padding: 10px;
            vertical-align: top;
        }
        
        .item {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            margin: 5px 0;
            cursor: move;
            border-radius: 5px;
        }
        
        .item:hover {
            opacity: 0.8;
        }
        
        .container.drag-over {
            background-color: #e0e0e0;
            border-style: dashed;
        }
    </style>
</head>
<body>
    <h2>Drag & Drop Demo</h2>
    <p>Drag items between containers</p>
    
    <div class="container" id="container1" 
         ondrop="drop(event)" ondragover="allowDrop(event)" 
         ondragleave="dragLeave(event)">
        <h3>Container 1</h3>
        <div class="item" draggable="true" ondragstart="drag(event)" id="item1">
            Item 1
        </div>
        <div class="item" draggable="true" ondragstart="drag(event)" id="item2">
            Item 2
        </div>
        <div class="item" draggable="true" ondragstart="drag(event)" id="item3">
            Item 3
        </div>
    </div>
    
    <div class="container" id="container2" 
         ondrop="drop(event)" ondragover="allowDrop(event)"
         ondragleave="dragLeave(event)">
        <h3>Container 2</h3>
        <div class="item" draggable="true" ondragstart="drag(event)" id="item4">
            Item 4
        </div>
    </div>
    
    <div class="container" id="container3" 
         ondrop="drop(event)" ondragover="allowDrop(event)"
         ondragleave="dragLeave(event)">
        <h3>Container 3</h3>
    </div>
    
    <script>
        function allowDrop(ev) {
            ev.preventDefault();  // CRITICAL: Must prevent default!
            ev.currentTarget.classList.add("drag-over");
        }
        
        function dragLeave(ev) {
            ev.currentTarget.classList.remove("drag-over");
        }
        
        function drag(ev) {
            // Store the ID of dragged element
            ev.dataTransfer.setData("text", ev.target.id);
            ev.target.style.opacity = "0.5";
        }
        
        function drop(ev) {
            ev.preventDefault();
            ev.currentTarget.classList.remove("drag-over");
            
            // Get the dragged element's ID
            let data = ev.dataTransfer.getData("text");
            let draggedElement = document.getElementById(data);
            
            // Reset opacity
            draggedElement.style.opacity = "1";
            
            // Append to drop target (if it's a container)
            if (ev.target.className === "container" || 
                ev.target.parentElement.className === "container") {
                let container = ev.target.className === "container" ? 
                    ev.target : ev.target.parentElement;
                container.appendChild(draggedElement);
            }
        }
        
        // Prevent items from having drag-over effect
        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('dragover', function(ev) {
                ev.stopPropagation();
            });
        });
    </script>
</body>
</html>`
        }
    ]
};
