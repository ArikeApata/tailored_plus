const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Sign In to Tailored+</h2>
      <form action="">
        <label>* E-mail</label>
        <input type="email" required />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" required />
        <button>Sign In</button>
      </form>
      <div className="linked-acc">
        
        <h6>OR</h6>

        <div className="acc">
          <button>Sign In With Google</button>
          <button>Sign In With Facebook</button>
          <button>Sign In With Github</button>
        </div>
      </div>

      <div className="footer-sign">
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
