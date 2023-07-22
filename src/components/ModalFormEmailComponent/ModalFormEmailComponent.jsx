import { useLoading } from "@/hooks/useLoading";
import { useNotify } from "@/hooks/useNotify";
import emailjs from "@emailjs/browser";
import { Transition, Dialog } from "@headlessui/react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ModalFormEmailComponent({openModal, setOpenModal}) {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    useLoading({is_loading: true});

    if (!message || !name || !email) {
      useNotify({
        message: "Formulário com informações incompletas",
        type: "failure",
      });
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
    }finally{
      useLoading({is_loading: false})
    }
  }

  function handleCleanModal() {
    setOpenModal(false);
  }

  return (
    <Transition appear show={openModal} className="">
      <Dialog as="div" className="relative z-10" onClose={handleCleanModal}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="overflow-hidden rounded-2xl formContactBG text-left transition-all">
                <div className="flex items-center justify-between rounded-t border-b border-gray-500 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Enviar E-mail
                  </h3>
                  <button
                    type="button"
                    onClick={handleCleanModal}
                    className="bg-transparent ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-gray-400 transition-colors hover:bg-blue-600 hover:text-gray-900"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="rounded-xl sm:px-10 px-5 pb-5 flex flex-col sm:min-w-[450px] min-w-[300px] gap-2"
                >
                  <TextField
                    id="name"
                    label="Nome"
                    variant="standard"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard"
                    placeholder="Digite um email para contato"
                    required
                  />
                  <textarea
                    type="message"
                    name="message"
                    id="message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    className="resize-none outline-none border border-gray-600 rounded-md w-full mt-5 p-3 transition-all formContactBG hover:border-black hover:shadow-inner shadow placeholder:text-gray-800 text-black font-semibold "
                    placeholder="Digite sua mensagem"
                  />

                  <button
                    type="submit"
                    className="self-start py-2 px-3 bg-blue-400 rounded-md text-blue-50 mt-1 transition-all hover:opacity-80"
                  >
                    Enviar
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
