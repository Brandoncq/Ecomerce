export const metadata = {
  title: "Soporte Tecnico CompuFenix",
  description: "Soporte Tecnico de la Empresa CompuFenix",
  openGraph: {
    title: "Politicas y Privacidad CompuFenix",
    url: "https://ecomerce-five-lilac.vercel.app/PoliticasPrivacidad",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "CompuFenix",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "CompuFenix",
  },
};
export default function Poiticas() {
  return (
    <>
      <div className="w-full flex flex-col border-t-4 border-zinc-200">
        <section className="w-full flex p-5 md:px-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-96 object-cover"
          />
        </section>
        <section className="w-full flex flex-col p-4 md:px-20">
          <h2 className="text-center text-4xl font-normal my-5">
            Declaración de Privacidad Global de CompuFenix
          </h2>
          <p className="my-4">
            En CompuFenix, reconocemos que la privacidad es un derecho
            fundamental y entendemos la importancia de la privacidad, la
            seguridad y la protección de los datos para nuestros usuarios y
            socios. Como proyecto de comercio electrónico, nos esforzamos por
            implementar medidas de protección de datos que cumplan con las leyes
            aplicables y mantenemos políticas y procedimientos rigurosos en
            todas nuestras operaciones. Los términos como &quot;nosotros&quot;,
            &quot;nos&quot; y &quot;nuestro&quot; hacen referencia a CompuFenix
            y a nuestras posibles futuras filiales, según la definición de la
            legislación local.
          </p>
          <p className="my-4">
            Esta Declaración de Privacidad le informa sobre nuestras prácticas
            de manejo de datos personales, las opciones que puede tomar y los
            derechos que puede ejercer en relación con sus datos personales.
            Esto incluye la información que podemos recopilar a partir de su
            actividad en línea, el uso de nuestros servicios y las interacciones
            que mantenga con CompuFenix tanto en línea como fuera de línea, como
            cuando contacta a nuestro servicio de atención al cliente. Esta
            declaración se aplica a CompuFenix, sus sitios web, dominios,
            servicios, aplicaciones y productos bajo nuestro control, en el
            contexto de consumidor o cliente empresarial. Para ciertos
            servicios, podríamos proporcionarle información adicional de
            privacidad que complemente esta Declaración. Es importante destacar
            que esta Declaración de Privacidad no cubre los datos relacionados
            con posibles empleados o contratistas, ya que esta información se
            gestiona de acuerdo con la normativa laboral correspondiente.
          </p>
          <p className="my-4">
            Tampoco abarca los datos que procesamos en nombre de nuestros
            clientes empresariales cuando prestamos servicios, ya que en estos
            casos, nuestros contratos con dichos clientes determinan cómo
            gestionamos sus datos personales. Para consultas relacionadas con la
            privacidad de sus datos personales, puede contactarnos en la sección
            de &quot;Ejercicio de sus derechos y contacto&quot;. A lo largo de
            este documento, las referencias a &quot;legislación local&quot; o
            &quot;legislación aplicable&quot; hacen referencia a las leyes que
            regulan la privacidad de datos en el país o región en la que usted
            reside o donde CompuFenix opera y procesa datos personales.
          </p>
        </section>
      </div>
    </>
  );
}
