import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../..";
import styles from "./Register.module.scss";

interface RegistrationInfo {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegistrationInfo>();
  /*add support of onAuthStateChanged ???*/
  const { auth } = useContext(Context);

  const onSubmitForm = (data: RegistrationInfo) => {
    const { email, password, rememberMe } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const { user } = userCredential;
        console.log(user);

        user
          .getIdToken()
          .then((idToken) => {
            console.log(idToken);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        user
          .getIdToken()
          .then((idToken) => {
            console.log(idToken);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.main__leftBlock}></div>
        <div className={styles.main__rightBlock}>
          <h1>Sign Up</h1>
          <div className={styles.main__rightBlock__formBlock}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <input {...register("email")} placeholder="Email address" />
              <input {...register("password")} placeholder="Password" />
              <div className={styles.main__rightBlock__rememberMe}>
                <input type="checkbox" {...register("rememberMe")} />
                <label>Remember Me</label>
              </div>
              <button className={styles.main__rightBlock__signUp} type="submit">
                SIGN UP
              </button>
              <button
                className={styles.main__rightBlock__signUpGoogle}
                type="button"
                onClick={signUpWithGoogle}
              >
                Sign Up with Google
              </button>
              <p>
                Already have an account <a href="12">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
