import React, { useRef, useState } from "react";
import classes from "@/styles/form.module.css";
import emailjs from "@emailjs/browser";
import { Spinner } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";

export default function Form() {
  const ref = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        ref.current,
        process.env.PUB_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setForm({});
          toast.success("Pesan terkirim.", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className={`${classes.form}`} ref={ref} onSubmit={submitHandler}>
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

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        closeButton={false}
        icon={false}
        bodyClassName="bg-transparent"
        className={classes.toast}
      />
    </form>
  );
}
