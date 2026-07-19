import { useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import SectionHeading from '../common/SectionHeading.jsx';
import { messageService } from '../../services/api.js';
import './Contact.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm((value) => ({ ...value, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await messageService.create(form);
      toast.success('Message sent successfully.');
      setForm(initialForm);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell alt">
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s build something reliable" text="Send a message for software engineering opportunities, backend projects or full stack collaboration." />
          <div className="contact-note portfolio-card">
            <strong>Response focus</strong>
            <p>Backend systems, secure REST APIs, MERN applications and software engineering roles.</p>
          </div>
        </div>
        <form className="contact-form portfolio-card" onSubmit={submit}>
          <input name="name" value={form.name} onChange={update} placeholder="Name" required minLength="2" />
          <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" required />
          <input name="subject" value={form.subject} onChange={update} placeholder="Subject" required minLength="3" />
          <textarea name="message" value={form.message} onChange={update} placeholder="Message" rows="6" required minLength="10" />
          <button className="btn-portfolio" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
