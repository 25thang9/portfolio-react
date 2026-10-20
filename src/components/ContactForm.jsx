import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(e) {
    const { name, value } = e.target;

    setForm((old) => ({
      ...old,
      [name]: value,
    }));

    setSent(false);
  }

  function submit(e) {
    e.preventDefault();

    const next = {};

    if (!form.name.trim()) {
      next.name = 'Chưa nhập họ tên';
    }

    if (!form.email.includes('@')) {
      next.email = 'Email chưa hợp lệ';
    }

    if (form.message.trim().length < 10) {
      next.message =
        'Nội dung phải có ít nhất 10 ký tự';
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSent(true);
    } else {
      setSent(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      noValidate
    >
      <label htmlFor="name">
        Họ tên
      </label>

      <input
        id="name"
        name="name"
        value={form.name}
        onChange={update}
      />

      {errors.name && (
        <p className="form-status error">
          {errors.name}
        </p>
      )}

      <label htmlFor="email">
        Email
      </label>

      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={update}
      />

      {errors.email && (
        <p className="form-status error">
          {errors.email}
        </p>
      )}

      <label htmlFor="message">
        Nội dung
      </label>

      <textarea
        id="message"
        name="message"
        rows="5"
        value={form.message}
        onChange={update}
      />

      {errors.message && (
        <p className="form-status error">
          {errors.message}
        </p>
      )}

      <button type="submit">
        Gửi
      </button>

      {sent && (
        <p className="form-status success">
          Gửi thành công!
        </p>
      )}
    </form>
  );
}