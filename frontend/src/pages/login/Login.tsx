import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../..";
import styles from "./Login.module.scss";

interface RegistrationInfo {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const { register, handleSubmit } = useForm<RegistrationInfo>();
  const navigate = useNavigate();
  /*add support of onAuthStateChanged ???*/
  const { auth } = useContext(Context);

  const onSubmitForm = (data: RegistrationInfo) => {
    const { email, password, rememberMe } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const { user } = userCredential;

        user
          .getIdToken()
          .then((idToken) => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
        user
          .getIdToken()
          .then((idToken) => {
            //send token to backend
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
          <h1>Sign In</h1>
          <div className={styles.main__rightBlock__formBlock}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <input {...register("email")} placeholder="Email address" />
              <input {...register("password")} placeholder="Password" />
              <div className={styles.main__rightBlock__rememberMe}>
                <input type="checkbox" {...register("rememberMe")} />
                <label>Remember Me</label>
              </div>
              <button className={styles.main__rightBlock__signUp} type="submit">
                SIGN IN
              </button>
              <button
                className={styles.main__rightBlock__signUpGoogle}
                type="button"
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </button>
              <p>
                Already have an account <Link to="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
