import Image from 'next/image'

const logos = [
  ['/assets/images/logo-replace.png', 1],
  ['/assets/images/logo-replace.png', 2],
  ['/assets/images/logo-replace.png', 3],
  ['/assets/images/logo-replace.png', 4],
  ['/assets/images/logo-replace.png', 5],
]

export default function Section1() {
  return (
    <section className="w-[90%] space-y-6 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-blue-500 md:text-4xl">
        Veja as empresas que confiam em nós
      </h2>
      <div className="flex justify-between p-4">
        {logos.map((logo) => (
          <Image
            key={logo[1]}
            src={logo[0]}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-3xl brightness-75 transition-all hover:scale-105 hover:brightness-100"
          />
        ))}
      </div>
    </section>
  )
}
