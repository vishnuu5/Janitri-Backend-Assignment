# Janitri Backend Assignment
This project is a RESTful API for managing users, patients, and heart rate data. It is built using Node.js, Express.js, and MongoDB.

##  Project Setup & Installation

1. Clone the Repository
```bash
git clone https://github.com/vishnuu5/Janitri-Backend-Assignment.git
cd janitri-backend
```

2. Install Dependencies
```bash
npm install
```

3. Set Up Environment Variables
Create a .env file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI="mongodb+srv://vishnu:8V6pEyJOJ150U33e@janitri-backend.hp3id.mongodb.net/janitri-backend?retryWrites=true&w=majority&appName=janitri-backend"
```

4. Start the Server

```bash
npm run dev
```

5. Running Tests
To run unit tests:

```bash
npm test
```

## API Endpoints

 1. Authentication

Method	Endpoint	          Description	       Request Body
POST	/api/auth/register	  Register new user	   { email, password }
POST	/api/auth/login	      Login user	       { email, password }

2. Patients
Method	 Endpoint	       Description	        Request Body
POST	/api/patients	   Add a new patient	{ name, age, gender }
GET	   /api/patients/:id   Get patient details	N/A

3. Heart Rate Data
Method	 Endpoint	            Description	                       Request Body
POST	/api/heart-rates	    Record heart rate data	           { patientId, bpm, timestamp }
GET	    /api/heart-rates/:id	Get heart rate data of patient	    N/A

## Assumptions & Design Decisions
No authentication tokens: Since no authentication protocols were required, login only verifies email & password.
Data Relationships:
A User can add multiple Patients.
Each Patient has multiple Heart Rate records.
Validation:
Email and password are required for authentication.
Patient details must include name, age, and gender.
Heart rate data must include a valid patientId, bpm, and timestamp.

## Project Structure
```bash
janitri-backend/
│── src/
│   ├── config/
│   │   ├── db.js               
│   │   ├── env.js              
│   ├── controllers/
│   │   ├── auth.controller.js   
│   │   ├── patient.controller.js 
│   │   ├── heartRate.controller.js 
│   ├── middlewares/
│   │   ├── errorHandler.js      
│   │   ├── validateRequest.js   
│   ├── models/
│   │   ├── user.model.js        
│   │   ├── patient.model.js     
│   │   ├── heartRate.model.js   
│   ├── routes/
│   │   ├── auth.routes.js       
│   │   ├── patient.routes.js    
│   │   ├── heartRate.routes.js  
│   ├── services/
│   │   ├── auth.service.js      
│   │   ├── patient.service.js   
│   │   ├── heartRate.service.js 
│   ├── utils/
│   │   ├── logger.js            
│   │   ├── response.js          
│   ├── tests/
│   │   ├── auth.test.js         
│   │   ├── patient.test.js      
│   │   ├── heartRate.test.js    
│   ├── app.js                   
│   ├── server.js                 
│── .env                         
│── package.json                   
│── README.md  
```

## Technologies Used

Node.js & Express.js (Backend API)
MongoDB & Mongoose (Database)
Jest & Supertest (Unit Testing)
bcryptjs (Password Hashing)
dotenv (Environment Variables)
morgan (Request Logging)

## 🔗 Repository Link
[GitHub Repository](https://github.com/vishnuu5/Janitri-Backend-Assignment.git)