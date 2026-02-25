"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const Breadcrumb = () => {
  const params = useParams();
  const category = (params.category as string) || "";
  const categoryLabel = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/" },
    { label: categoryLabel, href: `/${category}` },
  ];

  return (
    <nav aria-label="Breadcrumb" className="capsule">
      <ol className="flex items-center gap-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {index < crumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className="hover:text-[#C40EDC] transition-colors">
                  <BodyText variant="b_small" className="text-[#666666]">
                    {crumb.label}
                  </BodyText>
                </Link>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} className="text-[#999999]" />
              </>
            ) : (
              <BodyText variant="b_small" weight="medium" className="text-foreground">
                {crumb.label}
              </BodyText>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
