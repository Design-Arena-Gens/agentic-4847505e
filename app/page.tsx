'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('intro');
  const [progress, setProgress] = useState(0);
  const [demoOutput, setDemoOutput] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: number}>({});
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  useEffect(() => {
    const total = 8;
    setProgress((completedSections.length / total) * 100);
  }, [completedSections]);

  const markComplete = (section: string) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const runDemo = (code: string) => {
    try {
      const result = eval(code);
      setDemoOutput(String(result));
    } catch (error) {
      setDemoOutput(`Error: ${error}`);
    }
  };

  const checkQuiz = (quizId: string, selectedAnswer: number, correctAnswer: number) => {
    setQuizAnswers({ ...quizAnswers, [quizId]: selectedAnswer });
    if (selectedAnswer === correctAnswer) {
      markComplete(quizId);
    }
  };

  return (
    <div className="container">
      <div className="hero fade-in">
        <h1>🚀 Learn Angular & JavaScript ES6</h1>
        <p>Master modern web development with fun, practical examples!</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#999' }}>
          Progress: {Math.round(progress)}% complete
        </p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'intro' ? 'active' : ''}`}
          onClick={() => setActiveTab('intro')}
        >
          🎯 Start Here
        </button>
        <button
          className={`tab ${activeTab === 'es6' ? 'active' : ''}`}
          onClick={() => setActiveTab('es6')}
        >
          ⚡ ES6 Basics
        </button>
        <button
          className={`tab ${activeTab === 'es6-advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('es6-advanced')}
        >
          🔥 ES6 Advanced
        </button>
        <button
          className={`tab ${activeTab === 'angular-intro' ? 'active' : ''}`}
          onClick={() => setActiveTab('angular-intro')}
        >
          🅰️ Angular Intro
        </button>
        <button
          className={`tab ${activeTab === 'components' ? 'active' : ''}`}
          onClick={() => setActiveTab('components')}
        >
          🧩 Components
        </button>
        <button
          className={`tab ${activeTab === 'directives' ? 'active' : ''}`}
          onClick={() => setActiveTab('directives')}
        >
          🎨 Directives
        </button>
        <button
          className={`tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          🔧 Services
        </button>
        <button
          className={`tab ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          💪 Practice
        </button>
      </div>

      {activeTab === 'intro' && (
        <div className="fade-in">
          <div className="content-grid">
            <div className="card">
              <span className="emoji">👋</span>
              <h3>Welcome!</h3>
              <p>This interactive tutorial will teach you JavaScript ES6 and Angular from scratch. No prior experience needed!</p>
              <span className="badge badge-beginner">Beginner Friendly</span>
            </div>

            <div className="card">
              <span className="emoji">🎓</span>
              <h3>What You'll Learn</h3>
              <p>
                • JavaScript ES6 fundamentals<br/>
                • Arrow functions & destructuring<br/>
                • Angular components & templates<br/>
                • Services & dependency injection<br/>
                • Real-world applications
              </p>
            </div>

            <div className="card">
              <span className="emoji">🎮</span>
              <h3>Interactive Learning</h3>
              <p>Run code examples, solve quizzes, and build real projects as you learn!</p>
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab('es6')}
              >
                Start Learning →
              </button>
            </div>
          </div>

          <div className="fun-fact">
            <strong>Did you know?</strong> Angular is used by Google, Microsoft, and thousands of companies worldwide. It's one of the most popular frameworks for building web applications!
          </div>
        </div>
      )}

      {activeTab === 'es6' && (
        <div className="fade-in">
          <div className="card">
            <h3>⚡ ES6: The Modern JavaScript</h3>
            <p>ES6 (ECMAScript 2015) brought massive improvements to JavaScript. Let's learn the essentials!</p>
            <span className="badge badge-beginner">Level 1</span>
          </div>

          <div className="interactive-demo">
            <h3>1. Let & Const (Say goodbye to var!)</h3>
            <div className="code-block">
              <span className="comment">// Old way (var) - avoid this!</span><br/>
              <span className="keyword">var</span> name = <span className="string">'old'</span>;<br/><br/>

              <span className="comment">// Modern way</span><br/>
              <span className="keyword">let</span> age = <span className="string">25</span>; <span className="comment">// Can be reassigned</span><br/>
              <span className="keyword">const</span> PI = <span className="string">3.14</span>; <span className="comment">// Cannot be reassigned</span><br/>
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    let score = 10;
                    score = score + 5;
                    score
                  `);
                }}
              >
                Run Example
              </button>
            </div>
            {demoOutput && <div className="output">Output: {demoOutput}</div>}
          </div>

          <div className="interactive-demo">
            <h3>2. Arrow Functions (&rArr;)</h3>
            <div className="code-block">
              <span className="comment">// Old function</span><br/>
              <span className="keyword">function</span> <span className="function">add</span>(a, b) {'{'}<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> a + b;<br/>
              {'}'}<br/><br/>

              <span className="comment">// Arrow function - shorter & cleaner!</span><br/>
              <span className="keyword">const</span> <span className="function">add</span> = (a, b) =&gt; a + b;<br/><br/>

              <span className="comment">// Even cleaner for single parameter</span><br/>
              <span className="keyword">const</span> <span className="function">double</span> = x =&gt; x * 2;
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    const multiply = (a, b) => a * b;
                    multiply(7, 8)
                  `);
                }}
              >
                Run Arrow Function
              </button>
            </div>
          </div>

          <div className="interactive-demo">
            <h3>3. Template Literals (Backticks are awesome!)</h3>
            <div className="code-block">
              <span className="keyword">const</span> name = <span className="string">'Sarah'</span>;<br/>
              <span className="keyword">const</span> age = <span className="string">28</span>;<br/><br/>

              <span className="comment">// Old way - hard to read</span><br/>
              <span className="keyword">const</span> message = <span className="string">'Hello '</span> + name + <span className="string">', you are '</span> + age;<br/><br/>

              <span className="comment">// ES6 way - much better! 🎉</span><br/>
              <span className="keyword">const</span> message = <span className="string">`Hello ${'${name}'}, you are ${'${age}'}`</span>;
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    const hero = 'Spider-Man';
                    const power = 'web-slinging';
                    \`\${hero} is great at \${power}!\`
                  `);
                }}
              >
                Try Template Literals
              </button>
            </div>
          </div>

          <div className="quiz">
            <h3>🎯 Quick Quiz: ES6 Basics</h3>
            <p><strong>Which keyword should you use for values that won't change?</strong></p>
            <div
              className={`quiz-option ${quizAnswers['es6-q1'] === 1 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('es6-q1', 1, 2)}
            >
              A) let
            </div>
            <div
              className={`quiz-option ${quizAnswers['es6-q1'] === 2 ? 'correct' : ''}`}
              onClick={() => checkQuiz('es6-q1', 2, 2)}
            >
              B) const ✓
            </div>
            <div
              className={`quiz-option ${quizAnswers['es6-q1'] === 3 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('es6-q1', 3, 2)}
            >
              C) var
            </div>
          </div>
        </div>
      )}

      {activeTab === 'es6-advanced' && (
        <div className="fade-in">
          <div className="card">
            <h3>🔥 Advanced ES6 Features</h3>
            <p>Level up your JavaScript skills with these powerful features!</p>
            <span className="badge badge-intermediate">Level 2</span>
          </div>

          <div className="interactive-demo">
            <h3>4. Destructuring (Unpack like a pro!)</h3>
            <div className="code-block">
              <span className="comment">// Array destructuring</span><br/>
              <span className="keyword">const</span> [first, second] = [<span className="string">10</span>, <span className="string">20</span>, <span className="string">30</span>];<br/>
              <span className="comment">// first = 10, second = 20</span><br/><br/>

              <span className="comment">// Object destructuring - super useful!</span><br/>
              <span className="keyword">const</span> user = {'{ name: "Alex", age: 25, city: "NYC" }'};<br/>
              <span className="keyword">const</span> {'{ name, age }'} = user;<br/>
              <span className="comment">// name = "Alex", age = 25</span>
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    const person = { name: 'Emma', job: 'Developer', level: 'Senior' };
                    const { name, job } = person;
                    \`\${name} is a \${job}\`
                  `);
                }}
              >
                Try Destructuring
              </button>
            </div>
          </div>

          <div className="interactive-demo">
            <h3>5. Spread Operator (...)</h3>
            <div className="code-block">
              <span className="comment">// Combine arrays easily</span><br/>
              <span className="keyword">const</span> arr1 = [<span className="string">1</span>, <span className="string">2</span>, <span className="string">3</span>];<br/>
              <span className="keyword">const</span> arr2 = [<span className="string">4</span>, <span className="string">5</span>, <span className="string">6</span>];<br/>
              <span className="keyword">const</span> combined = [...arr1, ...arr2];<br/>
              <span className="comment">// [1, 2, 3, 4, 5, 6]</span><br/><br/>

              <span className="comment">// Copy and modify objects</span><br/>
              <span className="keyword">const</span> person = {'{ name: "John", age: 30 }'};<br/>
              <span className="keyword">const</span> updated = {'{ ...person, age: 31 }'};
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    const fruits = ['apple', 'banana'];
                    const veggies = ['carrot', 'broccoli'];
                    const food = [...fruits, ...veggies];
                    food.join(', ')
                  `);
                }}
              >
                Use Spread Operator
              </button>
            </div>
          </div>

          <div className="interactive-demo">
            <h3>6. Array Methods (map, filter, reduce)</h3>
            <div className="code-block">
              <span className="keyword">const</span> numbers = [<span className="string">1</span>, <span className="string">2</span>, <span className="string">3</span>, <span className="string">4</span>, <span className="string">5</span>];<br/><br/>

              <span className="comment">// map: transform each item</span><br/>
              <span className="keyword">const</span> doubled = numbers.<span className="function">map</span>(n =&gt; n * 2);<br/>
              <span className="comment">// [2, 4, 6, 8, 10]</span><br/><br/>

              <span className="comment">// filter: keep items that match</span><br/>
              <span className="keyword">const</span> evens = numbers.<span className="function">filter</span>(n =&gt; n % 2 === 0);<br/>
              <span className="comment">// [2, 4]</span><br/><br/>

              <span className="comment">// reduce: combine to single value</span><br/>
              <span className="keyword">const</span> sum = numbers.<span className="function">reduce</span>((total, n) =&gt; total + n, 0);<br/>
              <span className="comment">// 15</span>
            </div>
            <div className="demo-controls">
              <button
                className="btn btn-success"
                onClick={() => {
                  runDemo(`
                    const scores = [85, 90, 78, 92, 88];
                    const highScores = scores.filter(s => s >= 90);
                    'High scores: ' + highScores.join(', ')
                  `);
                }}
              >
                Filter High Scores
              </button>
            </div>
          </div>

          <div className="quiz">
            <h3>🎯 Quiz: Advanced ES6</h3>
            <p><strong>What does the spread operator (...) do?</strong></p>
            <div
              className={`quiz-option ${quizAnswers['es6-q2'] === 1 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('es6-q2', 1, 2)}
            >
              A) Deletes array elements
            </div>
            <div
              className={`quiz-option ${quizAnswers['es6-q2'] === 2 ? 'correct' : ''}`}
              onClick={() => checkQuiz('es6-q2', 2, 2)}
            >
              B) Expands/spreads array or object elements ✓
            </div>
            <div
              className={`quiz-option ${quizAnswers['es6-q2'] === 3 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('es6-q2', 3, 2)}
            >
              C) Creates a loop
            </div>
          </div>

          <div className="fun-fact">
            <strong>Pro Tip:</strong> Master map(), filter(), and reduce() - they're used everywhere in modern JavaScript and Angular!
          </div>
        </div>
      )}

      {activeTab === 'angular-intro' && (
        <div className="fade-in">
          <div className="card">
            <h3>🅰️ Welcome to Angular!</h3>
            <p>Angular is a powerful framework for building web applications. Built with TypeScript and loved by developers worldwide!</p>
            <span className="badge badge-beginner">Getting Started</span>
          </div>

          <div className="content-grid">
            <div className="card">
              <span className="emoji">🏗️</span>
              <h3>What is Angular?</h3>
              <p>Angular is a TypeScript-based framework for building dynamic web apps. It provides:</p>
              <p>
                • Component-based architecture<br/>
                • Two-way data binding<br/>
                • Dependency injection<br/>
                • Powerful CLI tools<br/>
                • Built-in routing
              </p>
            </div>

            <div className="card">
              <span className="emoji">🎯</span>
              <h3>Key Concepts</h3>
              <p>
                <strong>Components:</strong> Building blocks of your app<br/>
                <strong>Templates:</strong> HTML with Angular syntax<br/>
                <strong>Services:</strong> Reusable business logic<br/>
                <strong>Directives:</strong> Extend HTML behavior<br/>
                <strong>Modules:</strong> Organize your code
              </p>
            </div>

            <div className="card">
              <span className="emoji">🚀</span>
              <h3>Setup (Quick!)</h3>
              <div className="code-block" style={{ fontSize: '0.8rem' }}>
                <span className="comment"># Install Angular CLI</span><br/>
                npm install -g @angular/cli<br/><br/>

                <span className="comment"># Create new app</span><br/>
                ng new my-app<br/><br/>

                <span className="comment"># Run dev server</span><br/>
                ng serve
              </div>
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Your First Component Structure</h3>
            <div className="code-block">
              <span className="keyword">import</span> {'{ Component }'} <span className="keyword">from</span> <span className="string">'@angular/core'</span>;<br/><br/>

              @<span className="function">Component</span>({'{'}<br/>
              &nbsp;&nbsp;selector: <span className="string">'app-hello'</span>,<br/>
              &nbsp;&nbsp;template: <span className="string">`<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello {'{{name}}'}&lt;/h1&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;button (click)="sayHi()"&gt;Click me!&lt;/button&gt;<br/>
              &nbsp;&nbsp;`</span>,<br/>
              &nbsp;&nbsp;styles: [<span className="string">'h1 {"{ color: blue }"}'</span>]<br/>
              {'}'})<br/>
              <span className="keyword">export class</span> <span className="function">HelloComponent</span> {'{'}<br/>
              &nbsp;&nbsp;name = <span className="string">'Angular Developer'</span>;<br/><br/>

              &nbsp;&nbsp;<span className="function">sayHi</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;alert(<span className="string">`Hi, ${'${this.name}'}!`</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
            <p style={{ marginTop: '15px', color: '#666' }}>
              ☝️ This component displays a greeting and responds to button clicks!
            </p>
          </div>

          <div className="quiz">
            <h3>🎯 Quiz: Angular Basics</h3>
            <p><strong>What decorator is used to define an Angular component?</strong></p>
            <div
              className={`quiz-option ${quizAnswers['ng-q1'] === 1 ? 'correct' : ''}`}
              onClick={() => checkQuiz('ng-q1', 1, 1)}
            >
              A) @Component ✓
            </div>
            <div
              className={`quiz-option ${quizAnswers['ng-q1'] === 2 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('ng-q1', 2, 1)}
            >
              B) @Module
            </div>
            <div
              className={`quiz-option ${quizAnswers['ng-q1'] === 3 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('ng-q1', 3, 1)}
            >
              C) @Service
            </div>
          </div>
        </div>
      )}

      {activeTab === 'components' && (
        <div className="fade-in">
          <div className="card">
            <h3>🧩 Angular Components Deep Dive</h3>
            <p>Components are the heart of Angular apps. Let's master them!</p>
            <span className="badge badge-intermediate">Core Concept</span>
          </div>

          <div className="interactive-demo">
            <h3>Data Binding (4 Types!)</h3>
            <div className="code-block">
              <span className="comment">// 1. Interpolation: Component → View</span><br/>
              &lt;h1&gt;{'{{title}}'}&lt;/h1&gt;<br/><br/>

              <span className="comment">// 2. Property Binding: Component → View</span><br/>
              &lt;img [src]=<span className="string">"imageUrl"</span> [alt]=<span className="string">"description"</span>&gt;<br/><br/>

              <span className="comment">// 3. Event Binding: View → Component</span><br/>
              &lt;button (click)=<span className="string">"handleClick()"</span>&gt;Click&lt;/button&gt;<br/><br/>

              <span className="comment">// 4. Two-Way Binding: View ↔ Component</span><br/>
              &lt;input [(ngModel)]=<span className="string">"username"</span>&gt;
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Component Communication</h3>
            <div className="code-block">
              <span className="comment">// Parent → Child: @Input()</span><br/>
              <span className="keyword">export class</span> <span className="function">ChildComponent</span> {'{'}<br/>
              &nbsp;&nbsp;@<span className="function">Input</span>() message: string;<br/>
              {'}'}<br/><br/>

              <span className="comment">// Usage in parent template:</span><br/>
              &lt;app-child [message]=<span className="string">"'Hello Child!'"</span>&gt;&lt;/app-child&gt;<br/><br/>

              <span className="comment">// Child → Parent: @Output()</span><br/>
              <span className="keyword">export class</span> <span className="function">ChildComponent</span> {'{'}<br/>
              &nbsp;&nbsp;@<span className="function">Output</span>() notify = <span className="keyword">new</span> EventEmitter();<br/><br/>

              &nbsp;&nbsp;<span className="function">sendData</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.notify.emit(<span className="string">'Data from child'</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Component Lifecycle Hooks</h3>
            <div className="code-block">
              <span className="keyword">export class</span> <span className="function">MyComponent</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="comment">// Called once when component initializes</span><br/>
              &nbsp;&nbsp;<span className="function">ngOnInit</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="string">'Component initialized!'</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/><br/>

              &nbsp;&nbsp;<span className="comment">// Called when input properties change</span><br/>
              &nbsp;&nbsp;<span className="function">ngOnChanges</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="string">'Inputs changed!'</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/><br/>

              &nbsp;&nbsp;<span className="comment">// Called before component is destroyed</span><br/>
              &nbsp;&nbsp;<span className="function">ngOnDestroy</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="string">'Cleanup time!'</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="fun-fact">
            <strong>Best Practice:</strong> Use ngOnInit() for initialization logic, not the constructor. The constructor should only be used for dependency injection!
          </div>
        </div>
      )}

      {activeTab === 'directives' && (
        <div className="fade-in">
          <div className="card">
            <h3>🎨 Directives: Supercharge Your Templates</h3>
            <p>Directives add behavior to your HTML. They're like magic spells for your templates!</p>
            <span className="badge badge-intermediate">Power Feature</span>
          </div>

          <div className="interactive-demo">
            <h3>Structural Directives (*ngIf, *ngFor)</h3>
            <div className="code-block">
              <span className="comment">// *ngIf - Show/hide elements</span><br/>
              &lt;div *ngIf=<span className="string">"isLoggedIn"</span>&gt;<br/>
              &nbsp;&nbsp;Welcome back!<br/>
              &lt;/div&gt;<br/><br/>

              &lt;div *ngIf=<span className="string">"!isLoggedIn; else loginTemplate"</span>&gt;<br/>
              &nbsp;&nbsp;Please log in<br/>
              &lt;/div&gt;<br/>
              &lt;ng-template #loginTemplate&gt;<br/>
              &nbsp;&nbsp;&lt;button&gt;Login&lt;/button&gt;<br/>
              &lt;/ng-template&gt;<br/><br/>

              <span className="comment">// *ngFor - Loop through arrays</span><br/>
              &lt;ul&gt;<br/>
              &nbsp;&nbsp;&lt;li *ngFor=<span className="string">"let item of items; let i = index"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{{i + 1}}. {{item.name}}'}<br/>
              &nbsp;&nbsp;&lt;/li&gt;<br/>
              &lt;/ul&gt;
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Attribute Directives (ngClass, ngStyle)</h3>
            <div className="code-block">
              <span className="comment">// ngClass - Dynamic CSS classes</span><br/>
              &lt;div [ngClass]=<span className="string">"{'{'} <br/>
              &nbsp;&nbsp;'active': isActive,<br/>
              &nbsp;&nbsp;'disabled': isDisabled,<br/>
              &nbsp;&nbsp;'highlighted': score &gt; 80<br/>
              {'}'}"</span>&gt;<br/>
              &nbsp;&nbsp;Status Box<br/>
              &lt;/div&gt;<br/><br/>

              <span className="comment">// ngStyle - Dynamic inline styles</span><br/>
              &lt;div [ngStyle]=<span className="string">"{'{'}<br/>
              &nbsp;&nbsp;'color': textColor,<br/>
              &nbsp;&nbsp;'font-size': fontSize + 'px',<br/>
              &nbsp;&nbsp;'background': bgColor<br/>
              {'}'}"</span>&gt;<br/>
              &nbsp;&nbsp;Styled text<br/>
              &lt;/div&gt;
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Creating Custom Directives</h3>
            <div className="code-block">
              <span className="keyword">import</span> {'{ Directive, ElementRef }'} <span className="keyword">from</span> <span className="string">'@angular/core'</span>;<br/><br/>

              @<span className="function">Directive</span>({'{'}<br/>
              &nbsp;&nbsp;selector: <span className="string">'[appHighlight]'</span><br/>
              {'}'})<br/>
              <span className="keyword">export class</span> <span className="function">HighlightDirective</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="keyword">constructor</span>(el: ElementRef) {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;el.nativeElement.style.backgroundColor = <span className="string">'yellow'</span>;<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}<br/><br/>

              <span className="comment">// Usage:</span><br/>
              &lt;p appHighlight&gt;This text is highlighted!&lt;/p&gt;
            </div>
          </div>

          <div className="quiz">
            <h3>🎯 Quiz: Directives</h3>
            <p><strong>Which directive would you use to loop through an array?</strong></p>
            <div
              className={`quiz-option ${quizAnswers['dir-q1'] === 1 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('dir-q1', 1, 2)}
            >
              A) *ngIf
            </div>
            <div
              className={`quiz-option ${quizAnswers['dir-q1'] === 2 ? 'correct' : ''}`}
              onClick={() => checkQuiz('dir-q1', 2, 2)}
            >
              B) *ngFor ✓
            </div>
            <div
              className={`quiz-option ${quizAnswers['dir-q1'] === 3 ? 'incorrect' : ''}`}
              onClick={() => checkQuiz('dir-q1', 3, 2)}
            >
              C) *ngSwitch
            </div>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div className="fade-in">
          <div className="card">
            <h3>🔧 Services & Dependency Injection</h3>
            <p>Services handle business logic and data. DI makes them easy to use anywhere!</p>
            <span className="badge badge-advanced">Advanced</span>
          </div>

          <div className="interactive-demo">
            <h3>Creating a Service</h3>
            <div className="code-block">
              <span className="keyword">import</span> {'{ Injectable }'} <span className="keyword">from</span> <span className="string">'@angular/core'</span>;<br/><br/>

              @<span className="function">Injectable</span>({'{'}<br/>
              &nbsp;&nbsp;providedIn: <span className="string">'root'</span> <span className="comment">// Available app-wide</span><br/>
              {'}'})<br/>
              <span className="keyword">export class</span> <span className="function">DataService</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="keyword">private</span> users = [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{ id: 1, name: "Alice" }'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{ id: 2, name: "Bob" }'}<br/>
              &nbsp;&nbsp;];<br/><br/>

              &nbsp;&nbsp;<span className="function">getUsers</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="keyword">this</span>.users;<br/>
              &nbsp;&nbsp;{'}'}<br/><br/>

              &nbsp;&nbsp;<span className="function">addUser</span>(user: any) {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.users.push(user);<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="interactive-demo">
            <h3>Using Services in Components</h3>
            <div className="code-block">
              <span className="keyword">import</span> {'{ Component }'} <span className="keyword">from</span> <span className="string">'@angular/core'</span>;<br/>
              <span className="keyword">import</span> {'{ DataService }'} <span className="keyword">from</span> <span className="string">'./data.service'</span>;<br/><br/>

              @<span className="function">Component</span>({'{'}<br/>
              &nbsp;&nbsp;selector: <span className="string">'app-users'</span>,<br/>
              &nbsp;&nbsp;template: <span className="string">`<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div *ngFor="let user of users"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{{user.name}}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
              &nbsp;&nbsp;`</span><br/>
              {'}'})<br/>
              <span className="keyword">export class</span> <span className="function">UsersComponent</span> {'{'}<br/>
              &nbsp;&nbsp;users: any[];<br/><br/>

              &nbsp;&nbsp;<span className="comment">// Inject service via constructor</span><br/>
              &nbsp;&nbsp;<span className="keyword">constructor</span>(<span className="keyword">private</span> dataService: DataService) {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.users = dataService.getUsers();<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="interactive-demo">
            <h3>HTTP Service Example</h3>
            <div className="code-block">
              <span className="keyword">import</span> {'{ HttpClient }'} <span className="keyword">from</span> <span className="string">'@angular/common/http'</span>;<br/><br/>

              @<span className="function">Injectable</span>({'{ providedIn: "root" }'})<br/>
              <span className="keyword">export class</span> <span className="function">ApiService</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="keyword">constructor</span>(<span className="keyword">private</span> http: HttpClient) {'{}'}<br/><br/>

              &nbsp;&nbsp;<span className="function">getPosts</span>() {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return this</span>.http.get(<span className="string">'https://api.example.com/posts'</span>);<br/>
              &nbsp;&nbsp;{'}'}<br/><br/>

              &nbsp;&nbsp;<span className="function">createPost</span>(post: any) {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return this</span>.http.post(<span className="string">'https://api.example.com/posts'</span>, post);<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="fun-fact">
            <strong>DI Benefits:</strong> Services are singleton by default (one instance shared everywhere), making data sharing between components super easy!
          </div>
        </div>
      )}

      {activeTab === 'practice' && (
        <div className="fade-in">
          <div className="card">
            <h3>💪 Practice Projects</h3>
            <p>Build real applications to cement your knowledge!</p>
            <span className="badge badge-advanced">Hands-On</span>
          </div>

          <div className="content-grid">
            <div className="card">
              <span className="emoji">📝</span>
              <h3>Project 1: Todo App</h3>
              <p><strong>Features to build:</strong></p>
              <p>
                • Add/remove tasks<br/>
                • Mark tasks complete<br/>
                • Filter (all/active/done)<br/>
                • Use *ngFor and *ngIf<br/>
                • Create a TodoService
              </p>
              <span className="badge badge-beginner">Beginner</span>
            </div>

            <div className="card">
              <span className="emoji">🎬</span>
              <h3>Project 2: Movie List</h3>
              <p><strong>Features to build:</strong></p>
              <p>
                • Fetch from API<br/>
                • Display movie cards<br/>
                • Search functionality<br/>
                • Rating system<br/>
                • Routing between pages
              </p>
              <span className="badge badge-intermediate">Intermediate</span>
            </div>

            <div className="card">
              <span className="emoji">🛒</span>
              <h3>Project 3: E-Commerce</h3>
              <p><strong>Features to build:</strong></p>
              <p>
                • Product catalog<br/>
                • Shopping cart<br/>
                • User authentication<br/>
                • Checkout flow<br/>
                • State management
              </p>
              <span className="badge badge-advanced">Advanced</span>
            </div>
          </div>

          <div className="interactive-demo">
            <h3>🎯 Final Challenge: Build a Component!</h3>
            <p>Create a counter component with these features:</p>
            <div className="code-block">
              <span className="comment">// Counter Component Template</span><br/>
              &lt;div class=<span className="string">"counter"</span>&gt;<br/>
              &nbsp;&nbsp;&lt;h2&gt;Count: {'{{count}}'}&lt;/h2&gt;<br/>
              &nbsp;&nbsp;&lt;button (click)=<span className="string">"increment()"</span>&gt;+&lt;/button&gt;<br/>
              &nbsp;&nbsp;&lt;button (click)=<span className="string">"decrement()"</span>&gt;-&lt;/button&gt;<br/>
              &nbsp;&nbsp;&lt;button (click)=<span className="string">"reset()"</span>&gt;Reset&lt;/button&gt;<br/>
              &lt;/div&gt;<br/><br/>

              <span className="comment">// Component Class</span><br/>
              <span className="keyword">export class</span> <span className="function">CounterComponent</span> {'{'}<br/>
              &nbsp;&nbsp;count = <span className="string">0</span>;<br/><br/>

              &nbsp;&nbsp;<span className="function">increment</span>() {'{ this.count++; }'}<br/>
              &nbsp;&nbsp;<span className="function">decrement</span>() {'{ this.count--; }'}<br/>
              &nbsp;&nbsp;<span className="function">reset</span>() {'{ this.count = 0; }'}<br/>
              {'}'}
            </div>
          </div>

          <div className="card">
            <h3>📚 Next Steps</h3>
            <p><strong>Keep learning:</strong></p>
            <p>
              🔹 Explore Angular Router for navigation<br/>
              🔹 Learn RxJS for reactive programming<br/>
              🔹 Master Forms (Template & Reactive)<br/>
              🔹 Study state management (NgRx)<br/>
              🔹 Build and deploy real projects!
            </p>
          </div>

          <div className="fun-fact">
            <strong>You're ready!</strong> You now know the fundamentals of ES6 and Angular. The best way to master them is to build projects. Start small, and gradually increase complexity. Happy coding! 🚀
          </div>
        </div>
      )}
    </div>
  );
}
