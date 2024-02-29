import React from "react";

const MarkdownDemoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Markdown Demo</h1>

      {/* Headings */}
      <h2 className="text-2xl font-bold mb-2">Headings</h2>
      <h1># Heading 1</h1>
      <h2>## Heading 2</h2>
      <h3>### Heading 3</h3>
      <h4>#### Heading 4</h4>
      <h5>##### Heading 5</h5>
      <h6>###### Heading 6</h6>

      {/* Paragraphs */}
      <h2 className="text-2xl font-bold my-4">Paragraphs</h2>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>

      {/* Emphasis */}
      <h2 className="text-2xl font-bold my-4">Emphasis</h2>
      <p>*Italic text*</p>
      <p>**Bold text**</p>
      <p>***Bold italic text***</p>

      {/* Lists */}
      <h2 className="text-2xl font-bold my-4">Lists</h2>
      <h3>Unordered List</h3>
      <ul>
        <li>- Item 1</li>
        <li>- Item 2</li>
        <li>- Item 3</li>
      </ul>
      <h3>Ordered List</h3>
      <ol>
        <li>1. Item 1</li>
        <li>2. Item 2</li>
        <li>3. Item 3</li>
      </ol>

      {/* Links */}
      <h2 className="text-2xl font-bold my-4">Links</h2>
      <p>[Example Link](https://www.example.com)</p>

      {/* Images */}
      <h2 className="text-2xl font-bold my-4">Images</h2>
      <p>![Alt text](https://via.placeholder.com/150)</p>

      {/* Blockquotes */}
      <h2 className="text-2xl font-bold my-4">Blockquotes</h2>
      <p>{"> This is a blockquote."}</p>

      {/* Code */}
      <h2 className="text-2xl font-bold my-4">Code</h2>
      <p>Inline code: \`console.log('Hello, world!');\`</p>
      <pre>
        <code>const greeting = 'Hello, world!'; console.log(greeting);</code>
      </pre>

      {/* Horizontal Rule */}
      <h2 className="text-2xl font-bold my-4">Horizontal Rule</h2>
      <hr />

      {/* Tables (GitHub Flavored Markdown) */}
      <h2 className="text-2xl font-bold my-4">
        Tables (GitHub Flavored Markdown)
      </h2>
      <p>| Header 1 | Header 2 |</p>
      <p>| -------- | -------- |</p>
      <p>| Cell 1 | Cell 2 |</p>

      {/* Task Lists (GitHub Flavored Markdown) */}
      <h2 className="text-2xl font-bold my-4">
        Task Lists (GitHub Flavored Markdown)
      </h2>
      <p>- [x] Task 1</p>
      <p>- [ ] Task 2</p>
      <p>- [x] Task 3</p>
    </div>
  );
};

export default MarkdownDemoPage;
