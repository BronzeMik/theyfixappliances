
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function ScheduleService() {
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
                Prefer to speak with someone directly? Call our friendly customer service team at 1-800-999-9999, and we&apos;ll assist you in scheduling your service appointment. Our representatives are available 24/7 to take your call and answer any questions you may have.
                </p>
            </div>
            


            {/* form */}
            <form action="" method="" className="md:col-start-4 md:col-end-7 border-2 px-3 py-3 rounded-lg bg-white shadow-lg">
                <label htmlFor='full-name' className="font-semibold">Full Name</label><br />
                <input type='text' id="full-name" placeholder="FULL NAME" name="Full Name" required className="w-full border-2" /><br /><br />

                <label htmlFor='phone' className="font-semibold">Contact Phone Number</label><br />
                <input type='phone' id="phone" placeholder="PHONE NUMBER" name="phone number" className="w-full border-2" required /><br /><br />

                <label htmlFor='email' className="font-semibold">Contact Email</label><br />
                <input type='email' id="email" placeholder="EMAIL" name="email" className="w-full border-2" required /><br /><br />

                <label htmlFor='date' className="font-semibold">Choose a date</label><br />
                <input type='date' id="date" name="date" className="w-full border-2" required /><br /><br />

                <label htmlFor="appt-time" className="font-semibold">Choose a time for your appointment:</label><br />
                <input type="time" id="appt-time" name="appointment time" min="09:00" max="18:00" className="w-full border-2" required />
                <small>Office hours are 9am to 6pm</small><br /><br />

                <label htmlFor="description" className="font-semibold">Please describe your appliance issue</label><br />
                <textarea id="description" rows={5} cols={30} placeholder="Please describe your appliance issue" className="w-full border-2"></textarea>

                <button type="submit" className="bg-blue-800 border-2 border-white text-white w-full px-4 py-3 my-2 hover:bg-white hover:text-blue-800 hover:border-blue-800">Request Repair Service Now</button>
            </form>
        </section>
    )
}