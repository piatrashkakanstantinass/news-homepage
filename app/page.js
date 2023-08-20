import Link from "next/link";
import Image from "next/image";
import imageWeb3Mobile from "../public/image-web-3-mobile.jpg";
import imageWeb3Desktop from "../public/image-web-3-desktop.jpg";

function NewsItem({ title, description }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
}

export default function Home() {
  return (
    <>
      <section className="col-span-2">
        <Image src={imageWeb3Mobile} className="md:hidden" />
        <Image src={imageWeb3Desktop} className="max-md:hidden" />
        <div className="space-y-3 md:flex mt-3">
          <h1 className="font-extrabold text-3xl text-very-dark-blue md:text-4xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="space-y-3">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Link
              href="#"
              className="bg-soft-red px-10 py-3 text-off-white uppercase font-semibold tracking-widest inline-block"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-very-dark-blue p-5 font-bold text-2xl">
        <h2 className="text-soft-orange">New</h2>
      </section>
    </>
  );
}
