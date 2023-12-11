import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="flex items-center gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="/assets/images/logo.png"
              width={50}
              height={50}
              alt="logo"
              className="h-7 w-auto"
            />

            <span className="ml-2 text-xl font-bold text-white">Fidex AI</span>
          </a>

          <p className="mx-auto mt-4 max-w-md text-gray-400">
            A solução ideal para seu negócio com a Fidex AI
          </p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <button className="w-full transform rounded-md bg-blue-600 px-5 py-2 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:order-2 sm:mx-2 sm:w-auto">
              Comece Agora
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2023. Todos os direitos reservados.
          </p>

          <div className="-mx-2 mt-3 flex sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
              aria-label="Reddit"
            >
              {' '}
              Termos{' '}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
              aria-label="Reddit"
            >
              {' '}
              Privacidade{' '}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
              aria-label="Reddit"
            >
              {' '}
              Cookies{' '}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
