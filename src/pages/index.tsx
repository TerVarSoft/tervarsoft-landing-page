import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="font-sans bg-gray-100 h-full flex flex-col">
      <header className="bg-white text-black p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full md:w-1/2">
            <StaticImage
              width={200}
              
              src="../images/hero-logo.png"  // Path relative to this component
              alt="Hero Image"
              placeholder="blurred"  // Optional placeholder effect
              layout="constrained"   // Optional: Choose layout for the image
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home-section" className="hover:text-gray-300">Home</a></li>
              <li><a href="#about-section" className="hover:text-gray-300">About</a></li>
              <li><a href="#services-section" className="hover:text-gray-300">Services</a></li>
              <li><a href="#contact-section" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <div id="home-section" className="relative h-screen flex items-center">
        {/* Left side: Title and Description */}
        <div className="w-full md:w-1/2 px-8 text-center md:text-left m-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tailored Software Solutions for Your Business</h1>
          <p className="text-lg mb-6">
            At TerVarSoft, we provide high-quality, scalable software development services that drive growth. From custom web apps to mobile solutions, our expert team works with you to bring your ideas to life, with a focus on innovation, security, and agility.
          </p>
          <a href="#services-section" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
            Explore Our Services
          </a>
        </div>

        <StaticImage
          className="w-full md:w-1/2 h-full bg-cover bg-center"
          src="../images/hero.jpg"  // Path relative to this component
          alt="Hero Image"
          placeholder="blurred"  // Optional placeholder effect
          layout="constrained"   // Optional: Choose layout for the image
        />
        {/* Right side: Background image */}
   
      </div>

      <section id="about-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            We are a Brazilian company dedicated to bringing the best software development solutions to businesses worldwide. 
            With a focus on innovation and excellence, we hire the top developers from all across Latin America, ensuring that we provide world-class expertise to our clients.
          </p>
          <div className="flex justify-center">
            <div className="w-1/2 bg-blue-500 h-1 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Creation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <StaticImage
                className="w-full h-48 object-cover" 
                src="../images/website-creation.jpg"
                alt="Staff Augmentation"
                placeholder="blurred" 
                layout="constrained" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Websites Creation and Maintenance</h3>
                <p className="text-gray-600">
                  We create custom websites and ensure they stay secure and up-to-date, so you can focus on growing your business.
                </p>
              </div>
            </div>

            {/* Staff Augmentation Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <StaticImage
                className="w-full h-48 object-cover" 
                src="../images/staff-augmentation.jpg"
                alt="Staff Augmentation"
                placeholder="blurred" 
                layout="constrained" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Staff Augmentation</h3>
                <p className="text-gray-600">
                  Our Staff Augmentation service provides skilled professionals to seamlessly integrate into your team, offering the expertise you need for your projects, without the overhead of recruitment.
                </p>
              </div>
            </div>

            {/* Dedicated Team Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <StaticImage
                className="w-full h-48 object-cover" 
                src="../images/dedicated-team.jpg"
                alt="Staff Augmentation"
                placeholder="blurred" 
                layout="constrained" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dedicated Team</h3>
                <p className="text-gray-600">
                  Our Dedicated Team service assembles a team of experts tailored specifically to your project needs, ensuring long-term collaboration and top-tier delivery for your business.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <main id="contact-section" className="py-12 flex-1 bg-white">

        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">We are waiting for you!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you ready to discuss your next project with us?
          </p>
          <a href="mailto:info@tervarsoft.com" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Contact Us
          </a>
        </section>
      </main>


      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 TerVarSoft. All rights reserved.</p>
      </footer>
    </div>
  )
}

const clients = [
  {
    name: "Grafica Tunari",
    url: "https://graftunari.github.io"
  }
];

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
