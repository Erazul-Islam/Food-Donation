const Contact = () => {
    return (
        <div className="mt-10 w-1/3 lg:ml-48 lg:mr-48 mb-10">
            <div>
                <p className="text-center text-4xl font-bold">Conatact Us</p>
            </div>
            <div className="mt-10 flex gap-4">
                <input type="text" placeholder="Your Name" className="input input-bordered input-warning w-full rounded-xl max-w-xs" />
                <input type="text" placeholder="Email" className="input input-bordered input-warning w-full rounded-xl max-w-xs" />
            </div>
            <div>
                <input type="text" placeholder="Phone" className="input mt-4 input-bordered input-warning w-full rounded-xl max-w-xs" />
            </div>
            <div>
                <textarea className="textarea mt-4 w-full h-64 textarea-warning rounded-xl" placeholder="Your Message"></textarea>
            </div>
            <div>
                <button className="btn btn-warning rounded-lg">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;