import { useEffect, useState } from "react";
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove("no-scroll");
      }, 2000);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="align-middle justify-center items-center h-screen w-screen absolute bg-black z-[500]">
          <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] loading loading-infinity loading-lg scale-[3] text-white" />
        </div>
      )}
    </>
  );
};

export default Loader;
