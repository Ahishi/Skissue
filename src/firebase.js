import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp84gJpcqWoXFXreAmNyY3Ya4wkDsRmBw",
  authDomain: "skissue-72aa5.firebaseapp.com",
  databaseURL: "https://skissue-72aa5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skissue-72aa5",
  storageBucket: "skissue-72aa5.appspot.com",
  messagingSenderId: "513265998586",
  appId: "1:513265998586:web:85541a6581ede2d797c743",
  measurementId: "G-2WMWBK9P14"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth,
}

const groupCollection = collection(db, "groups");
export {
  groupCollection
}