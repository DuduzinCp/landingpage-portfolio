import Image from 'next/image'

export default function Section3() {
  return (
    <div className="flex w-[90%] flex-col justify-between gap-6 md:flex-row md:gap-0">
      <div className="space-y-4 md:space-y-6">
        <span className="rounded-md bg-blue-200 p-2 text-center text-xs font-bold text-blue-400 md:text-sm">
          Prepara se para escalar seu negocio!
        </span>
        <h2 className="text-2xl font-bold md:text-4xl">
          Usando nossa plataforma preparase para escalar o seu negocio, bater
          metas e alcançar seu objetivo!
        </h2>
        <p className="text-sm md:text-xl">
          Tenha controle total do seu negocio de forma simples sem complexidade,
          e flexibilidade
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-bold">Controle</p>
            <h3 className="text-3xl font-bold">100%</h3>
          </div>
          <div>
            <p className="text-sm font-bold">Crescimento</p>
            <h3 className="text-3xl font-bold">100%</h3>
          </div>
          <div>
            <p className="text-sm font-bold">Usuarios</p>
            <h3 className="text-3xl font-bold">5K</h3>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="btn border-blue-500 bg-blue-500 text-white hover:border-blue-500 hover:bg-blue-600"
          >
            Comece Agora
          </a>
        </div>
      </div>
      <div className="w-full rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-400 p-6 md:min-w-[300px]">
        <Image
          src="/assets/images/section-3-1.png"
          alt="Fidex AI"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
