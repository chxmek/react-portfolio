import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Address: {CONTACT.address}</p>
        <p className="my-4">Phone: {CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          Email: {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
