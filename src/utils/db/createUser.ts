import { db } from 'config/firebase';

const CreateUser = async (user) => {
  return db()
    .collection('users')
    .doc(user.uid)
    .set(user)
    .then(() => {
      console.log('Success');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default CreateUser;
