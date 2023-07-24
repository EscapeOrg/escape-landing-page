import "../styles/ContactUs.css"
import emailjs from '@emailjs/browser';
import {useEffect} from 'react';



function ContactUs() {

    // // EmailJS KEYS
    const PUBLIC_KEY = "ZJpkNgDevLRB6ogob";
    const SERVICE_ID = "service_daal8f8";
    const TEMPLATE_ID = "template_w0f6cx8";


    // // FOR TESTING USE
    // const PUBLIC_KEY = "JvcL_2oMY-wer8Ida";
    // const SERVICE_ID = "service_vjm4zda";
    // const TEMPLATE_ID = "template_wd2eh73";

    emailjs.init(PUBLIC_KEY);

    useEffect(() => {
        // Extract form data from HTML
        const contact_form = document.querySelector("#contact-form");
        const submit_button = document.querySelector("#submit-button");

        emailjs.init(PUBLIC_KEY);

        // Handle submission event
        const handleSubmit = (e) => {
            e.preventDefault();

            // Convert into object format
            const formData = new FormData(contact_form);
            const input_fields = {
                from_name: formData.get("user_name"),
                message: formData.get("message"),
                from_email: formData.get("user_email")
            }
  
        // Change button text
        submit_button.innerText = "Sending...";

        // Send email
        emailjs.send(SERVICE_ID, TEMPLATE_ID, input_fields)
            .then(() => {
            submit_button.innerText = "Sent!";
            contact_form.reset();
            })
            .catch(() => {
            submit_button.innerText = "Failed to send";
            });
        };

        contact_form.addEventListener("submit", handleSubmit);

        return () => {
          contact_form.removeEventListener("submit", handleSubmit);
        };
      }, [PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID]);

    return (
        <div className="contact">
            <form id='contact-form'>
                <label htmlFor="user_name">Name</label>
                <input id="user_name" type="text" name="user_name" placeholder="Your name" required />
        
                <label htmlFor="user_email">Email</label>
                <input id="user_email" type="email" name="user_email" placeholder="example@email.com" required />
        
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message" required></textarea>

                <button type="submit" id="submit-button">
                    Send
                </button>
            </form>
        </div>

    );
}

export default ContactUs;