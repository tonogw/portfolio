import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full">
      <div
        className="absolute  -top-15 left-1/2 -translate-x-1/2 z-10 w-full max-w-360
      "
      >
        <Image
          src="/icons/subtract.svg"
          alt="substract"
          width={1440}
          height={390}
          className="z-10 object-center
          "
        />
        <div className="custom-container text-black z-50">
          <div className="w-295 left-0 bg-white h-145 text-black">
            <ul className="text-black">
              <li className="text-black">Landing Page</li>
              <li>Dashboard </li>
              <li>Company Profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
