
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBkI_oyo7C3kJyK7t_4IFT6AaGd3vrHq0c",
  authDomain: "todo-app-rs17.firebaseapp.com",
  databaseURL: "https://todo-app-rs17.firebaseio.com",
  projectId: "todo-app-rs17",
  storageBucket: "todo-app-rs17.appspot.com",
  messagingSenderId: "833746865170",
  appId: "1:833746865170:web:c44476a1fe778a477edccb"
};
const fire=firebase.initializeApp(firebaseConfig);

export default fire;