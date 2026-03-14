export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        if(!name || !email || !message) {
            return res.status(400).json({ message: "All Fields Are Required"});
        }

        console.log("New contact form submission: ");
        console.log({ name, email, message });

        return res.status(200).json({ message: "Success!"});
    } catch(err) {
        return res.status(500).json({ message: "An Error Has Occured" });
    }
}