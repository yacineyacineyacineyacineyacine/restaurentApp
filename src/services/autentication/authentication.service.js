import auth from '@react-native-firebase/auth';

export const loginRequest = (email, password) =>{
   return auth()
   .signInWithEmailAndPassword(email, password);
}