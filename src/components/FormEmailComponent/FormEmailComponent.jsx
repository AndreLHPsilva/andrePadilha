import { useLoading } from "@/hooks/useLoading";
import { useNotify } from "@/hooks/useNotify";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function FormEmailComponent() {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const [showRecaptcha, setShowRecaptcha] = useState(null);
  const [recaptcha, setRecaptcha] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    useLoading({ is_loading: true });

    if (!recaptcha) {
      useNotify({
        message: "Por favor, preencha o reCAPTCHA",
        type: "failure",
      });
      useLoading({ is_loading: false });
      return;
    }

    if (!message || !name || !email) {
      useNotify({
        message: "Formulário com informações incompletas",
        type: "failure",
      });
      useLoading({ is_loading: false });
      return;
    }

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "André Padilha",
          from_email: email,
          to_email: "andreluiiz_@outlook.com",
          message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      );

      useNotify({
        message: "E-mail enviado. Muito obrigado pelo contato",
        type: "success",
      });

      setInterval(() => {
        router.reload();
      }, 1700);
    } catch (error) {
      console.log(error);
      useNotify({
        message: "Desculpe pelo transtorno, erro interno ao enviar e-mail.",
        type: "failure",
      });
    } finally {
      useLoading({ is_loading: false });
    }
  }

  useEffect(() => {
    if (!!name && !!email && !!message) {
      setShowRecaptcha(true);
    } else {
      setShowRecaptcha(false);
    }
  }, [name, email, message]);

  useEffect(() => {
    const textarea = document.getElementById("message");

    const handleScroll = (event) => {
      if (
        textarea && event.target == textarea
      ) {
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="rounded-xl pr-5 pb-5 flex flex-col sm:min-w-[450px] min-w-[300px] gap-3"
    >
      <fieldset className="flex flex-col">
        <label htmlFor="name" className="sm:text-base text-xs">
          Nome
        </label>
        <input
          id="name"
          placeholder="John Doe"
          className="rounded px-3 py-2 bg-transparent border-b-2 border-teal-700 placeholder:text-gray-600"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </fieldset>

      <fieldset className="flex flex-col">
        <label htmlFor="email" className="sm:text-base text-xs">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="rounded px-3 py-2 bg-transparent border-b-2 border-teal-700 placeholder:text-gray-600"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="mail@mail.com"
          required
        />
      </fieldset>

      <fieldset className="flex flex-col">
        <label htmlFor="message" className="sm:text-base text-xs">
          Mensagem
        </label>
        <textarea
          type="message"
          name="message"
          id="message"
          required
          onChange={(e) => setMessage(e.target.value)}
          rows={`${showRecaptcha ? "3" : "5"}`}
          className="rounded px-3 py-2 bg-transparent border-b-2 border-teal-700 focus:outline-none focus:border-teal-300 resize-none placeholder:text-gray-600"
          placeholder="Olá, gostei muito do seu portfolio..."
        />
      </fieldset>
      
      {showRecaptcha && (
        <ReCAPTCHA
          sitekey={`${process.env.SITE_KEY_RECAPTCHA}`}
          onChange={(e) => setRecaptcha(e)}
        />
      )}

      <button
        type="submit"
        className="self-start py-2 px-3 bg-transparent border-2 border-teal-300 rounded-md text-teal-300 transition-all hover:opacity-80 mt-2"
      >
        Enviar
      </button>
    </form>
  );
}
