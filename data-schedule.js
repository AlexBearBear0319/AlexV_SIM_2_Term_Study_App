/* ==========================================================================
   DATA SOURCE: SCHEDULE (UPDATED - START WED 2PM)
   ========================================================================== */

/* ==========================================================================
   DATA SOURCE: SCHEDULE (UPDATED - CORRECTED LINKS)
   ========================================================================== */

const scheduleData = [
    {
        day: "Day 1: Wednesday (Today)",
        focus: "Kickoff: OOP Core & Web Basics",
        tasks: [
            "14:00 - 18:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 0)\">L3 Classes & Objects</button>. Practice `__init__`.",
            "14:00 - 18:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 4)\">L7 Properties</button>. Use `@property`.",
            "14:00 - 18:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 2)\">L5 Inheritance</button>. Complete Lab 3.",
            "19:30 - 22:30 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 2)\">L3 HTML Forms</button>. Input types.",
            "19:30 - 22:30 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 3)\">L4 CSS Basics</button>. Specificity rules."
        ]
    },
    {
        day: "Day 2: Thursday",
        focus: "Validation & Robustness",
        tasks: [
            "09:00 - 12:00 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 4)\">L5 Validation & Regex</button>. Master `^[A-Z]{3}$`.",
            "13:00 - 17:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 3)\">L6 Exceptions</button>. `try...except` blocks.",
            "13:00 - 17:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 5)\">L8 File I/O</button>. Reading CSVs.",
            "19:00 - 22:00 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 5)\">L6 Events & DOM</button>. `getElementById`.",
            "19:00 - 22:00 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 9)\">L10 Canvas & Drag/Drop</button>."
        ]
    },
    {
        day: "Day 3: Friday (Awards Night)",
        focus: "Data Handling (Hard Stop @ 3:30pm)",
        tasks: [
            "09:00 - 12:00 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 6)\">L7 XML & DTD/XSD</button>. Validation rules.",
            "09:00 - 12:00 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 7)\">L8 XSLT</button>. `for-each` loops.",
            "13:00 - 15:30 [CSIT128]: <button class='link-btn' onclick=\"renderNote('CSIT128', 8)\">L9 JSON & AJAX</button>. *Critical Topic*.",
            "15:30 - Onwards: Stop studying. Prepare for SIM Sports Awards Night."
        ]
    },
    {
        day: "Day 4: Saturday",
        focus: "Double Mock Exam Day",
        tasks: [
            "09:00 - 12:00 [CSIT121]: Full Coding Run. Do Questions 1, 2 & 3 from `CSIT121_practice.pdf`.",
            "13:00 - 16:00 [CSIT128]: Full MCQ Run. Do all 50+ questions in this app.",
            "19:00 - 21:00 [Review]: <button class='link-btn' onclick=\"renderNote('CSIT121', 8)\">L11 Design Patterns</button> (Singleton/Facade).",
            "19:00 - 21:00 [Review]: <button class='link-btn' onclick=\"renderNote('CSIT121', 6)\">L9 Regex (Python)</button>."
        ]
    },
    {
        day: "Day 5: Sunday",
        focus: "Final Polish & Rest",
        tasks: [
            "09:00 - 12:00 [CSIT121]: <button class='link-btn' onclick=\"renderNote('CSIT121', 5)\">L8 Pickle Serialization</button>.",
            "09:00 - 12:00 [CSIT121]: Review Magic Methods (`__str__`, `__eq__`) in <button class='link-btn' onclick=\"renderNote('CSIT121', 0)\">L3 Notes</button>.",
            "13:00 - 16:00 [CSIT128]: Final Review of <button class='link-btn' onclick=\"renderNote('CSIT128', 4)\">L5 Regex</button>.",
            "17:00 - 21:00 [Relax]: Pack your bag. Sleep by 10pm."
        ]
    }
];

const examTips = {
    "CSIT121": [
        "<h3 style='color: var(--accent-py); margin-top: 0;'>📋 Exam Format</h3>",
        "<b>Part A - Short Questions (45 marks):</b> 6 questions covering theory and code analysis",
        "<b>Part B - Long Questions (55 marks):</b> 3 coding questions (~30 mins each), full Python programs required",
        "<b>Total Time:</b> 2 hours (120 minutes)",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>🎯 Key Question Types</h3>",
        "<b>1. \"Find the Error\" Questions:</b> Answer format: \"Line 2, 3\" or \"Line numbers: 2, 3\" - Just list the line numbers!",
        "<b>2. \"What is the output\" Questions:</b> Write exact output including quotes. Format:<br>\"2\"<br>\"3 4\"<br>\"line number 4\" (if runtime error)",
        "<b>3. Relations Between Classes:</b> Understand inheritance hierarchies, composition, and aggregation",
        "<b>4. OOD and OOP:</b> Know UML diagrams completely - properties, methods, relationships (rect/radius/diameter examples)",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>🔥 Critical Topics to Master</h3>",
        "<b>Encapsulation:</b> Get and set methods, private variables with __",
        "<b>Instance vs Static Methods:</b> Know when to use <code>@staticmethod</code> and <code>@classmethod</code>",
        "<b>__eq__ Method:</b> Implement equality comparison between objects",
        "<b>Immutability:</b> Lists are mutable, tuples are immutable - know the implications",
        "<b>Inheritance Rules:</b> Method overriding, <code>super()</code>, method resolution order (MRO)",
        "<b>Multiple Inheritance:</b> Won't be tested according to prof!",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>📝 Output Tracing Tips</h3>",
        "Example: \"What's the output of lines 17, 19, 20, 22-24, 26-28?\"<br>Expected answer format:<br>\"ClassA memory address={id(self)}\"<br>\"Access methodA\"<br>\"Access methodC\"...",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>💻 Code Writing Essentials</h3>",
        "<b>Don't forget <code>self</code>:</b> Every instance method needs self as first parameter!",
        "<b>Abstract Methods:</b> Import correctly: <code>from abc import ABC, abstractmethod</code>",
        "<b>@property Decorator:</b> Use without parenthesis when calling (difference from normal getMethod())",
        "<b>isinstance():</b> Check if object is in list/memory using 'if isinstance(obj, ClassName)'",
        "<b>Module/Class/Decorator:</b> Know import statements and decorator syntax",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>⚠️ Exception Handling</h3>",
        "<b>Keywords:</b> try, except, else (optional), finally (optional)",
        "<b>Loop Placement:</b> Put the while loop OUTSIDE of try when creating own exceptions",
        "Example with number=0: \"Dividebyzero error: division by zero\"<br>\"Executed all the time\"",
        "Example with number='b': \"Valueerror: invalid literal for int() with base 10: 'b'\"",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>📂 File I/O Critical Steps</h3>",
        "<b>1. Open and read:</b> Use <code>with open('file.txt', 'r') as f:</code>",
        "<b>2. Process each line:</b> Use <code>line.strip().split(',')</code> for CSV data",
        "<b>3. Write to file:</b> Open with 'w' mode, use print statements with file parameter",
        "<b>4. Store to txt:</b> Know how to save processed data back to files",

        "<h3 style='color: var(--accent-py); margin-top: 20px;'>🔄 Serialization (Pickle)</h3>",
        "<b>dump:</b> Serialize object to file - <code>pickle.dump(obj, file)</code>",
        "<b>dumps:</b> Serialize object to bytes - <code>pickle.dumps(obj)</code>",
        "<b>load:</b> Deserialize from file - <code>pickle.load(file)</code>",
        "<b>loads:</b> Deserialize from bytes - <code>pickle.loads(bytes)</code>",
        "<b>Abstract Classes:</b> Import <code>from abc import ABC, abstractmethod</code>. Cannot instantiate ABC.",
        "<b>Magic Methods:</b> <code>__str__</code> for user display, <code>__repr__</code> for developers, <code>__eq__</code> for equality.",
        "<b>Time Management:</b> Spend 5-10 minutes on reading questions, 10-15 minutes per coding question.",
        "<h3 style='color: var(--accent-py); margin-top: 20px;'>💡 Tips from Hee Siang</h3>",
        "<b>Read Carefully:</b> Underline variable names and check indentation-sensitive lines.",
        "<b>Trace By Hand:</b> For output-tracing questions, write variable states on paper for 2–3 steps.",
        "<b>Plan First:</b> Sketch the function/class signatures, then implement one helper at a time.",
        "<b>Edge Cases:</b> Consider empty inputs, single items, and negative values before coding.",
        "<b>Time Split:</b> 5 minutes reading, 15–25 minutes coding, 5–10 minutes review for each long question.",
        "<h4 style='margin-top:12px;'>Example Question 1 — Find the Error</h4>",
        "<pre><code>def add_items(lst)\n    total = 0\n    for i in lst:\n        total += i\n    return total</code></pre>",
        "<b>Answer:</b> Line 1 — missing colon at end of function definition. Fix: <code>def add_items(lst):</code>",
        "<b>Explanation:</b> Missing ':' at function header causes SyntaxError; check def lines first.",
        "<h4 style='margin-top:12px;'>Example Question 2 — Output Tracing</h4>",
        "<pre><code>class A:\n    def __init__(self, x):\n        self.x = x\n    def inc(self):\n        self.x += 1\na = A(2)\nb = a\nb.inc()\nprint(a.x)</code></pre>",
        "<b>Answer:</b> <code>3</code>",
        "<b>Explanation:</b> <code>b</code> references same object as <code>a</code>; inc() increments shared attribute.",
        "<h4 style='margin-top:12px;'>Example Question 3 — Short Coding (Outline)</h4>",
        "<b>Question:</b> Outline a function that checks whether two lists contain the same elements (order not important).",
        "<b>Answer (sketch):</b> Sort both lists or use collections.Counter to compare element counts. Example: <code>from collections import Counter\nreturn Counter(a) == Counter(b)</code>",
        "<b>Why it works:</b> Counters compare element frequencies, handling duplicates correctly."
    ],
    "CSIT128": [
        "<h3 style='color: var(--accent-web); margin-top: 0;'>📋 Exam Coverage</h3>",
        "<b>HTML:</b> Tags and how they work - semantic HTML, form elements, attributes",
        "<b>CSS:</b> Solve styling issues - specificity, box model, positioning, flexbox",
        "<b>JavaScript:</b> Questions from notes and assignments - focus on fundamentals",
        "<b>Data Transmission:</b> XML, XSD, XSL - structure, validation, transformation",
        "<b>Drag and Drop:</b> HTML5 drag and drop API - events and implementation",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🏷️ HTML Essentials</h3>",
        "<b>Form Elements:</b> text, password, radio, checkbox, select, textarea - know attributes!",
        "<b>Input Types:</b> email, number, date, tel, url - built-in validation",
        "<b>Form Attributes:</b> <code>action</code>, <code>method</code>, <code>name</code>, <code>value</code>, <code>required</code>, <code>pattern</code>",
        "<b>Semantic Tags:</b> &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;",
        "<b>Tables:</b> <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🎨 CSS Problem Solving</h3>",
        "<b>Specificity:</b> Inline (1000) > ID (100) > Class (10) > Element (1)",
        "<b>Box Model:</b> content → padding → border → margin (use box-sizing: border-box)",
        "<b>Positioning:</b> static, relative, absolute, fixed, sticky - know the differences!",
        "<b>Flexbox:</b> justify-content (main axis), align-items (cross axis), flex-direction",
        "<b>Common Issues:</b> Collapsing margins, z-index stacking, overflow problems",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>⚡ JavaScript Fundamentals</h3>",
        "<b>DOM Selection:</b> <code>getElementById()</code>, <code>querySelector()</code>, <code>querySelectorAll()</code>",
        "<b>Event Handling:</b> <code>addEventListener('click', function)</code> - remember event.preventDefault()",
        "<b>Form Validation:</b> Check values, regex patterns, <code>return false;</code> to prevent submission",
        "<b>DOM Manipulation:</b> <code>innerHTML</code>, <code>textContent</code>, <code>createElement()</code>, <code>appendChild()</code>",
        "<b>Array Methods:</b> forEach, map, filter, find - know when to use each",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>📄 XML/XSD/DTD</h3>",
        "<b>Well-formed XML:</b> One root element, proper nesting, closing tags, case-sensitive",
        "<b>DTD Syntax:</b> <!ELEMENT>, <!ATTLIST>, #PCDATA, #REQUIRED, #IMPLIED",
        "<b>XSD Schema:</b> &lt;xs:element&gt;, &lt;xs:attribute&gt;, types (string, int, date), restrictions",
        "<b>Validation:</b> Ensure XML matches DTD/XSD structure and data type rules",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🔄 XSLT Transformations</h3>",
        "<b>for-each:</b> Loop through XML nodes - <code>&lt;xsl:for-each select=\"path\"&gt;</code>",
        "<b>value-of:</b> Extract node value - <code>&lt;xsl:value-of select=\"path\"/&gt;</code>",
        "<b>sort:</b> Order results - <code>&lt;xsl:sort select=\"field\" order=\"ascending\"/&gt;</code>",
        "<b>Templates:</b> <code>&lt;xsl:template match=\"path\"&gt;</code> for reusable patterns",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>📡 JSON & AJAX</h3>",
        "<b>JSON Methods:</b> <code>JSON.parse()</code> - string to object, <code>JSON.stringify()</code> - object to string",
        "<b>JSON Format:</b> Use double quotes for keys and strings. Arrays [ ], objects { }",
        "<b>AJAX Status:</b> Check <code>xhr.readyState === 4 && xhr.status === 200</code>",
        "<b>Async Requests:</b> <code>xhr.open('GET', url, true)</code> - third param = async",
        "<b>Response Handling:</b> <code>xhr.onreadystatechange</code> callback function",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🎯 Drag and Drop API</h3>",
        "<b>Draggable:</b> Set <code>draggable=\"true\"</code> attribute on elements",
        "<b>Drag Events:</b> dragstart, drag, dragend, dragenter, dragover, dragleave, drop",
        "<b>DataTransfer:</b> <code>event.dataTransfer.setData()</code> and <code>getData()</code>",
        "<b>Prevent Default:</b> Must call <code>event.preventDefault()</code> in dragover and drop handlers",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🎨 HTML5 Canvas</h3>",
        "<b>Context:</b> Get with <code>canvas.getContext('2d')</code>",
        "<b>Paths:</b> Always <code>ctx.beginPath()</code> before drawing new shapes",
        "<b>Drawing:</b> <code>moveTo(x,y)</code>, <code>lineTo(x,y)</code>, <code>arc()</code>, <code>rect()</code>",
        "<b>Styling:</b> <code>fillStyle</code>, <code>strokeStyle</code>, <code>lineWidth</code>",
        "<b>Rendering:</b> <code>fill()</code> or <code>stroke()</code> to actually draw",

        "<h3 style='color: var(--accent-web); margin-top: 20px;'>🔍 Regex Patterns</h3>",
        "<b>Anchors:</b> <code>^</code> = start, <code>$</code> = end",
        "<b>Character Classes:</b> <code>\\d</code> = digit, <code>\\w</code> = word char, <code>\\s</code> = whitespace",
        "<b>Quantifiers:</b> <code>+</code> = one or more, <code>*</code> = zero or more, <code>?</code> = optional",
        "<b>Sets:</b> <code>[A-Z]</code> = uppercase, <code>[0-9]</code> = digits, <code>[a-z]</code> = lowercase"
    ]
};
