import { useTranslation } from "react-i18next";
import type { MenuItem } from "../../types/menu";

type FoodCardProps = {
  item: MenuItem;
};

export default function FoodCard({ item }: FoodCardProps) {
  const { t } = useTranslation();

  return (
    <article className="group w-full">
      <div className="overflow-hidden rounded-[20px] bg-white">
        <div className="relative aspect-4/5 overflow-hidden rounded-[20px] bg-stone-200">
          {item.badgeKey && (
            <span className="absolute left-6 top-6 z-10 rounded-full bg-[#f3d46b] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1f1f]">
              {t(item.badgeKey)}
            </span>
          )}

          {item.image ? (
            <img
              src={item.image}
              alt={t(item.nameKey)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-stone-200 text-sm tracking-wide text-stone-500">
              {t("common.noImage")}
            </div>
          )}
        </div>
      </div>

      <div className="px-1 pb-1 pt-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="max-w-[70%] text-[28px] leading-tight text-stone-900">
            {t(item.nameKey)}
          </h3>

          <div className="shrink-0 pt-1 text-[20px] font-medium text-[#9f7d1c]">
            ${item.price.toFixed(2)}
          </div>
        </div>

        {item.weight && (
          <p className="mb-2 text-sm text-stone-500">{item.weight}</p>
        )}

        <p className="text-[18px] leading-9 text-stone-600">
          {item.descriptionKey
            ? t(item.descriptionKey)
            : t("common.descriptionFallback")}
        </p>
      </div>
    </article>
  );
}