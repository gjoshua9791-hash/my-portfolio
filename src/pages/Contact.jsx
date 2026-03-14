import "./Contact.css";
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [ status, setStatus ] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");
        try{
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if(response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: ""});
            } else{
                setStatus(data.message || "An Error Occurred.");
            } 
        } catch (err) {
            setStatus("An Error Occurred. Please try again.");
        }
    }
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <div className="contact_grid">
                <div className="contact_info">
                    <h2>Connect With Me</h2>
                    <p>Reach out for anything, I'm always here.</p>

                    <div className="contact_links">
                        <a href="https://github.com/gjoshua9791-hash" target="_blank" rel="noreferrer">
                        GitHub</a>
                    </div>
                </div>
                <form className="contact_form" onSubmit={handleSubmit}>
                    <label>Name
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>Message
                        <textarea name="message" rows="5" value={formData.message} onChange={handleChange}  required />
                    </label>
                    <button type="submit">Send Message</button>

                    {status && <p>{status}</p>}
                </form>
            </div>

        </section>
        );
}