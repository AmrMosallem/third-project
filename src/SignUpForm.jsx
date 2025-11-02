import React from 'react'

export default function SignUpForm() {

    function handleSubmit(formData) {
        const email = formData.get("email-inpt")
        const password = formData.get("password-inpt")
        const description = formData.get("description-inpt")
        const status = formData.get("status");
        const skills = formData.getAll("skill")
        console.log("Email", email)
        console.log("password", password)
        console.log("description", description)
        console.log("status", status)
        console.log("skills", skills)
    }
    return (
        <form action={handleSubmit} className='flex flex-col gap-2 border shadow-md p-4 rounded-lg'>
            <h1>Sign-up Form</h1>
            <label htmlFor="email">Email: </label>
            <input type="email"
                id="email"
                placeholder='Enter your Email'
                name="email-inpt"
            />
            <label htmlFor="passowrd">Password: </label>
            <input type='password'
                id='passowrd'
                placeholder='****'
                name="password-inpt" />
            <label htmlFor="description">Description: </label>
            <textarea name="description-inpt"></textarea>
            <fieldset className='border p-2 flex flex-col gap-2'>
                <legend>Employment Status: </legend>
                <label>
                    <input type="radio" name='status' value="unemployed" />
                    Unemployed</label>
                <label>
                    <input type="radio" name='status' value="part-time" />
                    Part-time
                </label>
                <label><input type="radio" name='status' value="full-time" /> Full-time</label>
            </fieldset>

            <fieldset className='border p-2 flex flex-col gap-2'>
                <legend>Skills: </legend>
                <label>
                    <input type="checkbox" name="skill" value="react" />
                    React
                </label>
                <label>
                    <input type="checkbox" name="skill" value="vue" />
                    Vue
                </label>
                <label>
                    <input type="checkbox" name="skill" value="angular" />
                    Angular
                </label>
            </fieldset>
            <button>Submit</button>
        </form>
    )
}
