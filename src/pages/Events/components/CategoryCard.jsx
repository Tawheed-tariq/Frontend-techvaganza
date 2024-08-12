import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, url }) => {
  return (
    <div className="shadow-sm shadow-secondary">
      <img className="h-[450px] w-80" src={img} alt={title + " image"} />
      <div className="p-3 bg-primary bg-opacity-70 font-playfair ">
        <p className="text-3xl font-semibold">{title}</p>
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
