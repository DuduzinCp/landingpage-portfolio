import Image from 'next/image'
import { IoLogoDropbox } from 'react-icons/io5'

export default function Header() {
  return (
    <header className="flex items-center pl-[5%]">
      <div className="space-y-4">
        <span className="flex w-fit items-center gap-1 rounded-md bg-blue-300 p-2 text-xs font-bold text-white">
          <IoLogoDropbox />
          Otimização e Flexibilidade
        </span>
        <h2 className="text-3xl font-bold md:text-5xl">
          Eleve o nível do seu negocio pro próximo nível de organização e
          organize suas finanças
        </h2>
        <p>
          Com a Fidex AI, seu negócio fica mais focado no mais importante,
          automatize sua logistica e sua gestão financeira com a melhor solução
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="btn border-blue-500 bg-blue-500 text-white hover:border-blue-500 hover:bg-blue-600"
          >
            Comece Agora
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/header-1.png"
          alt="Fidex AI"
          width={1015}
          height={714}
          className="hidden min-w-[400px] md:block"
        />
      </div>
    </header>
  )
}
