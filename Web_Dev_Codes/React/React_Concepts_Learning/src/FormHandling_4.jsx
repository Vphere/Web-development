import React, {useState} from "react";

export default function FormHandling_4(){

    const[form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const[errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [touched, setTouched] = useState(false);

    function handleChange(e){
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });

        setErrors({
            ...errors,
            [name] : ""      // To clear error message while user type
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        setTouched(true);

        let newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        if(form.name.trim() === ""){
            newErrors.name = "Name is required";
        }
        if(!form.email.includes("@")){
            newErrors.email = "Email must include @";
        }
        if(form.password.length < 6){
            newErrors.password = "Password must be atleast 6 characters long."
        }
        if(form.password !== form.confirmPassword){
            newErrors.confirmPassword = "Confirm Password does not match with entered password."
        }

        setErrors(newErrors);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>

                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                Name: <input name="name" value={form.name} onChange={handleChange} /> <br/>

                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                Email: <input name="email" value={form.email} onChange={handleChange} /><br/>

                {errors.password && <p style={{color: "red"}}> {errors.password} </p>}
                Password: <input name="password" value={form.password} onChange={handleChange}/><br />

                {errors.confirmPassword && <p style={{color: "red"}}> {errors.confirmPassword} </p>}
                Confirm password: <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} /> <br/>

                <input type="submit" value="Submit" 
                        disabled={touched && (form.name.trim()=="" || !form.email.includes('@'))}/><br/>
                        
            </form><br/>

            <p>Your entered details are: </p>
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Confirm Password: {form.confirmPassword}</p>
        </>
    );
}