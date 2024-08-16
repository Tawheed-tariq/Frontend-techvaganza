import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, url }) => {
  return (
    <div className="mb-5">
      <img className="h-[450px] w-96 md:w-80 overflow-hidden" src={img} alt={title + " image"} />
      <div className="p-4 bg-background font-sanchez ">
        <p className="text-3xl text-primary bg-opacity-70 font-semibold overflow-visible">{title}</p>
        <Link to={url}>
          <button className="mt-2 ShadowBlur text-primary border-primary border py-2 px-3 rounded-lg">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
