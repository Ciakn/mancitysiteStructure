
import { initializeApp  } from "firebase/app";
import { getAuth ,connectAuthEmulator} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDsMVUuU462k9pkk8IVRIsqQDMWj5-GLWQ",
  authDomain: "mancity-1078d.firebaseapp.com",
  projectId: "mancity-1078d",
  storageBucket: "mancity-1078d.appspot.com",
  messagingSenderId: "627358592180",
  appId: "1:627358592180:web:10288bc7c9c232fc5c3be1",
  measurementId: "G-PYQVD4MM77"
})
 
// Initialize Firebase


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseConfig);
