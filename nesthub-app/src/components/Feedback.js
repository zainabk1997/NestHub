import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


import Nav from './Nav';

//setting the state
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        gender: "male"
    })


    let navigate = useNavigate()
//function to submit form
    const formSubmit = async (e) => {

        console.log('submitted')
        navigate("/dashboard");

    }

        const handleOnChange = (e) => {
            // console.log('e', e)
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    
            // if(e.target.files){
            //  photoData = e.target.files[0]
            // }
    
            const name = e.target.name

    
            // setFormData((prevState) => ({
            //     ...prevState,
            //     [name]: value,
            // }))
            // console.log("State", formData)
        }

        

    
    
    return (
        <>
            <Nav></Nav>
            <div className="register">
                <h2>Feedback Form</h2>

                <form onSubmit={formSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="firstName"
                            placeholder="First Name"
                            required={true}
                            onChange={handleOnChange}
                        />
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            id="last_name"
                            type='text'
                            name="lastName"
                            placeholder="Last Name"
                            required={true}
                            onChange={handleOnChange}
                        />

                        <label>Were you able to find a room?</label>
                        <input
                            id="find"
                            type='text'
                            name="find"
                            placeholder="Tell us about it"
                            required={true}
                            onChange={handleOnChange}
                        />
                        <label htmlFor="review">Review</label>
                        <input
                                id="review"
                                type="text-area"
                                name="Review"
                                placeholder="Let us know how we can provide a better experience"
                                onChange={handleOnChange}
                            />
                        <input className="primary-button " type="submit" />
                    </section>
                </form>
            </div>
        </>
    )
}

export default FeedbackForm;