"use client";
import { CATEGORIES } from "@/data/categories";
import useCategory from "@/api/hooks/useCategory";
import { BodyText } from "../shared/Typography";
import { useParams } from "next/navigation";

const Breadcrumb = () => {
  const { category } = useParams();
  // const { data, isLoading, isError } = useCategory();

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <BodyText variant="b_small">{"Loading..."}</BodyText>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <BodyText variant="b_small">{"Error loading categories"}</BodyText>
  //     </div>
  //   );
  // }
  const data = CATEGORIES;

  const categoryData = data.results.find((cat) => cat.slug === category);

  if (!categoryData) {
    return (
      <div className="flex items-center justify-center">
        <BodyText variant="b_small">
          {"Error loading category " + (category || "")}
        </BodyText>{" "}
      </div>
    );
  }
  return (
    <div className="flex gap-1 capsule px-0!">
      <BodyText variant="b_three" weight="bold" className="text-[#999999]">
        {"Home"}
      </BodyText>
      {category && (
        <>
          <BodyText variant="b_three" weight="bold" className="text-[#6C757D]">
            {"/"}
          </BodyText>
          <BodyText variant="b_three" weight="bold">
            {categoryData.name}
          </BodyText>
        </>
      )}
    </div>
  );
};
export default Breadcrumb;
