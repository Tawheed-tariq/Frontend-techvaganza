import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, url }) => {
  return (
    <div className="mb-5">
      <img className="h-[450px] w-96 md:w-80 overflow-hidden" src={img} alt={title + " image"} />
      <div className="p-3 bg-primary bg-opacity-70 font-sanchez ">
        <p className="text-3xl font-semibold leading-normal">{title}</p>
        <Link to={url}>
          <button className="mt-2 border-black border py-2 px-3 rounded-lg">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
