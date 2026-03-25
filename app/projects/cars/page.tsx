export default function GaragePage() {
  return (
    <>
      <h3>every car i've ever owned</h3>
      <div>
        <Car
          year={2004}
          make="Nissan"
          model="Murano"
          trim="SL"
          displacementLiters={3.5}
          cylinderCount={6}
        />
        <Car
          year={2019}
          make="Ford"
          model="Explorer"
          trim="Police Interceptor"
          displacementLiters={4.9}
          cylinderCount={6}
        />
        <Car
          year={1995}
          make="Ford"
          model="F-150"
          trim="Police Interceptor"
          displacementLiters={3.7}
          cylinderCount={6}
          fate="sold"
        />
        <Car
          year={1995}
          make="Mercedes-Benz"
          model="C280"
          displacementLiters={2.8}
          cylinderCount={6}
          fate="sold"
        />
        <Car
          year={1991}
          make="Honda"
          model="Civic"
          trim="DX Hatchback"
          displacementLiters={1.5}
          cylinderCount={4}
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
    <div>
      {year} {make} {model}
    </div>
  );
}
