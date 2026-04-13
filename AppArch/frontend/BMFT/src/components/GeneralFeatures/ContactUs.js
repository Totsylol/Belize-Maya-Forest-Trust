import React, { useState } from 'react';
import styles from '../styles/contactus.module.css';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <button className={styles.accordionBtn} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={styles.accordionIcon}>{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Contact Info */}
      <section className={styles.contactInfo}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Mailing Address</h3>
            <p>11B Garden City Plaza<br />Mountain View Blvd.<br />Belmopan, Belize</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Email</h3>
            <p><a href="mailto:email@placeholder.com" className={styles.emailLink}>email@placeholder.com</a></p>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className={styles.accordionSection}>
        <AccordionItem title="About BMFT">
          <p>
            The Belize Maya Forest Trust (BMFT) is a Non-Governmental Organization (NGO) recognized under Belize's NGO Act in August 2021. The BMFT serves as a dedicated trustee, steward, and manager tasked with implementing protective and sustainable conservation measures within the Belize Maya Forest reserve and its surrounding areas.
          </p>
        </AccordionItem>

        <AccordionItem title="Grievance Mechanism">
          <p>
            The BMFT is committed to responsible and transparent operations. If you have a concern, complaint, or grievance related to BMFT's activities, programs, or personnel, we encourage you to reach out through our formal grievance process.
          </p>
          <p style={{marginTop: '0.75rem'}}>
            Grievances can be submitted in writing to: <a href="mailto:email@placeholder.com" className={styles.emailLink}>email@placeholder.com</a>
          </p>
          <p style={{marginTop: '0.75rem'}}>
            All grievances are treated confidentially and will be reviewed and addressed in a timely manner. BMFT prohibits any retaliation against individuals who submit concerns in good faith.
          </p>
        </AccordionItem>

        <AccordionItem title="Community Stewards Program Inquiries">
          <p>
            For inquiries related to the Community Stewards Program, including the Sustainability Support Microgrants and Green Futures Scholarships, please contact our Community Outreach Coordinator:
          </p>
          <p style={{marginTop: '0.75rem'}}>
            <a href="mailto:email@placeholder.com" className={styles.emailLink}>email@placeholder.com</a>
          </p>
        </AccordionItem>

        <AccordionItem title="Volunteer & Partnership Opportunities">
          <p>
            Interested in volunteering, interning, or partnering with BMFT? We welcome individuals and organizations who share our commitment to conservation. Reach out to us at <a href="mailto:email@placeholder.com" className={styles.emailLink}>email@placeholder.com</a> or visit our <a href="/Getinvolved" className={styles.emailLink}>Get Involved</a> page to learn more.
          </p>
        </AccordionItem>
      </section>

      {/* Contact Form */}
      <section id="feedback" className={styles.formSection}>
        <h2 className={styles.formTitle}>Send Us a Message</h2>
        <p className={styles.formSubtitle}>
          Use this form to get in touch or share your feedback.
        </p>
        {submitted ? (
          <p className={styles.successMessage}>Thanks for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />

            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />

            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={styles.input} required />

            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={styles.textarea} rows={5} required />

            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
