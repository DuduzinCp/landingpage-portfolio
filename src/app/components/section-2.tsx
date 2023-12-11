import Image from 'next/image'

export default function Section2() {
  return (
    <div className="flex w-[90%] flex-col items-center gap-6">
      <div className="flex flex-col items-center">
        <span className="rounded-md bg-blue-200 p-2 text-center text-sm font-bold text-blue-400 md:text-xl">
          Novas Features!
        </span>
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          O que temos a oferecer ao seu negocio?
        </h2>
        <p>O que nossa empresa pode oferecer diversas</p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-purple-200 to-indigo-400 p-4">
          <div>
            <h5 className="text-2xl font-bold">
              integrações com diversas formas de pagamento
            </h5>
            <p className="text-xl">
              A possibilidade de realizar varias integrações
            </p>
          </div>
          <Image
            src="/assets/images/visa-1.png"
            alt="Visa"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-purple-200 to-indigo-400 p-4">
          <div>
            <h5 className="text-2xl font-bold">
              Analíses detalhadas de forma simples e intuitiva
            </h5>
            <p className="text-xl">Análise de forma simples e intuitiva</p>
          </div>
          <Image
            src="/assets/images/section-2-2.png"
            alt="Visa"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-purple-200 to-indigo-400 p-4">
          <Image
            src="/assets/images/section-2-1.png"
            alt="Visa"
            width={600}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
