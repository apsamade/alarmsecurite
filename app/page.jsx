import Image from "next/image";
import Link from "next/link";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <header className="min-h-[75vh] mb-24 text-white pt-24 bg-menu-header bg-cover relative z-0 xl:p-6">
        <div className="absolute top-0 left-0 -z-10 right-0 bottom-0 bg-gradient-to-r from-[#202020] to-[#0000002d]"></div>
        <div className="xl:ml-32 mx-auto xl:mt-24 max-w-[700px]">
          <span className="uppercase text-center xl:mx-0 mx-2 pb-3 block">SÉCURITÉ ÉLECTRONIQUE POUR LES ENTREPRISES</span>
          <h1 className="font-semibold xl:text-left text-center text-4xl xl:text-7xl leading-[105%]">Technologies de sécurité pour votre entreprise</h1>
        </div>
        <div className="flex items-center justify-center rounded-full bg-violet-400 xl:w-fit w-[90%] mx-auto xl:mt-44 mt-24 overflow-hidden">
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
          <div className="xl:p-8 px-0 py-8 max-w-[750px]">
            <span className="uppercase pb-4 px-2 block">CONTACTER UN PROFESSIONNEL DE LA SÉCURITÉ</span>
            <h2 className="text-[2.55rem] xl:px-0 xl:pt-0 px-2 pt-4 leading-[3rem]"><strong>Pour tout renseignement, besoin ou pour en savoir plus sur nos solutions de sécurité</strong></h2>
          </div>
          <Link href="#" className="p-8 mt-12 hover:px-12 mb-8 xl:mb-0 duration-200 py-6 flex items-center justify-center bg-violet-400 text-black rounded-2xl"><BiSolidLeftArrow className="mr-4 text-xl" /> Contactez-nous</Link>
        </section>

        <div className=" max-w-[1300px] flex-wrap mt-24 mx-auto my-12 flex items-center justify-between">
          <h2 className="text-blue-950 text-3xl mx-4 xl:mx-0 text-center xl:text-5xl font-semibold">Découvrez nos solutions de sécurité</h2>
          <Link className="p-8 block mx-auto xl:mx-0 xl:mt-0 mt-8 py-5 rounded-xl hover:px-12 duration-200 bg-violet-600 text-white" href="#">Voir toutes les solutions</Link>
        </div>

        <section className="flex items-center flex-col md:flex-row flex-wrap justify-center max-w-[1300px] mx-auto mb-24">
          <Link href="#" className="basis-[30%] grow m-2 xl:mb-2 mb-16">
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
          <Link href="#" className="basis-[30%] grow m-2 xl:mb-2 mb-16">
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
          <Link href="#" className="basis-[30%] grow m-2 xl:mb-2 mb-16">
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

        <section className="xl:px-64 xl:py-44 p-8 text-white bg-primary my-8 flex items-start justify-around flex-wrap xl:flex-nowrap">
          <div className="xl:mr-24 max-w-[480px]">
            <h2 className="font-semibold text-4xl xl:text-5xl">Pourquoi Securitas Technology?</h2>
            <Link
              href="#"
              className="p-8 mt-12 w-fit hover:px-12 duration-200 py-4 flex items-center justify-center bg-violet-400 text-black rounded-2xl"
            >
              <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
              En savoir plus
            </Link>
            <section>
              <div className="mt-14 border-l-2 border-purple-400 pl-7 p-4 pb-3">
                <h3 className="mb-4 font-semibold text-2xl">La télésurveillance et vidéosurveillance pour les professionnels</h3>
                <p className="text-thin text-sm">Securitas Technology, leader de la sécurité professionnelle en France, met toute son expertise en télésurveillance et vidéosurveillance à votre service.</p>
                <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-violet-400 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
              </div>
              <div className="border-l-2 border-sky-950 pl-7 p-4 pb-3">
                <h3 className="mb-4 opacity-50 font-semibold text-2xl">Un écosystème unique qui répond à tous vos besoins en matière de sûreté, de santé et de sécurité™ </h3>
              </div>
            </section>
          </div>
          <Image
            src="/assets/elements/cyber.png"
            alt="cybersécurité"
            width={650}
            height={1300}
            className="mt-12 xl:mt-0"
          />
        </section>
      </main>
      <section>
        <h2 className="text-center my-12 text-4xl xl:text-6xl font-semibold">Ressources</h2>
        <section className="max-w-[1300px] mx-auto mt-12 mb-24 grid-ressources">
          <div className="border mx-4 md:mx-0 border-1 hover:shadow-2xl hover:scale-[103%] duration-200 border-gray-200 shadow-xl rounded-xl p-6">
            <h3>Espace client</h3>
            <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-blue-600 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
          </div>
          <div className="border mx-4 md:mx-0 border-1 hover:shadow-2xl hover:scale-[103%] duration-200 border-gray-200 shadow-xl rounded-xl p-6">
            <h3>Espace client</h3>
            <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-blue-600 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
          </div>
          <div className="border mx-4 md:mx-0 border-1 hover:shadow-2xl hover:scale-[103%] duration-200 border-gray-200 shadow-xl rounded-xl p-6">
            <h3>Espace client</h3>
            <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-blue-600 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
          </div>
          <div className="border mx-4 md:mx-0 border-1 hover:shadow-2xl hover:scale-[103%] duration-200 border-gray-200 shadow-xl rounded-xl p-6">
            <h3>Espace client</h3>
            <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-blue-600 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
          </div>
          <div className="border mx-4 md:mx-0 border-1 hover:shadow-2xl hover:scale-[103%] duration-200 border-gray-200 shadow-xl rounded-xl p-6">
            <h3>Espace client</h3>
            <Link
                  href="#"
                  className="p-8 pl-0 mt-6 border-b-2 border-transparent text-blue-600 w-fit hover:border-violet-400 duration-200 py-4 pb-2 flex items-center justify-center"
                >
                  <TbSquareRoundedArrowRightFilled className="mr-2 text-4xl" />
                  Découvrir
                </Link>
          </div>
        </section>
      </section>
    </>
  );
}
