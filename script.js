<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swift Switch College - Transform Your Future</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .hero-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-2xl font-bold text-indigo-600">Swift Switch College</h1>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#home" class="nav-link text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                        <a href="#programs" class="nav-link text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</a>
                        <a href="#about" class="nav-link text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#contact" class="nav-link text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                        <button onclick="openApplicationModal()" class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">Apply Now</button>
                    </div>
                </div>
                <div class="md:hidden">
                    <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-indigo-600 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#home" class="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="#programs" class="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Programs</a>
                <a href="#about" class="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="#contact" class="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                <button onclick="openApplicationModal()" class="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700">Apply Now</button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-gradient pt-16 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
                    Transform Your Future with
                    <span class="block text-yellow-300">Swift Switch College</span>
                </h1>
                <p class="text-xl text-white mb-8 max-w-3xl mx-auto">
                    Fast-track your career with our innovative programs designed for rapid skill development and immediate job placement.
                </p>
                <div class="space-x-4">
                    <button onclick="openApplicationModal()" class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
                        Start Your Journey
                    </button>
                    <button onclick="scrollToSection('programs')" class="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                        View Programs
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our accelerated programs designed to get you job-ready in months, not years.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Program 1 -->
                <div class="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
                    <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l6-6v13l-6 6z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
                    <p class="text-gray-600 mb-6">Master modern web technologies including HTML, CSS, JavaScript, React, and Node.js in just 12 weeks.</p>
                    <div class="mb-6">
                        <span class="text-2xl font-bold text-indigo-600">$4,999</span>
                        <span class="text-gray-500 ml-2">12 weeks</span>
                    </div>
                    <button onclick="showProgramDetails('Web Development')" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Learn More
                    </button>
                </div>

                <!-- Program 2 -->
                <div class="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
                    <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Data Analytics</h3>
                    <p class="text-gray-600 mb-6">Learn Python, SQL, Tableau, and machine learning fundamentals to become a data analyst in 10 weeks.</p>
                    <div class="mb-6">
                        <span class="text-2xl font-bold text-indigo-600">$4,499</span>
                        <span class="text-gray-500 ml-2">10 weeks</span>
                    </div>
                    <button onclick="showProgramDetails('Data Analytics')" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Learn More
                    </button>
                </div>

                <!-- Program 3 -->
                <div class="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
                    <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
                    <p class="text-gray-600 mb-6">Protect digital assets with comprehensive cybersecurity training covering ethical hacking and defense strategies.</p>
                    <div class="mb-6">
                        <span class="text-2xl font-bold text-indigo-600">$5,499</span>
                        <span class="text-gray-500 ml-2">14 weeks</span>
                    </div>
                    <button onclick="showProgramDetails('Cybersecurity')" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Swift Switch College?</h2>
                    <p class="text-lg text-gray-600 mb-8">
                        We're revolutionizing education with fast-track programs that get you job-ready quickly. Our industry-experienced instructors and hands-on approach ensure you graduate with real-world skills.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">95% Job Placement Rate</h3>
                                <p class="text-gray-600">Our graduates find employment within 6 months of completion.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Industry Experts</h3>
                                <p class="text-gray-600">Learn from professionals currently working in top tech companies.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                                <p class="text-gray-600">Evening and weekend classes available to fit your schedule.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
                    <div class="space-y-6">
                        <div class="border-l-4 border-indigo-500 pl-4">
                            <p class="text-gray-600 italic mb-2">"Swift Switch College changed my life. I went from retail to software development in just 3 months!"</p>
                            <p class="text-sm font-semibold text-gray-900">- Sarah Johnson, Web Developer at TechCorp</p>
                        </div>
                        <div class="border-l-4 border-green-500 pl-4">
                            <p class="text-gray-600 italic mb-2">"The data analytics program gave me the skills I needed to land my dream job at a Fortune 500 company."</p>
                            <p class="text-sm font-semibold text-gray-900">- Mike Chen, Data Analyst at GlobalTech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p class="text-xl text-gray-600">Ready to start your journey? Contact us today!</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span class="text-gray-700">123 Innovation Drive, Tech City, TC 12345</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span class="text-gray-700">(555) 123-SWIFT</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span class="text-gray-700">info@swiftswitchcollege.edu</span>
                        </div>
                    </div>
                    
                    <div class="mt-8">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
                        <div class="text-gray-700">
                            <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                            <p>Saturday: 9:00 AM - 5:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                    <form id="contact-form" onsubmit="submitContactForm(event)">
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Program Interest</label>
                            <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                                <option>Select a program</option>
                                <option>Web Development</option>
                                <option>Data Analytics</option>
                                <option>Cybersecurity</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Swift Switch College</h3>
                    <p class="text-gray-400">Transforming careers through accelerated education and hands-on training.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Programs</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">Web Development</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Data Analytics</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Cybersecurity</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Resources</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">Student Portal</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Career Services</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Alumni Network</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Connect</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Swift Switch College. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Application Modal -->
    <div id="application-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">Apply to Swift Switch College</h2>
                    <button onclick="closeApplicationModal()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <form id="application-form" onsubmit="submitApplication(event)">
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                            <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Program of Interest *</label>
                        <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                            <option value="">Select a program</option>
                            <option value="web-development">Web Development (12 weeks - $4,999)</option>
                            <option value="data-analytics">Data Analytics (10 weeks - $4,499)</option>
                            <option value="cybersecurity">Cybersecurity (14 weeks - $5,499)</option>
                        </select>
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                            <option>High School</option>
                            <option>Some College</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>Other</option>
                        </select>
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Why are you interested in this program?</label>
                        <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Tell us about your goals and motivation..."></textarea>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button type="button" onclick="closeApplicationModal()" class="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" class="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Program Details Modal -->
    <div id="program-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h2 id="program-title" class="text-2xl font-bold text-gray-900"></h2>
                    <button onclick="closeProgramModal()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div id="program-content"></div>
            </div>
        </div>
    </div>

    <script>
        // Navigation functionality
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Application modal functionality
        function openApplicationModal() {
            document.getElementById('application-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeApplicationModal() {
            document.getElementById('application-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function submitApplication(event) {
            event.preventDefault();
            
            // Simulate form submission
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your application! We will contact you within 24 hours to schedule your interview.');
                closeApplicationModal();
                event.target.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }

        // Program details modal
        function showProgramDetails(programName) {
            const modal = document.getElementById('program-modal');
            const title = document.getElementById('program-title');
            const content = document.getElementById('program-content');
            
            title.textContent = programName + ' Program';
            
            const programDetails = {
                'Web Development': {
                    duration: '12 weeks',
                    price: '$4,999',
                    description: 'Master modern web development with hands-on projects and real-world applications.',
                    curriculum: [
                        'HTML5 & CSS3 Fundamentals',
                        'JavaScript & ES6+',
                        'React.js & Component Architecture',
                        'Node.js & Express.js',
                        'Database Design & MongoDB',
                        'API Development & Integration',
                        'Version Control with Git',
                        'Deployment & DevOps Basics'
                    ],
                    outcomes: [
                        'Build responsive, interactive websites',
                        'Develop full-stack web applications',
                        'Work with modern development tools',
                        'Collaborate using industry best practices'
                    ]
                },
                'Data Analytics': {
                    duration: '10 weeks',
                    price: '$4,499',
                    description: 'Transform raw data into actionable insights using industry-standard tools and techniques.',
                    curriculum: [
                        'Python Programming Fundamentals',
                        'Data Manipulation with Pandas',
                        'Statistical Analysis & Visualization',
                        'SQL & Database Querying',
                        'Tableau & Power BI',
                        'Machine Learning Basics',
                        'Data Cleaning & Preprocessing',
                        'Business Intelligence & Reporting'
                    ],
                    outcomes: [
                        'Analyze complex datasets',
                        'Create compelling data visualizations',
                        'Build predictive models',
                        'Present insights to stakeholders'
                    ]
                },
                'Cybersecurity': {
                    duration: '14 weeks',
                    price: '$5,499',
                    description: 'Protect digital assets and learn cutting-edge security practices in our comprehensive program.',
                    curriculum: [
                        'Network Security Fundamentals',
                        'Ethical Hacking & Penetration Testing',
                        'Risk Assessment & Management',
                        'Incident Response & Forensics',
                        'Security Tools & Technologies',
                        'Compliance & Governance',
                        'Cloud Security',
                        'Security Awareness & Training'
                    ],
                    outcomes: [
                        'Identify and mitigate security threats',
                        'Conduct security assessments',
                        'Implement security protocols',
                        'Respond to security incidents'
                    ]
                }
            };
            
            const program = programDetails[programName];
            
            content.innerHTML = `
                <div class="mb-6">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">${program.duration}</span>
                        <span class="text-2xl font-bold text-indigo-600">${program.price}</span>
                    </div>
                    <p class="text-gray-600 text-lg">${program.description}</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Curriculum</h3>
                        <ul class="space-y-2">
                            ${program.curriculum.map(item => `<li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="text-gray-700">${item}</span></li>`).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Learning Outcomes</h3>
                        <ul class="space-y-2">
                            ${program.outcomes.map(item => `<li class="flex items-start"><svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="text-gray-700">${item}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="flex space-x-4">
                    <button onclick="closeProgramModal()" class="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Close
                    </button>
                    <button onclick="closeProgramModal(); openApplicationModal();" class="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Apply Now
                    </button>
                </div>
            `;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeProgramModal() {
            document.getElementById('program-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Contact form functionality
        function submitContactForm(event) {
            event.preventDefault();
            
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you within 24 hours.');
                event.target.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            const applicationModal = document.getElementById('application-modal');
            const programModal = document.getElementById('program-modal');
            
            if (event.target === applicationModal) {
                closeApplicationModal();
            }
            if (event.target === programModal) {
                closeProgramModal();
            }
        });

        // Close modals with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeApplicationModal();
                closeProgramModal();
            }
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'968020e973221b54',t:'MTc1Mzk5NjcwOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
