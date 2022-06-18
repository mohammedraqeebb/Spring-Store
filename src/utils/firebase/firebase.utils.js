import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJIVQtz1_02Dfy0u94HNvzGzoacJmRrDQ",
    authDomain: "spring-store-79d9b.firebaseapp.com",
    projectId: "spring-store-79d9b",
    storageBucket: "spring-store-79d9b.appspot.com",
    messagingSenderId: "456994260172",
    appId: "1:456994260172:web:07b6c50062b9d87f0dee69"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        }
        catch (e) {
            console.log(console.error())
        }
    }
    return userDocRef;
}