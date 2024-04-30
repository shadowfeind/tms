import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadCrumbsProps {
  name: string;
  link?: string;
}

interface BreadCrumbPageProps {
  breadCrumbs: BreadCrumbsProps[];
}

export const BreadcrumnForPage = ({ breadCrumbs }: BreadCrumbPageProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadCrumbs.map((crumbs, index) => (
          <Fragment
            key={`<span class="math-inline">\{crumbs\.name\}\-</span>{index}`}
          >
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {crumbs.link ? (
                <BreadcrumbLink asChild>
                  <Link href={crumbs.link}>{crumbs.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumbs.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
