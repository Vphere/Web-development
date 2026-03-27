import React, {useState} from "react";

export default function FormHandling_4(){

    const[form, setForm] = useState({
        name: "",
        email: ""
    });
    const[errors, setErrors] = useState({
        name: "",
        email: ""
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
            [name] : ""
        }); // clear error message while user type
    }

    function handleSubmit(e){
        e.preventDefault();
        setTouched(true);

        let newErrors = {
            name: "",
            email: ""
        };

        if(form.name.trim() === ""){
            newErrors.name = "Name is required";
        }

        if(!form.email.includes("@")){
            newErrors.email = "Email must include @";
        }

        setErrors(newErrors);

        // Check if no errors
        if(!newErrors.name && !newErrors.email){
            console.log(form);
    }
}
    return(
        <>
            
            <form onSubmit={handleSubmit}>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                Name: <input name="name" value={form.name} onChange={handleChange} /> <br/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                Email: <input name="email" value={form.email} onChange={handleChange} /><br/>

                <input type="submit" value="Submit" 
                        disabled={touched && (form.name.trim()=="" || !form.email.includes('@'))}/><br/>
            </form><br/>

            <p>Your entered details are: </p>
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
        </>
    );
}