import { Button, Divider } from "@nextui-org/react"
import Link from "next/link"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
          Contact Me
        </h2>
        <Divider className="w-24 h-1 mb-12 mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-orange-600" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Get in Touch</h3>
            <p className="text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex items-center space-x-4 text-gray-300">
              <FaEnvelope className="text-purple-500" />
              <span>karkianuj111@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <FaPhone className="text-purple-500" />
              <span>+977 9844289330</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <FaMapMarkerAlt className="text-purple-500" />
              <span>Kathmandu,Nepal</span>
            </div>
           
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

