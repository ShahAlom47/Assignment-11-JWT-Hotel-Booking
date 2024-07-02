# KingLion 

## Description
This hotel booking system enables users to seamlessly book rooms and manage reservations, supported by robust user authentication for security and ease of access.


## Live Demo
Check out the live demo [here](https://assignmet-11-jwt.web.app).


## Features

- **User Authentication:** Secure authentication using JWT token verification.
- **Real-time Data Storage:** Integration with Firebase for seamless real-time data storage.
- **Review System:** Users can leave reviews for booked rooms.


## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Firebase (Authentication, Firestore), Node.js (Express.js)

## Cloning and Running Locally

To clone and run the project locally, follow these steps:

1. **Clone the Repository:**
   - `git clone https://github.com/your-username/honest-real-estate.git`
   - `cd honest-real-estate`

2. **Install Dependencies:**
   - `npm install`

3. **Set Up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Obtain Firebase config credentials and update `.env` file.
4. **Set Up MongoDB:**
   - Ensure MongoDB is installed and running locally or use a cloud-hosted service.
   - Configure MongoDB connection URI in the appropriate environment file:
     ```
     MONGODB_URI=your_mongodb_uri
     ```
