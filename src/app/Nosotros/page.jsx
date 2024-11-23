"use client";
import { useRef } from "react";
export default function Monitores() {
  const acercaDeNosotrosRef = useRef(null);
  const equipoYPropositoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex">
        <div className="relative w-full h-lvh flex flex-col max-md:text-sm">
          <div className="relative w-full h-[72%] flex">
            <img
              src="https://images.unsplash.com/photo-1651817077975-dafeccf92232?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="text-white absolute w-full flex justify-center items-center h-full text-4xl md:text-7xl font-bold text-center">
              <h2>Bienvenidos a CompuFenix</h2>
            </div>{" "}
          </div>{" "}
          <ul className="w-full h-[28%] flex justify-center items-start py-6 md:px-20 text-center">
            <li
              className="w-1/2 xl:w-1/5 flex flex-col justify-center items-center md:px-5 transition-all ease-in-out duration-300 cursor-pointer group"
              onClick={() => scrollToSection(acercaDeNosotrosRef)}
            >
              <button className="bg-zinc-200 w-full flex flex-col justify-center items-center rounded-lg shadow-lg shadow-zinc-500 p-2">
                <p className="group-hover:text-blue-700 group-hover:underline group-hover:underline-offset-8">
                  Acerca de Nosotros
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Layer_1"
                  fill="#000"
                  version="1.1"
                  viewBox="0 0 295.24 295.24"
                  className="w-16 h-16 mt-10 group-hover:fill-blue-700"
                >
                  <path d="M233.335 214.287v-9.524h47.617c7.876 0 14.286-6.41 14.286-14.286v-76.19c0-7.876-6.41-14.286-14.286-14.286H147.619c-7.876 0-14.286 6.41-14.286 14.286v76.19c0 7.876 6.41 14.286 14.286 14.286h47.619v9.524h-80.952v-4.762c0-7.876-6.686-14.286-14.562-14.286h-16.11l-48.928-79.648c2.138-3.081 3.41-6.805 3.41-10.829 0-1.171-.143-2.305-.348-3.419l19.933-36.542c1.838 9.052 6.876 17.138 14.519 22.852l3.11 2.324 11.757-10.452c2.576.933 5.214 1.429 7.895 1.429 13.129 0 23.81-10.681 23.81-23.81 0-1.729-.271-3.467-.676-5.195l11.781-10.471-1.943-3.367c-6.805-11.757-19.438-19.062-32.971-19.062-.895 0-1.776.071-2.657.133l-16.1-16.1-35.386 29.49 6.557 8.743-31.29 44.705C6.99 87.453 0 95.277 0 104.763c0 7.143 3.995 13.305 9.829 16.562l39.381 73.914H33.057c-7.876 0-14.01 6.41-14.01 14.286v4.762H0v28.571h14.286v52.381h9.524v-52.381h9.524v52.381h9.524v-52.381h209.524v52.381h9.524v-52.381h9.524v52.381h9.524v-52.381h14.286v-28.571zm-90.478-100a4.77 4.77 0 0 1 4.762-4.762h133.333a4.77 4.77 0 0 1 4.762 4.762v61.905H142.857zm52.381 80.952h-47.619a4.77 4.77 0 0 1-4.762-4.762v-4.762h142.857v4.762a4.77 4.77 0 0 1-4.762 4.762h-85.714m28.572 9.524v9.524h-19.048v-9.524zM96.243 71.372l12.7-11.29c-1.272 6.067-6.405 10.729-12.7 11.29m-1.276-42.799c8.857-.001 17.204 4.18 22.581 11.118L74.986 77.525c-5.5-5.352-8.59-12.6-8.59-20.381 0-15.757 12.814-28.571 28.571-28.571M75.619 15.968l5.662 5.662C71.7 25.334 63.967 32.772 59.929 42.187l-6.062-8.09zM53.385 49.329l1.091 1.453-22.057 40.443a19.1 19.1 0 0 0-5.667-3.848zM9.524 104.763c0-5.252 4.271-9.524 9.524-9.524s9.524 4.271 9.524 9.524-4.271 9.524-9.524 9.524-9.524-4.271-9.524-9.524m12.271 18.771a18.7 18.7 0 0 0 5.548-1.705l45.095 73.41H60zm11.262 81.229h66.667c2.624 0 5.038 2.138 5.038 4.762v4.762h-76.19v-4.762h-.001c0-2.624 1.862-4.762 4.486-4.762m252.657 28.572H9.524v-9.524h276.19z"></path>
                  <path d="M138.095 80.953h152.381v9.524H138.095zM204.762.001h-38.095v76.19h38.095zm-9.524 66.667H176.19V47.62h19.048zm0-28.572H176.19V9.525h19.048z"></path>
                  <circle cx="185.714" cy="57.144" r="4.762"></circle>
                  <path d="M247.619.001h-38.095v76.19h38.095zm-28.572 9.524h19.048v28.571h-19.048zm19.049 57.143h-19.048V47.62h19.048z"></path>
                  <circle cx="228.571" cy="57.144" r="4.762"></circle>
                  <path d="M290.476.001h-38.095v76.19h38.095zm-28.572 9.524h19.048v28.571h-19.048zm19.049 57.143h-19.048V47.62h19.048z"></path>
                  <circle cx="271.429" cy="57.144" r="4.762"></circle>
                </svg>{" "}
              </button>
            </li>
            <li
              className="w-1/2 xl:w-1/5 flex flex-col justify-center items-center md:px-5 transition-all ease-in-out duration-300  cursor-pointer group"
              onClick={() => scrollToSection(equipoYPropositoRef)}
            >
              <button className="bg-zinc-200 w-full flex flex-col justify-center items-center rounded-lg shadow-lg shadow-zinc-500 p-2">
                <p className="group-hover:text-blue-700 group-hover:underline group-hover:underline-offset-8">
                  Nuestro Equipo y Propósito
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Layer_1"
                  width="800"
                  height="800"
                  fill="#000"
                  version="1.1"
                  viewBox="0 0 511.834 511.834"
                  className="w-16 h-16 mt-10 group-hover:fill-blue-700"
                >
                  <path d="M230.235 170.584h8.533a8.536 8.536 0 0 0 8.533-8.533 8.536 8.536 0 0 0-8.533-8.533h-8.533a8.536 8.536 0 0 0-8.533 8.533 8.536 8.536 0 0 0 8.533 8.533M102.235 102.317h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533"></path>
                  <path d="M187.901 185.543c1.63 16.401 8.755 30.839 9.097 31.522 7.74 15.471 19.43 38.852 58.837 38.852s51.098-23.381 58.829-38.852c.35-.683 7.475-15.121 9.105-31.522 5.282-2.901 8.866-8.525 8.866-14.959v-17.067c0-6.306-3.439-11.819-8.533-14.771v-2.295c0-28.237-22.963-51.2-51.2-51.2h-34.133c-28.237 0-51.2 22.963-51.2 51.2v2.295c-5.094 2.953-8.533 8.465-8.533 14.771v17.067c-.001 6.434 3.583 12.057 8.865 14.959m8.201-32.026a8.536 8.536 0 0 0 8.533-8.533v-8.533c0-18.825 15.309-34.133 34.133-34.133h34.133c18.825 0 34.133 15.309 34.133 34.133v8.533a8.536 8.536 0 0 0 8.533 8.533v17.067a8.536 8.536 0 0 0-8.533 8.533c0 14.763-7.561 30.174-7.637 30.319-8.883 17.766-16.717 29.414-43.563 29.414s-34.688-11.648-43.563-29.406c-.077-.154-7.637-15.565-7.637-30.327a8.536 8.536 0 0 0-8.533-8.533zM119.421 211.953l-7.091 42.513a8.526 8.526 0 0 0 7.006 9.822c.478.077.947.111 1.417.111 4.096 0 7.714-2.953 8.405-7.125l5.897-35.302c12.314.282 23.697 1.348 33.946 3.191 4.659.845 9.071-2.261 9.907-6.895.836-4.642-2.253-9.079-6.886-9.907-13.082-2.347-27.776-3.533-43.682-3.533-4.302.043-8.211 2.85-8.919 7.125M392.368 102.317h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533"></path>
                  <path d="M272.902 170.584h8.533a8.536 8.536 0 0 0 8.533-8.533 8.536 8.536 0 0 0-8.533-8.533h-8.533a8.536 8.536 0 0 0-8.533 8.533c-.001 4.71 3.822 8.533 8.533 8.533M435.035 102.317h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533"></path>
                  <path d="M350.034 117.276c1.63 16.401 8.755 30.839 9.096 31.522 7.74 15.471 19.43 38.852 58.837 38.852s51.098-23.381 58.837-38.852c.341-.683 7.467-15.121 9.097-31.522 5.282-2.901 8.866-8.525 8.866-14.959V85.25c0-6.306-3.439-11.819-8.533-14.771v-2.295c0-28.237-22.963-51.2-51.2-51.2h-34.133c-28.237 0-51.2 22.963-51.2 51.2v2.295c-5.094 2.953-8.533 8.465-8.533 14.771v17.067c0 6.434 3.584 12.057 8.866 14.959m8.201-32.026a8.536 8.536 0 0 0 8.533-8.533v-8.533c0-18.825 15.309-34.133 34.133-34.133h34.133c18.825 0 34.133 15.309 34.133 34.133v8.533a8.536 8.536 0 0 0 8.533 8.533v17.067a8.536 8.536 0 0 0-8.533 8.533c0 14.763-7.56 30.174-7.637 30.319-8.883 17.766-16.717 29.414-43.563 29.414-26.854 0-34.688-11.648-43.563-29.406-.077-.154-7.637-15.565-7.637-30.327a8.536 8.536 0 0 0-8.533-8.533V85.25zM332.609 218.259c.828 4.634 5.214 7.714 9.907 6.903 10.266-1.843 21.692-2.91 34.039-3.191l5.897 35.302c.691 4.173 4.309 7.125 8.405 7.125.469 0 .939-.034 1.417-.111 4.651-.777 7.782-5.18 7.006-9.822l-7.091-42.513c-.725-4.275-4.42-7.091-8.926-7.125-15.94 0-30.66 1.186-43.759 3.533-4.633.828-7.722 5.266-6.895 9.899M50.915 211.962c-.708-4.292-4.668-7.1-8.951-7.134-12.279 0-23.902.717-34.543 2.116-4.676.614-7.962 4.907-7.347 9.574.623 4.676 4.924 7.945 9.574 7.347 7.979-1.05 16.563-1.69 25.634-1.894l24.405 146.287c.691 4.173 4.309 7.125 8.405 7.125.461 0 .939-.034 1.417-.119 4.642-.768 7.782-5.171 7.006-9.822zM299.056 273.095c-4.378.009-8.405 2.97-9.011 7.373l-25.6 187.631a8.538 8.538 0 0 0 8.466 9.686 8.534 8.534 0 0 0 8.448-7.381l24.585-180.164c36.369.888 64.444 8.772 77.679 21.973 5.888 5.88 8.747 12.587 8.747 20.506V469.25a8.536 8.536 0 0 0 8.533 8.533 8.536 8.536 0 0 0 8.533-8.533V332.717c0-12.501-4.634-23.467-13.764-32.58-17.478-17.451-51.773-27.042-96.616-27.042M272.902 290.05c0-9.412-7.654-17.067-17.067-17.067s-17.067 7.654-17.067 17.067c0 6.289 3.456 11.733 8.533 14.694v62.106c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-62.106c5.079-2.96 8.535-8.405 8.535-14.694"></path>
                  <path d="M349.702 375.384a8.536 8.536 0 0 0-8.533 8.533v102.4a8.536 8.536 0 0 0 8.533 8.533 8.536 8.536 0 0 0 8.533-8.533v-102.4a8.536 8.536 0 0 0-8.533-8.533M443.602 221.784c0-9.412-7.663-17.067-17.084-17.067s-17.084 7.654-17.084 17.067c0 6.289 3.456 11.725 8.533 14.686v62.114a8.536 8.536 0 0 0 8.533 8.533 8.536 8.536 0 0 0 8.533-8.533v-62.089c5.096-2.961 8.569-8.414 8.569-14.711M504.419 206.944c-10.658-1.399-22.298-2.116-34.611-2.116-4.412 0-8.243 2.842-8.96 7.125l-25.643 153.489c-.777 4.651 2.355 9.054 7.006 9.822.478.085.947.119 1.417.119 4.096 0 7.714-2.953 8.405-7.125l24.448-146.287c9.096.205 17.715.845 25.702 1.894 4.634.597 8.96-2.671 9.574-7.347.624-4.676-2.67-8.959-7.338-9.574M59.568 102.317h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533M85.168 204.717c-9.412 0-17.067 7.654-17.067 17.067 0 6.289 3.456 11.733 8.533 14.694v62.106c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-62.106c5.077-2.961 8.533-8.405 8.533-14.694.002-9.413-7.652-17.067-17.065-17.067"></path>
                  <path d="M17.234 117.276c1.621 16.401 8.755 30.839 9.096 31.522 7.74 15.471 19.43 38.852 58.837 38.852s51.098-23.381 58.829-38.852c.35-.683 7.475-15.121 9.105-31.522 5.282-2.901 8.866-8.525 8.866-14.959V85.25c0-6.306-3.439-11.819-8.533-14.771v-2.295c0-28.237-22.963-51.2-51.2-51.2H68.102c-28.237 0-51.2 22.963-51.2 51.2v2.295c-5.094 2.953-8.533 8.465-8.533 14.771v17.067c-.001 6.434 3.583 12.057 8.865 14.959m8.201-32.026a8.536 8.536 0 0 0 8.533-8.533v-8.533c0-18.825 15.309-34.133 34.133-34.133h34.133c18.825 0 34.133 15.309 34.133 34.133v8.533a8.536 8.536 0 0 0 8.533 8.533v17.067a8.536 8.536 0 0 0-8.533 8.533c0 14.763-7.561 30.174-7.637 30.319-8.883 17.766-16.717 29.414-43.563 29.414-26.854 0-34.679-11.648-43.563-29.406-.077-.154-7.637-15.565-7.637-30.327a8.536 8.536 0 0 0-8.533-8.533zM161.968 375.384a8.536 8.536 0 0 0-8.533 8.533v102.4a8.536 8.536 0 0 0 8.533 8.533 8.536 8.536 0 0 0 8.533-8.533v-102.4c.001-4.71-3.822-8.533-8.533-8.533"></path>
                  <path d="M221.625 280.476a8.54 8.54 0 0 0-8.439-7.381c-44.834.06-79.633 9.515-97.186 27.042-9.139 9.114-13.764 20.079-13.764 32.58V469.25a8.536 8.536 0 0 0 8.533 8.533 8.536 8.536 0 0 0 8.533-8.533V332.717c0-7.919 2.859-14.626 8.755-20.506 13.227-13.201 41.301-21.086 77.67-21.965l24.585 180.156a8.53 8.53 0 0 0 9.608 7.304 8.54 8.54 0 0 0 7.305-9.609z"></path>
                </svg>{" "}
              </button>
            </li>
            <li
              className="w-1/2 xl:w-1/5 flex flex-col justify-center items-center md:px-5 transition-all ease-in-out duration-300 cursor-pointer group"
              onClick={() => {
                window.location.href = "mailto:dcoaquirar@unjbg.edu.pe";
              }}
            >
              <button className="bg-zinc-200 w-full flex flex-col justify-center items-center rounded-lg shadow-lg shadow-zinc-500 p-2">
                <a className="group-hover:text-blue-700 group-hover:underline group-hover:underline-offset-8">
                  Contactanos
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="800"
                  height="800"
                  viewBox="0 0 64 64"
                  className="w-16 h-16 mt-10 group-hover:fill-blue-700"
                >
                  <g id="_x30_8_email">
                    <path d="M35.014 31.833a1 1 0 1 0-.217-1.989c-6.493.704-9.58-1.688-11.026-3.82-2.02-2.98-2.064-7.282-.114-10.96 1.943-3.662 5.356-5.762 9.365-5.762h.003c3.055 0 5.795 1.246 7.33 3.333 1.602 2.176 1.864 5.2.758 8.748-.433 1.392-1.848 3.219-3.094 3.578-.507.149-.909.094-1.223-.166-.362-.301-.492-.77-.482-.954l.004-.034 1.096-10.957a1 1 0 0 0-.888-1.1.993.993 0 0 0-1.1.889l-.097.908q-.025-.021-.05-.041c-1.281-.922-3.076-1.011-4.804-.24-2.943 1.312-5.067 5.48-4.547 8.92.39 2.58 2.209 4.25 4.991 4.584 1.278.152 2.846-.225 4.009-1.085.169.243.368.464.59.649.825.683 1.91.88 3.057.549 2.009-.581 3.839-2.95 4.448-4.905 1.645-5.28.333-8.64-1.056-10.528-1.911-2.598-5.254-4.148-8.942-4.148h-.003c-4.774 0-8.831 2.488-11.132 6.825-2.293 4.323-2.205 9.433.226 13.019 2.133 3.147 5.823 4.819 10.533 4.819q1.144 0 2.365-.133m-.1-14.337-.57 5.942c-.581.954-2.106 1.474-3.188 1.347-1.9-.228-2.994-1.203-3.25-2.898-.385-2.545 1.259-5.847 3.383-6.795a3.75 3.75 0 0 1 1.51-.343c.504 0 .96.127 1.312.38.63.453.907 1.271.802 2.367"></path>
                    <path d="m59.306 21.653-7.264-4.498V2a1 1 0 0 0-1-1H12.477a1 1 0 0 0-1 1v15.016C8.006 19.204 5.671 20.8 4.561 21.75c-1.526 1.304-2.366 3.163-2.366 5.233v29.025A7 7 0 0 0 9.186 63h45.628a6.96 6.96 0 0 0 4.851-1.968q.004-.003.008-.006l.002-.004a6.97 6.97 0 0 0 2.13-5.013V26.984c0-1.745-.655-4.188-2.5-5.33m-7.264-2.146 5.06 3.133-5.06 4.413zm6.742 4.319c.696.8 1.02 2.077 1.02 3.158v29.025c0 1.075-.348 2.065-.928 2.88L39.59 40.566zM13.477 3h36.565v25.797l-18.044 15.74-18.521-16.148zm-2 16.384v7.263L6.78 22.55c1.056-.784 2.642-1.853 4.698-3.167M4.195 56.01V26.984c0-1.193.38-2.24 1.078-3.092l19.852 17.306L5.78 59.638a4.97 4.97 0 0 1-1.586-3.63M9.186 61a5 5 0 0 1-1.626-.295l19.079-18.187 4.702 4.099a1 1 0 0 0 1.314 0l5.422-4.73 19.33 18.366a4.94 4.94 0 0 1-2.592.747z"></path>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full flex flex-col lg:my-10">
        <div
          className="w-full h-3/4 md:h-2/3 flex flex-wrap justify-center items-center bg-zinc-200"
          ref={acercaDeNosotrosRef}
        >
          <div className="w-full xl:w-1/2 px-5 md:px-20 md:py-5 text-center text-sm md:text-base lg:text-sm max-md:order-last py-4 my-2 md:my-4 lg:my-10">
            <div className="w-full flex justify-center items-center">
              <h2 className="my-4 text-4xl text-white bg-black p-3 font-semibold">
                Acerca de Nosotros
              </h2>
            </div>
            <p className="my-2 lg:px-5 xl:20">
              Creemos que el comercio digital puede marcar una diferencia
              positiva al acercar la tecnología de manera accesible y
              significativa a quienes la necesitan. Por eso, nuestro compromiso
              es ofrecer equipos confiables y de calidad, desde laptops y
              monitores hasta impresoras y periféricos, para mejorar la vida y
              el trabajo de nuestros clientes.
            </p>
            <p className="my-2 lg:px-5 xl:20">
              Nos guiamos por principios de inclusión digital y prácticas
              sostenibles, seleccionando productos que contribuyen a un futuro
              mejor.
            </p>
            <p className="my-2 lg:px-5 xl:20">
              Nuestro equipo está aquí para ayudarte a encontrar las
              herramientas ideales que impulsen tus proyectos. ¡Explora nuestro
              catálogo y descubre cómo la tecnología puede transformar tus ideas
              en realidad!
            </p>
          </div>
          <div className="w-full xl:w-1/2 flex items-center justify-center max-md:my-4 max-md:order-last">
            <img
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-auto object-cover"
            />
            {/*<img
                src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-auto object-cover"
              />
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 left-0 top-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 right-0 top-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 left-0 bottom-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 right-0 bottom-0"></div>
              <div className="absolute xl:w-4 bg-zinc-200 h-full left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute xl:w-4 bg-zinc-200 h-full left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>*/}
          </div>
        </div>
        <div
          className="w-full flex flex-wrap p-4 md:p-10 my-10 md:px-16"
          ref={equipoYPropositoRef}
        >
          <div className="w-full xl:w-1/2 flex items-center md:px-5">
            <img
              src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731162493/standard_1033263-foto__1_-fotor-ai-art-effects-20241109092333-transformed_abaxlv.png"
              alt=""
              className="w-auto md:w-full h-auto md:h-full object-cover shadow-zinc-800 shadow-lg"
            />
          </div>
          <div className="w-full xl:w-1/2 max-xl:my-4 md:pl-10 flex flex-col justify-center items-center text-center text-sm md:text-base lg:text-sm md:px-5">
            <h2 className="text-black text-4xl font-bold my-4">
              Nuestro Equipo y Propósito
            </h2>
            <p className="my-2">
              Este proyecto nace del esfuerzo y la dedicación de un equipo de
              estudiantes universitarios en Perú, comprometidos con crear una
              plataforma digital que facilite el acceso a productos tecnológicos
              de calidad.
            </p>
            <p className="my-2">
              Inspirados en el impacto positivo que el comercio digital puede
              tener, hemos diseñado esta tienda en línea con el propósito de
              ofrecer una experiencia de compra práctica y segura, adaptada a
              las necesidades actuales.
            </p>
            <p className="my-2">
              Como equipo, buscamos que esta plataforma sirva tanto para
              nuestros usuarios como para demostrar nuestro potencial como
              futuros profesionales en tecnología y comercio electrónico.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
