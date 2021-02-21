import { auth } from 'config/firebase';
import CreateUser from 'utils/db/createUser';

const SignUp = async ({ name, email, password }) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      return CreateUser({ uid: response.user.uid, email, name });
    })
    .catch((error) => {
      return { error };
    });
};

export default SignUp;
