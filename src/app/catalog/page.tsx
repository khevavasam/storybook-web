import { mockStories } from "@/components/catalog/mockStories";
import { CatalogPage } from "@/components/catalog";

export default function CatalogRoutePage() {
  return <CatalogPage stories={mockStories} />;
}
