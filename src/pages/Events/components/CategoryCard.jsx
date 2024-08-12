const CategoryCard = ({ img, title }) => {
  return (
    <div className="shadow-sm shadow-secondary">
      <img className="h-[450px] w-80" src={img} alt={title + " image"} />
      <div className="p-3 bg-primary bg-opacity-70 font-playfair ">
        <p className="text-3xl font-semibold">{title}</p>
        <button className="mt-2 border-black border py-2 px-3 rounded-lg">
          Show More
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
