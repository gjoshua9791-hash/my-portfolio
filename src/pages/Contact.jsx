import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <div className="contact_grid">
                <div className="contact_info">
                    <h2>Connect With Me</h2>
                    <p>Reach out for anything, I'm here.</p>

                    <div className="contact_links">
                        <a href="https://github.com/gjoshua9791-hash" target="_blank" rel="noreferrer">
                        GitHub</a>
                    </div>
                </div>
                <form className="contact_form">
                    <label>Name
                        <input type="text" name="name" required />
                    </label>
                    <label>Email
                        <input type="email" name="email" required />
                    </label>
                    <label>Message
                        <textarea type="message" rows="5" required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </section>
        );
}