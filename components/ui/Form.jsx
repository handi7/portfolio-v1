import React, { useRef, useState } from "react";
import classes from "@/styles/form.module.css";
import emailjs from "@emailjs/browser";
import { Alert, Spinner } from "reactstrap";

export default function Form() {
  const ref = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_ocbd47w",
        "template_91blq1h",
        ref.current,
        "sUVbAoxAB4CdJSxtm"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setForm({});
        },
        (error) => {
          setLoading(false);
          setError(true);
        }
      );
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className={`${classes.form}`} ref={ref} onSubmit={submitHandler}>
      {success && <Alert>Terimakasih, pesan anda sudah terkirim.</Alert>}
      {error && <Alert color="danger">Error.</Alert>}
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name || ""}
          onChange={inputHandler}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={form.email || ""}
          onChange={inputHandler}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          name="message"
          value={form.message || ""}
          onChange={inputHandler}
          required
        />
      </div>

      <button disabled={loading} className="primary__btn button" type="submit">
        {loading ? (
          <>
            <Spinner size="sm" /> Sending. . .
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
}
