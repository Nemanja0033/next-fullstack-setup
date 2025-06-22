import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup
  } from 'firebase/auth'
  import { auth } from '../firebaseConfig'

  // This file contains functions for user authentication using Firebase Authentication.
  
  export async function registerUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
  
  export async function loginUser(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
  
  export async function logoutUser() {
    try {
      await signOut(auth)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  export async function singInWithGoogle(){
    try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user; 
    }
    catch (error: any) {
        throw new Error(error.message);
    }
  }  