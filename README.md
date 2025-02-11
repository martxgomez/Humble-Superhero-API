# 🦸🏻 Humble-Superhero-API

A simple API to get information about superheroes and their superpowers and how humble they are.

## 📄 Description

Humble Superhero API allows users to retrieve and add superheroes, sorting them based on their humility score. The backend is built with **Node.js & Express**, while the frontend is a **React.js** application that displays and interacts with the superhero data.  


## ⚙️ Installation & Setup

### 1. Clone the repository

```sh
git clone https://github.com/martxgomez/Humble-Superhero-API.git
cd Humble-Superhero-API
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the backend server

```sh
node server.js
```

The server will be run on http://localhost:3000.

### 4. Start the frontend

```sh
cd client
npm install
npm start
```
The frontend will run on http://localhost:5173

## 📡  API Endpoints

### 📌 Superhero Endpoints

| Method  | Endpoint          | Description                                     |
|---------|-------------------|-------------------------------------------------|
| **GET**    | `/superheroes` | Get the list of superheroes (sorted by humility)|
| **POST**   | `/superheroes` | Add a new superhero                             |
 
### 📌 Request & Response Examples

#### ▫️ GET `/superheroes`

_Response_
```sh
[
  {
    "name": "Wonder Woman",
    "superpower": "Super Strength",
    "humilityScore": 10
  },
  {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 9
  }
]
```

#### ▫️ POST `/superheroes`
_Request_
```sh
{
  "name": "Doctor Strange",
  "superpower": "Magic",
  "humilityScore": 7
}
```
_Response_
```sh
{
  "message": "Superhero created successfully",
  "superhero": {
    "name": "Doctor Strange",
    "superpower": "Magic",
    "humilityScore": 7
  }
```

## 🖥️ Frontend (React App)

The React app fetches superhero data from the backend and displays it. Users can also add new supeheroes through a form.

### 📍 Main Components & Routes

#### 1. `/`- Superheroes List
- **Component**: `SuperheroesPage.js`
- Displays a list of superheroes, sorted by their humility score, fetched from the backend.
- The user cand see each superhero's name, superpower and humility score.

#### 2. `/add-superhero`- Add a new Superhero
- **Component**: `SuperheroesForm.js`
- A form where users can input the name, superpower and humility score of a new superhero to add to the list.
- Upon succesful submission, the superhero is added to the backend and displayed in the list.

## 🛠️ Technologies used

### Backend
- Node.js
- Express.js
- Cors & JSON middleware

### Frontend
- React.js
- React router
- Axios

## 🤝 Team Player Attitude

Collaboration is essential in any development process. To improve or expand this task, I would collaborate with a teammate in the following ways:
- **Pair programming**: we could work together to add more complex features, such as adding user authenticaton or a real-time database.
- **Code reviews**: I would encourage frequent code reviews to ensure the code is cleand and efficient, as well as share knowledge.
- **Task delegation**: We could divide the project into smaller tasks, which would increase efficiency and improve project organization.

## 🕚 If I had more time

If I had more time, there are several improvements and features I would investigate further to improve the project:
- **Form problem**: I would investigate the problem with reading the properties. In console it appears as undefined. 
- **Database integration**: Instead a simple in-memory database, I would integrate a real database such as **MongoDB** to persist data and maintain changes.
- **User Authentication & Authorization**: Implementing user login and registration so that users can add their own superheroes.
- **Testing**: I would explore about **Jest.js** and I would add integration tests to improve the correct performance of the app.

## 📩 Contact

📧 Email: martagomez.code@gmail.com  
🐱 GitHub: martxgomez

