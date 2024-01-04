import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white mt-9 p-1">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">🌐 Connect with Us:</h2>
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center mb-4">
                    <FaWhatsapp className="mr-2" />
                    <a
                        href="https://chat.whatsapp.com/CFeDvPQmH5v2Hg4tzHjr8g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        WhatsApp Group
                    </a>
                </div>
                <div className="flex items-center mb-4">
                    <FaTwitter className="mr-2" />
                    <a
                        href="https://twitter.com/SoarXNetwork"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        Twitter
                    </a>
                </div>
                <div className="flex items-center mb-4">
                    <FaInstagram className="mr-2" />
                    <a
                        href="https://www.instagram.com/soarxnetwork/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        Instagram
                    </a>
                </div>
                <div className="flex items-center mb-4">
                    <FaLinkedin className="mr-2" />
                    <a
                        href="https://www.linkedin.com/company/soarxnetwork/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        Linkedin
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
