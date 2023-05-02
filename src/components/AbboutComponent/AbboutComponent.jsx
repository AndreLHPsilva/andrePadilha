import Image from "next/image";

export default function AbboutComponent() {
  return (
    <div className="h-screen bg-black text-white pt-20 flex" id="abbout">
      <div className="relative">
        <div className="flex items-center justify-center w-full gap-5 text-base text-gray-500 tracking-wide px-10">
          <p className="text-end">
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            sou estagiário de Desenvolvimento Web, atuando tanto no Backend
            quanto no Frontend. Iniciei minha carreira na área de programação em
            2016, mas após formar-me em Técnico em Informática com ênfase em
            programação, me afastei da área. Em junho de 2022, percebi que
            deveria voltar para essa área e desde então tenho me dedicado
            integralmente aos estudos para esse retorno.
          </p>
          <img
            src={"https://avatars.githubusercontent.com/u/112219645?v=4"}
            className="rounded-[50%]"
          />
          <p>
            Desempenhei várias atividades, entre elas:{" "}
            <span className="text-lg text-white">
              implementação de gateway de pagamento
            </span>{" "}
            Checkout Pro Mercado Pago em sistema web,{" "}
            <span className="text-lg text-white">integração de webhooks</span>,{" "}
            <span className="text-lg text-white">queues</span>,{" "}
            <span className="text-lg text-white">schedule work</span>, resolução
            de pequenas demandas em WordPress, criação de novas funcionalidades
            tanto no <span className="text-lg text-white">Back-End</span> quanto
            no <span className="text-lg text-white">Front-End</span>,
            refatoração de códigos para melhorar performance e relacionamento
            dos models, facilitando a busca de dados, criação de{" "}
            <span className="text-lg text-white">API</span> em{" "}
            <span className="text-lg text-white">Node.JS</span> com{" "}
            <span className="text-lg text-white">TypeScript</span> para
            aplicativo de vendas de tênis com uploads de imagens e integração
            com o front-end em{" "}
            <span className="text-lg text-white">Next.js</span> e criação de
            funções Utils para correção de dados do banco MySQL em produção.
          </p>
        </div>
      </div>
    </div>
  );
}
