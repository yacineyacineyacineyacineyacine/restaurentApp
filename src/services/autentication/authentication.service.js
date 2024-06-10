import auth from '@react-native-firebase/auth';

export const loginRequest = (email, password) =>{
   return auth()
   .signInWithEmailAndPassword(email, password);
};

export const registerRequest = (email, password) =>{
   return auth()
   .createUserWithEmailAndPassword(email, password)
}

export const logoutRequest = () => {
   return auth()
   .signOut();
}

