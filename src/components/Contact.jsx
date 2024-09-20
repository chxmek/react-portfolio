import { useEffect, useState } from 'react';
import { CONTACT } from "../constants";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // เพิ่ม state สำหรับ text

  const handleScroll = () => {
    const sectionPosition = document.getElementById('contact').getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
      setIsVisible(true);
      setIsTextVisible(true); // ตั้งค่าให้ text visible
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className={`my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-150'}`}>
        Get in Touch
      </h2>
      <div className={`text-center tracking-tighter transform transition-transform duration-500 ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
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
