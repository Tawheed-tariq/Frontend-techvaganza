import PageLayout from "../../../Components/PageLayout";
import { EventCategoryList } from "../../../constants/events";
import CategoryCard from "../components/CategoryCard";

export default function EventCategory() {
  return (
    <PageLayout title={"Events"} imgUrl={"ambassador.png"}>
      <div className="flex gap-5 px-52 flex-wrap items-center py-4 justify-center">
        {EventCategoryList.map((item) => (
          <CategoryCard key={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </PageLayout>
  );
}
