import Image from "next/image";
import Link from "next/link";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <header className="min-h-[75vh] mb-24 text-white xl:pt-24 bg-menu-header bg-cover relative z-0 xl:p-6">
        <div className="absolute top-0 left-0 -z-10 right-0 bottom-0 bg-gradient-to-r from-[#202020] to-[#0000002d]"></div>
        <div className="xl:ml-32 xl:mt-24 max-w-[700px]">
          <span className="uppercase pb-3 block">SÉCURITÉ ÉLECTRONIQUE POUR LES ENTREPRISES</span>
          <h1 className="font-semibold text-7xl leading-[105%]">Technologies de sécurité pour votre entreprise</h1>
        </div>
        <div className="flex items-center justify-center rounded-full bg-violet-400 xl:w-fit w-[90%] mx-auto mt-44 overflow-hidden">
          <span className="text-black p-6 cursor-default">En savoir plus</span>
          <section className="hidden xl:flex items-center justify-center bg-white text-blue-800 rounded-full shadow-xl">
            <Link href="#" className="p-8 flex items-center justify-between hover:text-blue-950  hover:px-12 duration-200">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </Link>
            <Link href="#" className="p-8 flex items-center justify-between hover:text-blue-950  hover:px-12 duration-200">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </Link>
            <Link href="#" className="p-8 flex items-center justify-between hover:text-blue-950  hover:px-12 duration-200">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </Link>
            <Link href="#" className="p-8 flex items-center justify-between hover:text-blue-950 hover:px-12 duration-200">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </Link>
          </section>
        </div>
      </header>
      <main>
        <section className="xl:p-12 max-w-[1300px] mx-auto my-12 flex items-center justify-around flex-wrap bg-primary text-white">
          <div className="p-8 max-w-[750px]">
            <span className="uppercase pb-4 block">CONTACTER UN PROFESSIONNEL DE LA SÉCURITÉ</span>
            <h2 className="text-[2.55rem] leading-[3rem]"><strong>Pour tout renseignement, besoin ou pour en savoir plus sur nos solutions de sécurité</strong></h2>
          </div>
          <Link href="#" className="p-8 mt-12 hover:px-12 duration-200 py-6 flex items-center justify-center bg-violet-400 text-black rounded-2xl"><BiSolidLeftArrow className="mr-4 text-xl" /> Contactez-nous</Link>
        </section>

        <div className=" max-w-[1300px] mt-24 mx-auto my-12 flex items-center justify-between">
          <h2 className="text-blue-950 text-5xl font-semibold">Découvrez nos solutions de sécurité</h2>
          <Link className="p-8 py-5 rounded-xl hover:px-12 duration-200 bg-violet-600 text-white" href="#">Voir toutes les solutions</Link>
        </div>

        <section className="flex items-center justify-center max-w-[1300px] mx-auto mb-24">
          <Link href="#" className="basis-[30%] grow m-2">
            <Image
              src="/assets/elements/caméra.png"
              alt="caméra"
              width={600}
              height={1000}
              className="rounded-lg hover:scale-105 duration-200 w-full max-h-[500px] object-cover shadow-2xl"
            />
            <h3 className="mt-8 text-xl text-blue-950">Nos Systèmes de vidéosurveillance</h3>
            <span>Surveiller et alerter</span>
            <span className="flex justify-center hover:px-12 duration-200 items-center mr-auto w-fit p-8 py-4 bg-violet-400 rounded-full mt-8">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </span>
          </Link>
          <Link href="#" className="basis-[30%] grow m-2">
            <Image
              src="/assets/elements/code.png"
              alt="caméra"
              width={600}
              height={1000}
              className="rounded-lg hover:scale-105 duration-200 w-full max-h-[500px] object-cover shadow-2xl"
            />
            <h3 className="mt-8 text-xl text-blue-950">Nos Systèmes de vidéosurveillance</h3>
            <span>Surveiller et alerter</span>
            <span className="flex justify-center hover:px-12 duration-200 items-center mr-auto w-fit p-8 py-4 bg-violet-400 rounded-full mt-8">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </span>
          </Link>
          <Link href="#" className="basis-[30%] grow m-2">
            <Image
              src="/assets/elements/incendie.png"
              alt="caméra"
              width={600}
              height={1000}
              className="rounded-lg hover:scale-105 duration-200 w-full max-h-[500px] object-top object-cover shadow-2xl"
            />
            <h3 className="mt-8 text-xl text-blue-950">Nos Systèmes de vidéosurveillance</h3>
            <span>Surveiller et alerter</span>
            <span className="flex justify-center hover:px-12 duration-200 items-center mr-auto w-fit p-8 py-4 bg-violet-400 rounded-full mt-8">
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              Télésurveillance
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
