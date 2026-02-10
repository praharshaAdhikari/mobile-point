import { CURATED_ITEMS } from "@/data/curated";
import CuratedCard from "./curated-card";

const CuratedCarousel = ({ currentIndex }: { currentIndex: number }) => {
  const CAROUSEL_VISIBLE_ITEMS = 4;

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-2 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / CAROUSEL_VISIBLE_ITEMS)}%)`,
        }}
      >
        {CURATED_ITEMS.map((item) => (
          <div
            key={item.id}
            className="shrink-0 my-1"
            style={{
              width: `calc((100% - ${(CAROUSEL_VISIBLE_ITEMS - 1) * 8}px) / ${CAROUSEL_VISIBLE_ITEMS})`,
            }}
          >
            <CuratedCard curated={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CuratedCarousel;
