import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, doc, setDoc, orderBy, getDoc, getDocs, query, where, 
  addDoc, updateDoc, deleteDoc, serverTimestamp, runTransaction
} from "firebase/firestore";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";
import { getStorage } from "firebase/storage"; // ✅ Correct import



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


// ✅ Function to generate a 4-character short Quote ID
const generateShortQuoteId = (id) => {
  return id.slice(-4); // Extracts last 4 characters of the Firestore-generated ID
};

// ✅ Function to create a new quote in Firestore
const createQuote = async (quoteData) => {
  try {
    // Add a new quote to the Firestore "quotes" collection (Firestore auto-generates an ID)
    const newQuoteRef = await addDoc(collection(db, "quotes"), quoteData);
    const newQuoteId = newQuoteRef.id; // Get the auto-generated Firestore document ID

    // Generate a short Quote ID from the Firestore ID
    const shortQuoteId = generateShortQuoteId(newQuoteId);

    // Update the newly created quote with the short Quote ID
    await updateDoc(newQuoteRef, { shortQuoteId });

    console.log("Quote created successfully with Short ID:", shortQuoteId);
    return { id: newQuoteId, shortQuoteId }; // Return IDs if needed
  } catch (error) {
    console.error("Error creating quote:", error);
    throw error;
  }
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// ✅ Initialize Storage (Fix for your issue)
const storage = getStorage(); // ✅ Initialize Firebase Storage

// ✅ Register a New User
const registerUser = async (name, email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // ✅ Store user in Firestore under "users" collection
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      role,
      createdAt: serverTimestamp(),
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export { 
  storage, db, auth, runTransaction, createQuote, collection, doc, getDoc, orderBy, setDoc, deleteDoc, updateDoc, 
  getDocs, query, where, addDoc, serverTimestamp, 
  signInWithEmailAndPassword, registerUser 
};
