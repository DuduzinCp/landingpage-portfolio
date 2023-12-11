import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (value: boolean) => void
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="absolute z-10 overflow-hidden"
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transform transition duration-300 ease-in-out"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition duration-300 ease-in-out"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <Dialog.Panel className="fixed left-0 top-0 flex w-full flex-col justify-center bg-white/90 p-4 outline-none">
            <label
              onClick={() => setOpen(false)}
              className="btn btn-circle btn-primary swap swap-rotate z-20 self-end text-white md:hidden"
            >
              <input type="checkbox" checked={open} readOnly />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <div className="flex flex-col items-center gap-6 text-center">
              <a
                href="/"
                className="underline-offset-0 transition-all hover:text-blue-600 hover:underline hover:underline-offset-8"
              >
                Home
              </a>
              <a
                href="#"
                className="underline-offset-0 transition-all hover:text-blue-600 hover:underline hover:underline-offset-8"
              >
                Preços
              </a>
              <a
                href="#"
                className="underline-offset-0 transition-all hover:text-blue-600 hover:underline hover:underline-offset-8"
              >
                Sobre Nós
              </a>
              <a
                href="#"
                className="underline-offset-0 transition-all hover:text-blue-600 hover:underline hover:underline-offset-8"
              >
                Contatos
              </a>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
