import Carousel from "@/components/Carrusel";
import Link from "next/link";
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "MONITORES",
    frase: "La mejor tecnología a tu alcance",
    text: "Descubre la nueva generación de monitores con calidad superior.",
    url: "/Comprar/Monitores",
    button: "Comprar",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626379961798-54f819ee896a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "ACCESORIOS",
    frase: "Los accesorios más cómodos",
    text: "Complementos diseñados para profesionales.",
    url: "/Comprar/Accesorios",
    button: "Comprar",
  },
  {
    id: 3,
    image:
      "https://blog.oficinadosbits.com.br/wp-content/uploads/2023/06/acer-nitro-5-2.jpg",
    titulo: "Acer Nitro 5",
    frase: "La gama de computadoras mas alta",
    text: "Tecnología de última generación al alcance de tus manos.",
    url: "/Buscar/Acer%20Nitro%205",
    button: "Comprar",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "LAPTOPS",
    frase: "El poder en tus manos para usted",
    text: "Rendimiento excepcional para tareas exigentes y productividad",
    url: "/Comprar/Laptops",
    button: "Comprar",
  },
  {
    id: 5,
    image:
      "https://dlcdnwebimgs.asus.com/files/media/A8364F73-9A31-4507-BE78-B84D3FCE5A2C/v1/img/kv/kv_cover.jpg",
    titulo: "Monitor Gaming ROG Swift",
    frase: "A tu comidad y donde estes dispuesto",
    text: "Perfectos para el diversion y el entretenimiento.",
    url: "/Buscar/Monitor%20Gaming%20ROG%20Swift",
    button: "Comprar",
  },
];
export default function Comprar() {
  return (
    <>
      <div className="w-full flex flex-col h-lvh">
        <div className="w-full h-[90%]">
          <Carousel slides={slides} />
        </div>
        <div className="w-full md:h-[10%] mt-8">
          <h2 className="text-3xl md:text-5xl px-4 md:px-10 font-bold">
            Comprar Productos
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-start justify-center px-4 md:px-5 lg;px-10 mb-5 md:mb-10">
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Impresoras"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="b"
                  width="800"
                  height="800"
                  viewBox="0 0 48 48"
                  className="w-full h-auto"
                >
                  <path
                    d="M34.637 28.854h3.143c2.73.14 4.842 2.69 4.715 5.694-.12 2.809-2.162 5.056-4.714 5.187l-4.484-.009c-2.722.006-4.932-2.417-4.937-5.411v-.02"
                    className="fill-none stroke-black"
                  ></path>
                  <path
                    d="M26.558 39.735h-3.143c-2.73-.14-4.841-2.689-4.714-5.694.119-2.808 2.161-5.056 4.714-5.187l4.484.009c2.721-.005 4.931 2.417 4.936 5.412v.02"
                    className="fill-none stroke-black"
                  ></path>
                  <path
                    d="M19.133 39.758H5.5V21.115h35.511v7.506"
                    className="fill-none stroke-black"
                  ></path>
                  <path
                    d="M18.082 30.437h-6.836v9.32M28.075 13.886V8.242H11.97v12.873h22.574v-7.23zM28.075 8.242l6.468 5.644M24.967 13.886h-9.385M30.801 17.183H15.582"
                    className="fill-none stroke-black"
                  ></path>
                  <circle
                    cx="37.333"
                    cy="24.983"
                    r="0.75"
                    className="fill-black"
                  ></circle>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Impresoras
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/LaptopsOficina"
            className="w-full flex flex-col justify-center items-center text-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  version="1"
                  viewBox="0 0 512 512"
                  className="w-full h-auto"
                >
                  <path d="M62.2 34.3c-4.9 1.5-12.2 8.5-14.8 14.2l-2.4 5v121.1c0 87.9.3 122 1.1 124.5.7 1.9 2.2 4.8 3.5 6.5l2.3 3.1-2.4 2.3c-1.3 1.2-3.5 4.5-4.9 7.4-1.4 2.8-10.9 32-21.1 65-17.6 57-18.5 60.2-18.5 68 0 6.8.4 9.1 2.6 13.4 2.8 5.7 6.9 9.6 12.9 12.3 3.8 1.8 13.6 1.9 235.6 1.9h231.5l5.2-2.6c9.8-4.9 14.1-12.6 14.2-25.1 0-7.8-.8-10.8-18.5-68-10.2-32.9-19.4-61.7-20.5-63.9-1-2.3-3.2-5.7-4.9-7.7-2.6-2.9-2.9-3.7-1.7-4.6.8-.6 2.3-3.4 3.5-6.1l2.1-4.9-.2-122.3-.3-122.3-2.2-4.1c-2.9-5.4-10.1-11.7-15.1-13.2-5.3-1.6-382-1.5-387 .1m384.6 13.3c1.5.9 3.6 2.8 4.7 4.2 2 2.7 2 4.5 2.3 122.2.2 114.3.1 119.6-1.6 122.9-1 1.9-3.4 4.3-5.3 5.3-3.2 1.7-11.2 1.8-190.9 1.8s-187.7-.1-190.9-1.8c-1.9-1-4.3-3.4-5.3-5.3-1.7-3.3-1.8-8.6-1.6-122.9.3-117.7.3-119.5 2.3-122.2 4.7-6.2-11.4-5.7 195.3-5.8 170.2 0 188.6.2 191 1.6m2.5 270.8c1.8.7 4 2.2 5 3.3 1.2 1.4 37.7 115.4 37.7 117.9 0 .2-36.4.4-80.9.4h-80.9l-4.7-14c-3.1-9.2-5.3-14.4-6.5-15-2.5-1.4-123.5-1.4-126 0-1.2.6-3.4 5.8-6.5 15l-4.7 14h-81c-76.6 0-80.9-.1-80.4-1.8 16.9-55.4 36-115 37.3-116.5 4.3-4.8-4.4-4.6 198.1-4.7 158.4 0 190.8.2 193.5 1.4M312.9 430.2c1.3 4 2.6 7.9 2.8 8.5.4 1-11.9 1.3-59.7 1.3s-60.1-.3-59.7-1.3c.2-.6 1.5-4.5 2.8-8.5l2.3-7.2h109.2zM494 454.5c0 2.9-3.1 7.6-6.3 9.5-3.1 2-6.8 2-231.7 2s-228.6 0-231.7-2c-3.2-1.9-6.3-6.6-6.3-9.5 0-1.3 23.7-1.5 238-1.5s238 .2 238 1.5"></path>
                  <path d="M89.5 56.9c-7.2 1.8-13.2 6.8-15.9 13.3-1.4 3.3-1.6 15.7-1.6 105 0 96.5.1 101.5 1.9 105.3 1 2.2 3.1 5.2 4.7 6.7 5.4 5 8.9 5.8 26.3 5.8 15.4 0 16-.1 17.5-2.2 2.2-3.2 2-5.5-.9-8.3-2.3-2.4-2.9-2.5-16.5-2.5H90.8l-2.9-2.9-2.9-2.9V76l2.9-3.2 2.9-3.3h330.4l2.9 3.3L427 76v198.2l-2.9 2.9-2.9 2.9H288.1c-131.8 0-133.1 0-135.1 2-2.4 2.4-2.6 7.2-.4 9.4 1.4 1.4 15.1 1.6 136 1.6 119.3 0 134.9-.2 138.2-1.6 4.9-2 9-6 11.3-10.9 1.8-3.8 1.9-8.8 1.9-105.3 0-82.7-.2-101.9-1.3-104.5-2-4.7-6.4-9.5-11.1-12l-4.1-2.2-165.5-.2c-91 0-166.8.2-168.5.6"></path>
                  <path d="M152.7 145.8c-2.6 2.8-2.2 7.8.7 9.7 2 1.4 6.7 1.5 34.6 1.3 30.5-.3 32.2-.4 33.6-2.2 1.9-2.7 1.8-7-.4-8.9-1.7-1.5-5.5-1.7-34.4-1.7-30.2 0-32.6.1-34.1 1.8M153.2 184.6c-2.8 1.9-3 7.4-.4 9.7 1.7 1.6 10.3 1.7 103.4 1.7 97.1 0 101.6-.1 103.1-1.8 2.5-2.7 2.2-7.8-.5-9.6-2-1.4-13.4-1.6-102.8-1.6s-100.8.2-102.8 1.6M152.7 224.8c-2.5 2.7-2.2 7.8.5 9.6 2 1.4 13.4 1.6 102.8 1.6 111.6 0 105 .4 105-6.4 0-7.1 7.7-6.6-105.2-6.6-97.1 0-101.6.1-103.1 1.8M77.7 328.8C76 330.6 62 389 62 394.2c0 6.2-11 5.8 161.1 5.8 150.4 0 156.7-.1 158.2-1.8 2.2-2.5 2.1-7.5-.1-9.5-1.7-1.6-13.8-1.7-153-1.7-83.2 0-151.2-.3-151.2-.8 0-.4 2.3-10.9 5.1-23.5l5.2-22.7h337.4l5.2 22.7c2.8 12.6 5.1 23.1 5.1 23.5 0 .5-4.7.8-10.3.8-11.6 0-13.7 1-13.7 6.7s1.9 6.3 19.1 6.3 19.9-.8 19.9-5.8c0-5.2-14-63.6-15.7-65.4-1.5-1.7-9.1-1.8-178.3-1.8s-176.8.1-178.3 1.8"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Laptops de Oficina
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/LaptopsGamer"
            className="w-full flex flex-col justify-center items-center text-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  viewBox="0 -33.67 260.8 260.8"
                  className="w-full h-auto"
                >
                  <path
                    d="M31.035 47.389c0-13.644-.01-26.287-.013-35.923a9 9 0 0 1 9-9.01c38.517-.011 148.451-.045 180.707-.056a8.99 8.99 0 0 1 9.01 9c.011 31.428.034 87.489.045 122.7q13.587 20.912 27.164 41.828a9 9 0 0 1 1.453 4.911v3.457a6.75 6.75 0 0 1-6.757 6.745H9.173a6.756 6.756 0 0 1-6.757-6.741c0-1.422-.011-2.711-.016-4.279a9 9 0 0 1 1.5-5.016q13.591-20.493 27.164-40.98c-.004-17.161-.018-54.65-.029-86.636"
                    className="fill-none"
                  ></path>
                  <path
                    d="M201.2 14.9c-42.537.014-129.908.047-156.393.053.012 30.259.033 66.229.046 98.757v8.179c30.339-.012 141.7-.054 171.144-.062-.013-32.725-.035-79.452-.046-106.932Z"
                    className="fill-none"
                  ></path>
                  <path
                    d="M221.46 146.673c-2.579-4.72-5.134-9.4-6.87-12.58H50.607c-3.322 6.284-10.271 19.472-14.01 26.455h192.442c-1.839-3.362-4.722-8.648-7.579-13.875"
                    className="fill-black"
                  ></path>
                  <path
                    d="M95.925 167.362c-.994 4.52-2.233 10.221-2.914 13.6h75.2c-1.1-5.406-3.616-16.793-4.269-19.71 0 0-.058-.26-.15-.7H97.436l-.157.7c-.245 1.091-.755 3.386-1.354 6.11"
                    className="fill-none"
                  ></path>
                  <path
                    d="m33.435 47.389-.012-34.081c0-2.025-.022-3.859 1.161-5.6a6.62 6.62 0 0 1 4.343-2.772 24 24 0 0 1 3.9-.081h3.652q19.931 0 39.861-.012l49.258-.015 47.771-.015L218.27 4.8a23 23 0 0 1 3.509.057 6.7 6.7 0 0 1 4.3 2.646 7.98 7.98 0 0 1 1.258 5.052v5.78q0 13.155.01 26.311l.023 59.746.009 27.1a13 13 0 0 0 .087 3.242 8.2 8.2 0 0 0 1.212 2.067l1.525 2.347q2.5 3.841 4.991 7.682l10.4 16 5.126 7.9q1.248 1.92 2.494 3.842a21.6 21.6 0 0 1 2.371 3.928 10.5 10.5 0 0 1 .416 3.825 9.7 9.7 0 0 1-.3 3.557 4.4 4.4 0 0 1-3.7 2.743c-.738.061-1.5.01-2.237.01H17.2c-2.669 0-5.345.059-8.013 0a4.4 4.4 0 0 1-3.084-1.27c-1.541-1.529-1.288-3.569-1.3-5.569a12.7 12.7 0 0 1 .288-3.755 15.7 15.7 0 0 1 2.282-3.936q2.592-3.907 5.187-7.813 5.256-7.916 10.51-15.833 2.522-3.8 5.038-7.606 1.258-1.9 2.515-3.807l1.4-2.115a8.9 8.9 0 0 0 1.359-2.267 10.2 10.2 0 0 0 .085-2.59v-7.993q0-6.55-.005-13.1l-.012-31.326-.011-32.267c0-3.088-4.8-3.093-4.8 0l.026 72.6.006 14.038.329-1.211Q17.139 150.8 5.194 168.727c-1.832 2.759-4.266 5.575-4.94 8.9a22.4 22.4 0 0 0-.246 4.595 17.3 17.3 0 0 0 .325 4.459 9.306 9.306 0 0 0 8.892 6.76c3.579.071 7.168 0 10.748 0H250.6c.33 0 .661.006.991 0a9.32 9.32 0 0 0 8.8-6.438 13.5 13.5 0 0 0 .411-4.175 18 18 0 0 0-.454-5.188 17 17 0 0 0-2.294-4.418l-3.048-4.7-11.779-18.14-11.368-17.5.328 1.211q-.006-20.806-.015-41.613-.007-22.569-.017-45.138 0-10.293-.008-20.586v-9.365c0-2.927.373-6.182-.41-9.028a11.48 11.48 0 0 0-6.7-7.512c-2.211-.909-4.5-.853-6.841-.852h-10.957L177.47.014l-35.986.011-37.8.012L69.1.048 42.148.056c-2.826 0-5.531.119-8.025 1.644a11.5 11.5 0 0 0-5.4 8.4 43 43 0 0 0-.1 5.316v18.347q0 6.817.005 13.634c.008 3.081 4.808 3.086 4.807-.008"
                    className="fill-black"
                  ></path>
                  <path
                    d="M242.7 178.558H27.213c-2.91 0-5.828-.063-8.737 0h-.374c-3.089 0-3.094 4.8 0 4.8h215.49c2.91 0 5.828.064 8.737 0h.374c3.088 0 3.093-4.8 0-4.8ZM223.532 145.462q-3.436-6.289-6.87-12.581a2.4 2.4 0 0 0-2.072-1.188H70.843c-6.64 0-13.309-.18-19.948 0h-.288a2.39 2.39 0 0 0-2.072 1.188c-4.664 8.822-9.3 17.658-14.01 26.456a2.425 2.425 0 0 0 2.072 3.611h184.592c2.507 0 5.022.062 7.528 0h.322a2.425 2.425 0 0 0 2.073-3.611q-3.787-6.939-7.58-13.875c-1.482-2.712-5.628-.292-4.145 2.422l7.58 13.876 2.072-3.612H44.447c-2.493 0-5.037-.146-7.528 0-.107.006-.215 0-.322 0l2.072 3.612c4.71-8.8 9.347-17.634 14.011-26.456l-2.073 1.189h157.261c2.13 0 4.307.131 6.434 0 .095-.006.192 0 .288 0l-2.073-1.189q3.432 6.292 6.87 12.58c1.482 2.716 5.628.292 4.145-2.422"
                    className="fill-black"
                  ></path>
                  <path
                    d="M95.325 181.594c1.334-6.588 2.8-13.151 4.269-19.71a2.454 2.454 0 0 0-1.677-2.952 2.426 2.426 0 0 0-2.952 1.676c-1.468 6.559-2.934 13.122-4.269 19.71a2.46 2.46 0 0 0 1.677 2.952 2.423 2.423 0 0 0 2.952-1.676M161.628 161.884c1.468 6.56 2.921 13.125 4.268 19.71a2.4 2.4 0 0 0 4.629-1.276c-1.347-6.585-2.8-13.15-4.269-19.71a2.4 2.4 0 1 0-4.628 1.276M201.2 12.5l-29.255.01-34.788.012-35.6.013-31.693.01-22.979.007h-2.078a2.434 2.434 0 0 0-2.4 2.4q.009 23.213.021 46.424.014 24.238.024 48.478v12.034a2.436 2.436 0 0 0 2.4 2.4l25.919-.01 36.911-.014 41.175-.015 37.593-.014 27.3-.009H216a2.436 2.436 0 0 0 2.4-2.4l-.018-42.668-.019-43.62-.009-20.644a2.435 2.435 0 0 0-2.4-2.4zc-3.088 0-3.093 4.8 0 4.8h14.751l-2.4-2.4.017 38.926.019 44.657q0 11.675.01 23.349l2.4-2.4-25.5.008-36.694.013-41.163.015-37.784.014-27.693.011h-2.31l2.4 2.4q-.017-16.422-.011-32.844l-.024-48.432-.011-25.66-2.4 2.4 21.693-.014 30.893-.011 35.377-.012 35.14-.013 30.055-.01h3.24c3.084.003 3.089-4.797-.005-4.797"
                    className="fill-black"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Laptops Gamer
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Perifericos"
            className="w-full flex flex-col justify-center items-center text-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Layer_1"
                  width="800"
                  height="800"
                  version="1.1"
                  viewBox="0 0 18 32"
                  className="w-full h-auto"
                >
                  <g className="fill-back">
                    <path d="M9.628 3.5c0-.976.311-1.693.876-2.021.466-.271 1.057-.241 1.617.078.931.531 2.013 1.03 2.975.713.628-.207 1.114-.719 1.489-1.567a.5.5 0 0 0-.914-.405c-.254.575-.545.909-.888 1.022-.468.152-1.134-.042-2.166-.631-.866-.494-1.843-.523-2.616-.075-.886.514-1.373 1.539-1.373 2.886a.5.5 0 0 0 1 0M9 16.927c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2s-2 .897-2 2v3c0 1.103.897 2 2 2m-1-5a1.001 1.001 0 0 1 2 0v3a1.001 1.001 0 0 1-2 0z"></path>
                    <path d="M0 14v9c0 4.962 4.037 9 9 9s9-4.038 9-9v-9c0-4.962-4.037-9-9-9s-9 4.038-9 9m9-8c4.411 0 8 3.589 8 8v9c0 4.411-3.589 8-8 8s-8-3.589-8-8v-9c0-4.411 3.589-8 8-8"></path>
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Perifericos
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Monitores"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  viewBox="0 0 471 471"
                  className="w-full h-auto"
                >
                  <path d="M443.5 86.676h-416a5 5 0 0 0-5 5v253.493a5 5 0 0 0 5 5h416a5 5 0 0 0 5-5V91.676a5 5 0 0 0-5-5m-5 253.493h-406V96.676h406z"></path>
                  <path d="M449.055 64.176H21.946C9.845 64.176 0 74.021 0 86.121v264.602c0 12.101 9.845 21.945 21.946 21.945h148.343l-7.91 19.156h-31.772a7.5 7.5 0 0 0 0 15h209.79c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-31.772l-7.911-19.156h148.343c12.101 0 21.945-9.845 21.945-21.945V86.121c-.002-12.1-9.846-21.945-21.947-21.945M292.394 391.825H178.606l7.911-19.156h97.967zM456 350.724a6.95 6.95 0 0 1-6.945 6.945H21.946c-3.83 0-6.946-3.116-6.946-6.945V86.121a6.954 6.954 0 0 1 6.946-6.946h427.109A6.953 6.953 0 0 1 456 86.121z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Monitores
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-1/5 xl:w-[16.66%] p-2 lg:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Ofertas"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center aspect-square">
              <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Capa_1"
                  width="800"
                  height="800"
                  version="1.1"
                  viewBox="0 0 201.289 201.289"
                  className="w-full h-auto"
                >
                  <path
                    fill="#010002"
                    d="M189.135 15.174 124.226 0 .032 124.193l77.085 77.096 124.14-124.136zM10.046 124.193 126.455 7.798l56.6 13.224 10.515 53.794L77.114 191.275z"
                  ></path>
                  <path
                    fill="#010002"
                    d="M145.534 36.379c-4.284 4.287-4.284 11.238 0 15.529 4.28 4.291 11.22 4.291 15.521 0 4.291-4.291 4.291-11.241 0-15.529-4.301-4.291-11.241-4.277-15.521 0M128.542 68.624l-7.931 7.916c-8.4-6.02-18.041-5.701-24.622.884-6.889 6.886-5.612 15.589-.719 26.841 3.489 8.239 3.378 13.507-.973 17.858-4.509 4.524-11.062 4.474-16.681-1.138-4.438-4.449-6.979-10.15-7.916-14.745l-7.208 3.407c.798 4.742 4.037 10.844 8.543 15.529l-7.916 7.916 4.989 4.992 8.235-8.238c9.423 6.889 19.648 5.383 25.972-.956 7.047-7.05 6.972-15.199 2.158-26.684-3.969-9.831-4.327-14.305-.301-18.345 3.25-3.235 8.686-5.1 14.777 1.006 5.075 5.064 6.492 10.135 7.215 12.748l7.201-3.25c-1.031-3.715-3.003-8.235-7.526-13.063l7.695-7.684z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Ofertas
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
