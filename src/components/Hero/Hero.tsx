"use client";
type HeroProps = {
  setShowAvailable: (isAvailable: boolean) => void;
  setshowAll: (showAll: boolean) => void;
  showAvailable: boolean;
  showAll: boolean;
};

const Hero = ({
  showAll,
  showAvailable,
  setShowAvailable,
  setshowAll,
}: HeroProps) => {
  const handleClick = () => {
    setShowAvailable(!showAvailable);
    setshowAll(!showAll);
  };
  const handleClickAll = () => {
    setshowAll(!showAll);
    setShowAvailable(!showAvailable);
  };

  return (
    <div className="flex  justify-center  px-10 py-10 ">
      <div className="flex flex-col items-center  w-1/2 gap-5">
        <h1 className="text-customTitleColor text-2xl font-bold">
          Our Collection
        </h1>

        <p className="text-customSubTitleColor text-base text-center font-semibold">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div className="flex gap-4">
          <button
            className={`${
              showAll && "bg-customButtomColor"
            } p-2 rounded-lg text-sm text-white font-semibold`}
            onClick={handleClickAll}
          >
            All Products
          </button>
          <button
            className={` ${
              showAvailable && "bg-customButtomColor"
            } p-2 rounded-lg text-white`}
            onClick={handleClick}
          >
            Available Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
