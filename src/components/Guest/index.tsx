import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";
import {useState} from 'react';

const Guest = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    return (
        <div>
            {
                isSignIn ? <SignIn/> : <SignUp/>
            }
            <button onClick={() => setIsSignIn(!isSignIn)}>Sign In / Sign Up</button>
        </div>
    )
}

export default Guest;