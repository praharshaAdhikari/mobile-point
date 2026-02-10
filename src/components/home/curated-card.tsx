import { CuratedItem } from "@/data/curated";
import Image from "next/image";
import { BodyText, Heading } from "../shared/Typography";

const CuratedCard = ({ curated }: { curated: CuratedItem }) => {
  return (
    <div className="hover:outline hover:outline-[#E2E4EB] rounded-lg p-2">
      <div className="h-57.5 w-full relative space-y-4">
        <Image
          src={curated.image}
          alt={curated.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-3 my-5">
        <Heading
          variant="h4"
          className="font-bold leading-6! h-12 align-bottom line-clamp-2"
          title={curated.title}
          aria-label={curated.title}
        >
          {curated.title}
        </Heading>
        <BodyText
          variant="b_small"
          className="text-[#666666] leading-4! h-8 line-clamp-2"
          title={curated.exerpt}
          aria-label={curated.exerpt}
        >
          {curated.exerpt}
        </BodyText>
      </div>
      <button className="text-[#C40EDC] px-8 py-1 border border-[#C40EDC] rounded-xl text-sm font-medium hover:underline">
        <BodyText
          variant="b_small"
          weight="medium"
          className="uppercase"
          title="Shop Now"
          aria-label="Shop Now"
        >
          {"Shop Now"}
        </BodyText>
      </button>
    </div>
  );
};
export default CuratedCard;
