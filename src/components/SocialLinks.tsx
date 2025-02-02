import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg z-50">
      <a 
        href="https://www.linkedin.com/in/kianimd/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-[#0077b5] transition-all hover:scale-110 flex items-center justify-center"
        title="Connect on LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href="mailto:cameron@kianimd.com"
        className="text-gray-700 hover:text-primary-600 transition-all hover:scale-110 flex items-center justify-center"
        title="Send an email"
      >
        <MdEmail size={24} />
      </a>
    </div>
  );
};

export default SocialLinks; 