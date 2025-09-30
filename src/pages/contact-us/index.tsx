import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Mail, MapPin, Clock } from "lucide-react";
import "./index.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you within 24-48 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the RecodeHive team. We're here to help with your questions, feedback, and collaboration opportunities."
    >
      <div className="enhanced-contact-container">
        <div className="contact-content-wrapper">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">
              Get In Touch
            </h1>
            <p className="contact-description">
              Have questions, feedback, or want to collaborate? We'd love to hear from you. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div>
                <h2 className="contact-info-title">
                  Contact Information
                </h2>
                
                <div className="contact-info-items">
                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <Mail className="w-6 h-6" style={{ color: 'var(--contact-accent-primary)' }} />
                    </div>
                    <div className="contact-info-details">
                      <h3>Email</h3>
                      <a 
                        href="mailto:sanjay@recodehive.com"
                      >
                        sanjay@recodehive.com
                      </a>
                      <p>
                        General inquiries and support
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <Clock className="w-6 h-6" style={{ color: 'var(--contact-accent-primary)' }} />
                    </div>
                    <div className="contact-info-details">
                      <h3>Response Time</h3>
                      <p style={{ marginTop: 0, color: 'var(--contact-text-secondary)' }}>
                        Within 24-48 hours
                      </p>
                      <p>
                        We'll get back to you promptly
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <MapPin className="w-6 h-6" style={{ color: 'var(--contact-accent-primary)' }} />
                    </div>
                    <div className="contact-info-details">
                      <h3>Location</h3>
                      <p style={{ marginTop: 0, color: 'var(--contact-text-secondary)' }}>
                        Online & Global
                      </p>
                      <p>
                        Serving developers worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="contact-info-box">
                <h3>
                  What we can help you with:
                </h3>
                <ul>
                  <li>
                    <span className="bullet"></span>
                    <span>Learning resources and tutorials</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Technical support and guidance</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Collaboration opportunities</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Partnership inquiries</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Content suggestions and feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-form-title">
                Send us a message
              </h2>
              
              {submitStatus.type && (
                <div
                  className={`form-status-message ${
                    submitStatus.type === "success" ? "success" : "error"
                  }`}
                  role="alert"
                >
                  {submitStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`form-input ${errors.firstName ? "error" : ""}`}
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <span className="form-error" id="firstName-error" role="alert">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`form-input ${errors.lastName ? "error" : ""}`}
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <span className="form-error" id="lastName-error" role="alert">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="form-error" id="email-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`form-select ${errors.subject ? "error" : ""}`}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <span className="form-error" id="subject-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <span className="form-error" id="message-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="contact-resources">
            <h2 className="resources-title">
              Other Ways to Connect
            </h2>
            <div className="resources-grid">
              <a
                href="/community"
                className="resource-card"
              >
                <div className="resource-icon">📚</div>
                <h3>Community</h3>
                <p>
                  Join our community and connect with fellow developers
                </p>
              </a>
              
              <a
                href="/docs"
                className="resource-card"
              >
                <div className="resource-icon">📖</div>
                <h3>Documentation</h3>
                <p>
                  Explore our comprehensive learning resources
                </p>
              </a>
              
              <a
                href="/blogs"
                className="resource-card"
              >
                <div className="resource-icon">✍️</div>
                <h3>Blog</h3>
                <p>
                  Read our latest articles and tutorials
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;