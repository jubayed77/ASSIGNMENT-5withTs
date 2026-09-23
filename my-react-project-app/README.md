Build Your Own Technology Stack

DevStack is a simple and user-friendly React application where users can explore different web development technologies and save their favorite technologies to their own personal stack.

🛠️ Technologies Used
React
TypeScript
Vite
Tailwind CSS
React Hot Toast
JSON
✨ Features
🔍 1. Explore Technologies

Users can explore different web development technologies and see their name, category, description, rating, and difficulty level.

⭐ 2. Save Technologies

Users can save their favorite technologies to their personal technology stack.

🗑️ 3. Manage Saved Stack

Users can view their saved technologies and remove them from their stack when needed.

⚛️ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component. When state changes, React updates the UI.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component.

I used useState to manage the saved technologies and update the stack when a user adds or removes a technology.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs code after a component renders. It is useful for side effects such as fetching data.

I used it to load the technology data from the JSON file when the application starts.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list. It allows React to update the list correctly when items are added, removed, or changed.

Example:

{technologies.map((tech) => (
  <TechCard key={tech.id} tech={tech} />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show an empty-stack message when there are no saved technologies.

{saved.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  saved.map((tech) => (
    <TechCard key={tech.id} tech={tech} />
  ))
)}

When the saved array is empty, the empty-stack message is displayed.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

<TechCard tech={tech} />

A child can send information back to the parent by calling a function passed through props.

<TechCard tech={tech} onSave={handleSaveTech} />

Here, the parent passes handleSaveTech to the child. The child calls onSave() when the user saves a technology.

📚 What I Learned

Through this project, I practiced:

React Components
JSX
Props
State
useState
useEffect
Conditional Rendering
List Rendering
Data Fetching
TypeScript
Tailwind CSS