import React from 'react';

const ContactPage = () => {
    return (
        <>
            {/* Metadata */}
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Service Details - Gp Bootstrap Template</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />

                {/* Favicons */}
                <link href="assets/img/favicon.png" rel="icon" />
                <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                {/* Fonts */}
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />

                {/* Vendor CSS Files */}
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />

                {/* Main CSS File */}
                <link href="assets/css/main.css" rel="stylesheet" />
            </head>

            <body className="service-details-page">
                {/* Contact Section */}
                <section id="contact" className="contact section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                            <iframe
                                style={{ border: 0, width: '100%', height: '270px' }}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="row gy-4">
                            {/* Contact Info */}
                            <div className="col-lg-4">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-lg-8">
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    className="php-email-form"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="6"
                                                placeholder="Message"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer id="footer" className="footer dark-background">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6 footer-about">
                                    <a href="index.html" className="logo d-flex align-items-center">
                                        <span className="sitename">GP</span>
                                    </a>
                                    <div className="footer-contact pt-3">
                                        <p>A108 Adam Street</p>
                                        <p>New York, NY 535022</p>
                                        <p className="mt-3">
                                            <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                                        </p>
                                        <p>
                                            <strong>Email:</strong> <span>info@example.com</span>
                                        </p>
                                    </div>
                                    <div className="social-links d-flex mt-4">
                                        <a href=""><i className="bi bi-twitter-x"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-3 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Home</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> About us</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Services</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Terms of service</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-2 col-md-3 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Web Design</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Web Development</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Product Management</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Marketing</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <a href="#"> Graphic Design</a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
