# Smart Goal Planner

A React app to manage multiple savings goals—track progress, make deposits, and stay on top of deadlines.  
Powered by `json-server` for a mock backend and deployed via GitHub Pages.

---

## Live Demo  
Hosted at:  
`https://kalebu1960.github.io/smart-goal-planner`  
*(pending deployment)*

---

## Features

- **Full CRUD support** on goals:
  - Create new goals  
  - Update name, target amount, category, deadline  
  - Delete goals  
  - Add deposits (updates saved amount)  
- **Progress tracking** per goal:
  - Compare current vs target saved amounts  
  - Visual progress bar representation  
- **Dashboard overview**:
  - Total goals, total saved, completed goals  
  - Upcoming deadlines (within 30 days) are highlighted  
  - Overdue goals are marked  
- **Data Persistence** using `json-server` (`db.json`)  
- **Responsive UI** built with React hooks (`useState`, `useEffect`), `react-hook-form`, and custom hooks

---

## Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/kalebu1960/smart-goal-planner.git
cd smart-goal-planner

# Install dependencies
npm install

# Start JSON server (mock API)
npx json-server --watch db.json --port 3001

# Launch front-end application
npm start

Project Structure
.
├── db.json
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── api.js
    ├── App.css
    ├── App.js
    ├── components
    │   ├── GoalItem.js
    │   ├── GoalItem.module.css
    │   ├── GoalList.js
    │   ├── ProgressBar.css
    │   └── ProgressBar.js
    ├── hooks
    │   ├── useGoalController.js
    │   └── useGoals.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
