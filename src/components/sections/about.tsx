import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="object-center">
      <div
        className=" -top-20 z-10
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
