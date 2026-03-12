export default function Page({ title, children }) {
    return ( 
        <section>
            <h1 style={{ marginTop: 0}}>{title}</h1>
            {children}
        </section>
    );
}