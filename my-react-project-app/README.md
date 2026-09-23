Build Your Own Technology Stack

DevStack is a simple React application that helps users explore web development technologies and save their favorite ones to a personal stack.

🛠️ Technologies Used
React
TypeScript
Vite
Tailwind CSS
React Hot Toast
React Icons
JSON
✨ Features
🔍 1. Explore Technologies

Browse different technologies with their category, description, rating, and difficulty level.

⭐ 2. Save & Manage Stack

Save favorite technologies, view them in the sidebar, and remove them whenever needed.

📱 3. Responsive Mobile Navigation

Includes a responsive navbar with a hamburger menu for mobile devices and easy navigation across different screen sizes.

⚛️ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code simple and easy to understand.

2. What is the difference between props and state?

Props pass data from a parent to a child component and are read-only.

State stores data inside a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage component state.

I used it to manage saved technologies, selected stack items, and the mobile hamburger menu.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders and is useful for side effects.

I used it to load the technology data from the JSON file when the app starts.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each list item and update the UI efficiently.

Example:

{technologies.map((tech) => (
  <TechCard key={tech.id} tech={tech} />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to display an empty-stack message when there are no saved technologies.

{saved.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  saved.map((tech) => (
    <TechCard key={tech.id} tech={tech} />
  ))
)}

When saved is empty, the message is displayed.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

<TechCard tech={tech} onSave={handleSaveTech} />

The child can send data back by calling the function received through props.

Here, handleSaveTech is passed from the parent, and the child calls onSave() when needed.

📚 What I Learned

Through this project, I learned and practiced:

React Components & JSX
Props and State
useState and useEffect
Conditional and List Rendering
Data Fetching from JSON
Responsive Design
Mobile Hamburger Navigation
TypeScript
Tailwind CSS
React Icons
React Hot Toast