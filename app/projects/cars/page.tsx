import Image from "next/image";

export default function GaragePage() {
  return (
    <>
      <h1 className="text-lg! font-normal mb-5">
        every car i&apos;ve ever owned
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <Car
          year={2004}
          make="Nissan"
          model="Murano"
          trim="SL"
          displacementLiters={3.5}
          cylinderCount={6}
          imgSrc="/img/cars/murano.png"
        />

        <Car
          year={1995}
          make="Ford"
          model="F-150"
          trim="XLT"
          displacementLiters={3.7}
          cylinderCount={6}
          imgSrc="/img/cars/f150.png"
        />

        <Car
          year={1991}
          make="Honda"
          model="Civic"
          trim="DX Hatchback"
          displacementLiters={1.5}
          cylinderCount={4}
          imgSrc="/img/cars/civic.png"
        />
        <Car
          year={2019}
          make="Ford"
          model="Explorer"
          trim="Police Interceptor"
          displacementLiters={4.9}
          cylinderCount={6}
          imgSrc="/img/cars/explorer.png"
          fate="sold on fb marketplace"
        />
        <Car
          year={1995}
          make="Mercedes"
          model="C280"
          trim="Base"
          displacementLiters={2.8}
          cylinderCount={6}
          imgSrc="/img/cars/c280.png"
          fate="sold on fb marketplace"
        />
      </div>
    </>
  );
}

interface CarProps {
  year: number;
  make: string;
  model: string;
  trim?: string;
  displacementLiters: number;
  cylinderCount: number;
  fate?: string;
  imgSrc?: string;
}

function Car({
  year,
  make,
  model,
  trim,
  displacementLiters,
  cylinderCount,
  fate,
  imgSrc,
}: CarProps) {
  return (
    <div className="p-1 rounded-xs  m-auto ">
      {imgSrc && (
        <Image
          alt=""
          src={imgSrc}
          className="aspect-video object-scale-down "
          height={200}
          width={200}
        />
      )}
      <h2 className="mb-0!">
        {year} {make} {model}
      </h2>
      <p className="opacity-70 font-normal! text-xs text-nowrap text-center! mb-2">
        {trim} - {displacementLiters}L {cylinderCount} cyl
      </p>
      <p
        className={`text-center! font-bold text-xs ${fate ? "bg-red-900" : "bg-green-800"}`}
      >
        {fate ? fate : "currently owned"}
      </p>
    </div>
  );
}
