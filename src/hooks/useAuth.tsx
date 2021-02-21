import { ReactNode, useContext, useEffect, useState } from 'react';
import { auth, db } from 'config/firebase';
import AuthContext from 'context/authContext';
import { User } from '@firebase/auth-types';

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider();

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}
export const useAuth: any = () => {
  return useContext(AuthContext);
};

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const createUser = async (user) => {
    return db()
      .collection('users')
      .doc(user.uid)
      .set(user)
      .then(() => {
        setUser(user);
        return user;
      })
      .catch((error) => {
        return { error };
      });
  };
  const signUp = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        auth().currentUser.sendEmailVerification();
        return createUser({ uid: response.user.uid, email, name });
      })
      .catch((error) => {
        return { error };
      });
  };

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        getUserAdditionalData(response.user);
        return response.user;
      })
      .catch((error) => {
        return { error };
      });
  };

  const getUserAdditionalData = async (user: User) => {
    return db()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((userData) => {
        if (userData.data()) {
          setUser(userData.data());
        }
      });
  };

  const handleAuthStateChanged = async (user: User) => {
    setUser(user);
    if (user) {
      getUserAdditionalData(user);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(handleAuthStateChanged);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db()
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
      return () => unsubscribe();
    }
  }, []);

  const signOut = async () => {
    return auth()
      .signOut()
      .then(() => setUser(false));
  };

  const sendPasswordResetEmail = async (email: string) => {
    return auth()
      .sendPasswordResetEmail(email)
      .then((response) => {
        return response;
      });
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetEmail,
  };
};
