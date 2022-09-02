import React, { useRef, useState, useEffect } from 'react';
import Portal from '../../HOC/Portal';
import Notification from '../ui/notification';

import styles from './contact-form.module.css';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'something went wrong');
  }
}

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState('');
  const [requestError, setRequestError] = useState('');

  const emailRef = useRef('');
  const nameRef = useRef('');
  const messageRef = useRef('');

  const userEmail = emailRef.current.value;
  const userName = nameRef.current.value;
  const userMessage = messageRef.current.value;

  useEffect(() => {
    let timer;

    if (requestStatus === 'success' || requestStatus === 'error') {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: userEmail,
        name: userName,
        message: userMessage,
      });
      setRequestStatus('success');
      emailRef.current.value = '';
      nameRef.current.value = '';
      messageRef.current.value = '';
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }

    setRequestStatus('success');
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is being sent.',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
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
      {notification && (
        <Portal>
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        </Portal>
      )}
    </section>
  );
}

export default ContactForm;
