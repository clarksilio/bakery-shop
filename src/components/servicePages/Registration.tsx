import SignUpForm from "../templates/SignUpForm.tsx";
import type {LoginData, SignupData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    // const signUpSubmit = (data:SignupData) => {
    //     console.log(JSON.stringify(data))
    // }
    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass:LoginData = {
            email: data.email,
            password: data.password,
            name: data.firstName,
            lastName: data.lastName
        }
        try{
            console.log(userEmailPass)
           await registerWithEmailAndPassword(userEmailPass)
            navigate('/login')
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <SignUpForm submitFunc={signUpWithEmail} />
            </div>
    );
};

export default Registration;