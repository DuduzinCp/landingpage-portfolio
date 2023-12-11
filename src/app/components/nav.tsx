import Image from 'next/image'
import Menu from './menu'

export default function Nav() {
  return (
    <nav className="flex w-[90%] items-center justify-between pt-6">
      <a href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/logo.png"
          alt="Fidex AI"
          width={50}
          height={50}
        />
        <h2 className="text-lg font-bold">Fidex AI</h2>
      </a>
      <Menu />
      <ul className="hidden gap-6 md:flex">
        <li className="transition-transform hover:scale-110">
          <a href="/" className="transition-colors hover:text-blue-500">
            Home
          </a>
        </li>
        <li className="transition-transform hover:scale-110">
          <a href="#" className="transition-colors hover:text-blue-500">
            Preços
          </a>
        </li>
        <li className="transition-transform hover:scale-110">
          <a href="#" className="transition-colors hover:text-blue-500">
            Sobre Nós
          </a>
        </li>
        <li className="transition-transform hover:scale-110">
          <a href="#" className="transition-colors hover:text-blue-500">
            Contato
          </a>
        </li>
      </ul>
      <button className="hidden rounded-2xl border-2 border-blue-500 px-8 py-1 md:block">
        Login
      </button>
    </nav>
  )
}
