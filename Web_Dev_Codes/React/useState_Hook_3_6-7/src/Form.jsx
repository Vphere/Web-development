import {useState} from "react";

const allInterests = ["C", "C++", "Java", "Spring boot", "React", "AD"];
const initialValue = {
    firstName: '',
    lastName: '',
    gender: '',
    knowsHindi: false,
    knowsGujarati: false,
    knowsEnglish: false,
    interests: []
};

const Form = () =>{
    const [data, setData] = useState(initialValue);

    function handleChange(event){
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setData({...data, [event.target.name]: value});
    }

    const handleSelectChange = (event) =>{
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);

        setData({...data, interests: selectedOptions});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>User Registration Form</h1>

            <div>
                <label htmlFor="fname">First Name: </label>
                <input type = "text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="lname">Last Name: </label>
                <input type = "text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="Gender">Gender: </label>
                <input type="radio" name="gender" id="maleGender" value="Male" checked={data.gender === "Male"} onChange={handleChange}/>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="femaleGender" value="Female" checked={data.gender === "Female"} onChange={handleChange}/>
                <label htmlFor="female">Female</label>
            </div>

            <div>
                <label htmlFor="languages">Known Languages: </label>
                <input type="checkbox" id="hindi" name="knowsHindi" checked = {data.knowsHindi} onChange={handleChange}/>
                <label htmlFor="hindi">Hindi</label>
                <input type="checkbox" id="gujarati" name="knowsGujarati" checked={data.knowsGujarati} onChange={handleChange}/>
                <label htmlFor="gujarati">Gujarati</label>
                <input type="checkbox" id="english" name="knowsEnglish" checked={data.knowsEnglish} onChange={handleChange}/>
                <label htmlFor="english">English</label>
            </div>

            <div>
                <label htmlFor="interests">Interests: </label>
                <select multiple name="interests" id="interests" value={data.interests} onChange={handleSelectChange}>
                    {
                        allInterests.map((interest) => (
                            <option value={interest} key={interest}>
                                {interest}
                            </option>
                        ))
                    }
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>

        <div>
            <h3>Form data</h3>
            <div>First Name: {data.firstName}</div>
            <div>Lat Name: {data.lastName}</div>
            <div>Gender: {data.gender}</div>
            <div>Knows Hindi: {" " +data.knowsHindi}</div>
            <div>Knows Gujarati: {" " +data.knowsGujarati}</div>
            <div>Knows English: {" " +data.knowsEnglish}</div>
            <div>Interests: {" " + data.interests}</div>
        </div>
        </>
    );
}

export default Form;