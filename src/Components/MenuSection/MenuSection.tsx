import { useTranslation } from "react-i18next";
import FoodCard from "../Cards/FoodCard";
import type { MenuCategory } from "../../types/menu";

type MenuSectionProps = {
  category: MenuCategory;
  sectionRef?: (element: HTMLElement | null) => void;
};

export default function MenuSection({
  category,
  sectionRef,
}: MenuSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      id={category.key}
      ref={sectionRef}
      className="scroll-mt-28 space-y-8"
    >
      <div>
        <h2 className="text-3xl text-stone-900">
          {t(category.titleKey)}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.items.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}