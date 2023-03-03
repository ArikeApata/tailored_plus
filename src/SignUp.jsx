import { RxDividerVertical } from "react-icons/rx";
import { BsGoogle } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className="sign-in">
      <div className="main">
        <div className="one">
          <h2>Sign Up to Tailored+</h2>
          <form action="">
            <label>* Full Name</label>
            <input type="text" required />
            <br />
            <label>* E-mail</label>
            <input type="email" required />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" required />
            <button>Sign Up</button>
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
              Sign Up With Facebook
            </button>
            <button className="google">
              <span>
                <BsGoogle />
              </span>
              Sign Up With Google
            </button>
            <button className="github">
              <span>
                <AiFillGithub />
              </span>
              Sign Up With Github
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>Already have an account?</p>
        <button >Sign In</button>
      </footer>
    </div>
  );
};

export default SignUp;
