import React, { useRef } from 'react';

import styles from './contact-form.module.css';

function ContactForm() {
  const emailRef = useRef('');
  const nameRef = useRef('');
  const messageRef = useRef('');

  const email = emailRef.current.value;
  const name = nameRef.current.value;
  const message = messageRef.current.value;

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required ref={nameRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your message</label>
          <textarea id='message' rows='5' required ref={messageRef}></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
