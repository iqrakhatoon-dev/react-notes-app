# 📝 Notes App (React + Tailwind CSS)

A simple and responsive Notes Application built using **React.js** and **Tailwind CSS**.  
Users can create and delete notes dynamically.


## 🚀 Features

- Add new notes
- Delete notes
- Responsive design (Mobile, Tablet, Desktop)
- Hover & Active scale effects
- Functional delete button
- Dynamic rendering using React `useState`


## 🛠 Tech Stack

- React.js
- Tailwind CSS
- JavaScript (ES6)
- Vite / Create React App (whichever you used)


## 📂 Current Project Structure

> ⚠️ Currently the project is built inside a single component (`App.jsx`).  
> It will be refactored into reusable components in the next update.


## 📈 Upcoming Improvements

- Component-based structure
- Local Storage support
- Edit note feature
- Better folder structure
- Code optimization

## 🔧 How It Works

- `useState` is used to manage:
  - title
  - details
  - notes array
- On form submit:
  - New note object is pushed into the array
  - Input fields are cleared
- On delete:
  - Selected note is removed using `splice()`


## 💡 Learning Outcome

This project helped in understanding:
- React Hooks (`useState`)
- Handling forms in React
- Dynamic list rendering
- State management basics
- Responsive UI design with Tailwind


## 🔗 Author
**Iqra Khatoon (Aspiring Full Stack MERN Developer)**

(Made with focus and consistency)