 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyCdYa6P_lfJQEwu0kObWRvfUzIqTV7NI4Y",
  authDomain: "rental-property-fb0a4.firebaseapp.com",
  projectId: "rental-property-fb0a4",
  storageBucket: "rental-property-fb0a4.appspot.com",
  messagingSenderId: "244787595546",
  appId: "1:244787595546:web:b0fe43eca9226ca19104a3",
  measurementId: "G-BJ15TT7T7D"
};

 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);