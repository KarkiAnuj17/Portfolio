import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anuj Karki
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/KarkiAnuj17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/anuj-karki-5a48ab2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="mailto:karkianuj111@gmail.com"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={20} className="text-white" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Anuj Karki
            </p>
            <p className="text-gray-500 text-sm mt-1">© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
