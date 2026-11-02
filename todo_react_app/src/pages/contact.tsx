import { useState, type FormEvent } from "react";
import {
  AtSign,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { z } from "zod";
import { contact } from "../data/projects";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});
type Form = z.infer<typeof schema>;
const empty: Form = { name: "", email: "", subject: "", message: "" };

export function ContactPage() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Partial<Record<keyof Form, string>> = {};
      r.error.issues.forEach((i) => { const k = i.path[0] as keyof Form; errs[k] ??= i.message; });
      setErrors(errs);
      setSent(false);
      return;
    }
    setErrors({});
    setForm(empty);
    setSent(true);
  };

  const field = (k: keyof Form, label: string, type = "text") => (
    <div className={`field ${errors[k] ? "invalid" : ""}`}>
      <label htmlFor={k}>{label}</label>
      {k === "message" ? (
        <textarea id={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
      ) : (
        <input id={k} type={type} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
      )}
      {errors[k] && <div className="err">{errors[k]}</div>}
    </div>
  );

  return (
    <div className="page-top container section">
      <p className="eyebrow fade-up">Contact</p>
      <h1 className="h1 fade-up delay-1">Let's build <span className="text-gradient">something great.</span></h1>
      <div className="two-col contact-layout">
        <form className="card form" onSubmit={submit} noValidate>
          {sent && (
            <div className="success" role="status">
              <CheckCircle2 />
              <div><b>Message sent!</b><br /><span className="contact-feedback-copy">Thanks for reaching out — I'll reply within 24 hours.</span></div>
            </div>
          )}
          {field("name", "Name")}
          {field("email", "Email", "email")}
          {field("subject", "Subject")}
          {field("message", "Message")}
          <button type="submit" className="btn btn-primary form-submit"><Send size={16} /> Send message</button>
        </form>
        <div className="grid contact-info">
          <a href={`mailto:${contact.email}`} className="card info-item"><span className="ic"><Mail size={20} /></span><div><small>Email</small>{contact.email}</div></a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="card info-item"><span className="ic"><Phone size={20} /></span><div><small>Phone</small>{contact.phone}</div></a>
          <div className="card info-item"><span className="ic"><MapPin size={20} /></span><div><small>Location</small>{contact.location}</div></div>
          <div className="socials contact-socials">
            <a className="social" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
            <a className="social" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
            <a className="social" href={contact.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><AtSign size={18} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}