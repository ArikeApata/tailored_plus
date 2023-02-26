const SignUp = () => {
    
    return ( 
        <div className="sign-up">
            <h2>Sign Up to Tailored+</h2>
            <form action="">
                <label>* Full Name</label>
                <input type="text" />
                <br/>
                <label >* E-mail</label>
                <input type="email" />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button>Sign Up</button>
            </form>
            <footer>
                <p>Already have an account?</p>
                <button>Sign In</button>
            </footer>
        </div>
     );
    
}
 
export default SignUp;