import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
        {breadCrumbs.map((crumbs) => {
          if (crumbs.link) {
            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={crumbs.link}>
                  <BreadcrumbLink asChild>
                    <Link href="/components">{crumbs.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            );
          }
          return (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={crumbs.name}>
                <BreadcrumbPage>{crumbs.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
