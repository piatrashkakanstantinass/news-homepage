import Link from "next/link";
import Image from "next/image";
import imageWeb3Mobile from "../public/image-web-3-mobile.jpg";
import imageWeb3Desktop from "../public/image-web-3-desktop.jpg";
import imageRetroPcs from "../public/image-retro-pcs.jpg";
import imageTopLaptops from "../public/image-top-laptops.jpg";
import imageGamingGrowth from "../public/image-gaming-growth.jpg";

function HotNewsItem({ title, description }) {
  return (
    <div className="space-y-1 py-6">
      <h3 className="text-white text-lg font-bold">
        <a href="#" className="hover:text-soft-orange">
          {title}
        </a>
      </h3>
      <p className="text-grayish-blue">{description}</p>
    </div>
  );
}

function NewsItem({ title, description, img, number }) {
  return (
    <div className="flex gap-6">
      <Image src={img} alt="" className="w-32 shrink-0" />
      <div className="space-y-1">
        <span aria-hidden className="font-semibold text-3xl">
          {number}
        </span>
        <h3 className="font-bold text-very-dark-blue">
          <Link href="#" className="hover:text-soft-orange">
            {title}
          </Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="md:col-span-2">
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
              className="bg-soft-red px-10 py-3 text-off-white uppercase font-semibold tracking-widest inline-block hover:bg-very-dark-blue"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-very-dark-blue p-5">
        <h2 className="text-soft-orange text-4xl font-bold">New</h2>
        <div className="divide-y divide-dark-grayish-blue">
          <HotNewsItem
            title="Hydrogen VS Electric Cars"
            description="Will hydrogen-fueled cars ever catch up to EVs?"
          />
          <HotNewsItem
            title="The Downsides of AI Artistry"
            description="What are the possible adverse effects of on-demand AI image generation?"
          />
          <HotNewsItem
            title="Is VC Funding Drying Up?"
            description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </div>
      </section>

      <section className="col-span-full flex flex-col md:flex-row gap-5 justify-between">
        <NewsItem
          title="Reviving Retro PCs"
          description="What happens when old PCs are given modern upgrades?"
          img={imageRetroPcs}
          number="01"
        />
        <NewsItem
          title="Top 10 Laptops of 2022"
          description="Our best picks for various needs and budgets."
          img={imageTopLaptops}
          number="02"
        />
        <NewsItem
          title="The Growth of Gaming PCs"
          description="How the pandemic has sparked fresh opportunities."
          img={imageGamingGrowth}
          number="03"
        />
      </section>
    </>
  );
}
