
const Contact = () => {
    return(
        <div>
            <h1 className="m-4 p-5 font-bold text-3xl ">Contact us</h1>
            <form>
                <input type="text" className="border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border-black p-2 m-2" placeholder="message"/>
                <button className="bg-gray-400 p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    );
};
export default Contact;