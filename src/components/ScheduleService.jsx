
import { useState } from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function ScheduleService() {
    const [result, setResult] = useState("");
    const currentDate = new Date().toISOString().split('T')[0];
    const access_key = '86d4472a-0c17-48d3-a5b0-d7255484ff06';
    console.log(access_key)

    async function handleFormSubmit(event) {
        event.preventDefault();
        const fullName = document.getElementById('full-name').value;
        const description = document.getElementById('description').value;
        const phoneInput = document.getElementById('phone');
        const phoneNum = phoneInput.value.replace(/[^\d]/g, ''); // Remove non-digits

        // Check if the phone number matches the pattern or is a valid US phone number
        if (!isValidPhoneNumber(phoneNum)) {
            alert("Please enter a valid US phone number.");
            phoneInput.focus();
            return false; // Prevent form submission
        }

        // Check name
        if (fullName.trim().length < 5) {
            alert('Please enter your full name.');
            return;
        }



        // Check description
        if (description.trim().length < 10) {
            alert('Please describe your appliance issue. (minimum 10 characters)');
            return;
        }

        setResult("Sending....");
        const formData = new FormData(event.target);
        
        formData.append("access_key", access_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert('Thank you for scheduling an appointment, a member of our team will call you to confirm within 1 business day.')
            setResult("Thank you for scheduling an appointment, a member of our team will call you to confirm within 1 business day.");
            event.target.reset();
        } else {
            console.log("Error");
            setResult("We were unable to submit the form, please refresh and try again");
        }

    }




    function isValidPhoneNumber(phoneNum) {
        // Regular expression to validate US phone number (optional: area code, dashes, spaces)
        const phonePattern = /^(\+?1-?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
        return phonePattern.test(phoneNum);
    }
    return (
        <section className="grid grid-cols-1 md:grid-cols-6 px-5 pb-8 mt-8" id="contact">
            {/* info */}
            <div className="flex flex-col justify-center items-center md:col-start-1 md:col-end-4 md:px-8 pb-5">
                <RiCalendarScheduleLine className="text-5xl md:text-7xl pb-3" />
                <h2 className="text-2xl md:text-4xl font-semibold">SCHEDULE YOUR SERVICE</h2>
                <h3 className="text-xl text-orange-700 mt-6">
                    Online Scheduling
                </h3>
                <ol className="list-disc list-inside space-y-2">
                    <li>Step 1: Fill out the online form with your contact information, appliance details, and a brief description of the issue.</li>
                    <li>Step 2: Choose your preferred date and time for the service appointment.</li>
                    <li>Step 3: Submit the form and receive a confirmation email with your appointment details. We will call you to confirm your appointment based on availability</li>
                </ol>
                <h3 className="text-xl text-orange-700 mt-6">
                    Phone Scheduling
                </h3>
                <p>
                    Prefer to speak with someone directly? Call our friendly customer service team at 1-216-553-2564, and we&apos;ll assist you in scheduling your service appointment. Our representatives are available 24/7 to take your call and answer any questions you may have.
                </p>
            </div>



            {/* form */}
            <form className="md:col-start-4 md:col-end-7 border-2 px-3 py-3 rounded-lg bg-white shadow-lg" onSubmit={handleFormSubmit}>
                {result.length > 1 ? <div className="w-full h-full flex items-center justify-center"><p>{result}</p></div> :
                    <>
                        <label htmlFor='full-name' className="font-semibold">Full Name</label><br />
                        <input type='text' id="full-name" placeholder="FULL NAME" name="Full Name" required className="w-full border-2" /><br /><br />

                        <label htmlFor='phone' className="font-semibold">Contact Phone Number</label><br />
                        <input type='phone' id="phone" placeholder="PHONE NUMBER" name="phone number" pattern="^\d{10}$" title="Please enter a 10-digit phone number (digits only)" className="w-full border-2" required /><br /><br />

                        <label htmlFor='email' className="font-semibold">Contact Email</label><br />
                        <input type='email' id="email" placeholder="EMAIL" name="email" className="w-full border-2" required /><br /><br />

                        <label htmlFor='date' className="font-semibold">Choose a date</label><br />
                        <input type='date' id="date" name="date" className="w-full border-2" min={currentDate} required /><br /><br />

                        <label htmlFor="appt-time" className="font-semibold">Choose a time for your appointment:</label><br />
                        <input type="time" id="appt-time" name="appointment time" min="09:00" max="18:00" className="w-full border-2" required />
                        <small>Office hours are 9am to 6pm</small><br /><br />

                        <label htmlFor="description" className="font-semibold">Please describe your appliance issue</label><br />
                        <textarea id="description" rows={5} cols={30} placeholder="Please describe your appliance issue" className="w-full border-2" name="description"></textarea>

                        <button type="submit" className="bg-blue-800 border-2 border-white text-white w-full px-4 py-3 my-2 hover:bg-white hover:text-blue-800 hover:border-blue-800">Request Repair Service Now</button>
                    </>
                }

            </form>
        </section>
    )
}