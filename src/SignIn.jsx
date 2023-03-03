import { RxDividerVertical } from "react-icons/rx"
import { BsGoogle } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="main">
        <div className="one">
          <h2>Sign In to Tailored+</h2>
          <form action="">
            <label>* E-mail</label>
            <input type="email" required />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" required />
            <button>Sign In</button>
          </form>
        </div>
        <div className="two">
          <div className="divider">
            <RxDividerVertical className="icon" />
            <h6>OR</h6>
            <RxDividerVertical className="icon" />
          </div>
          <div className="acc">
            <button className="facebook">
              <span>
                <FiFacebook />
              </span>
              Sign In With Facebook
            </button>
            <button className="google">
              <span>
                <BsGoogle />
              </span>
              Sign In With Google
            </button>
            <button className="github">
              <span>
                <AiFillGithub />
              </span>
              Sign In With Github
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </footer>
    </div>
  );
};

export default SignIn;
