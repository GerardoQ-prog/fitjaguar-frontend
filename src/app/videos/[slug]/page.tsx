import Separator from "@/components/ui/separator";
import { FC } from "react";
import videos from "@/utils/data/videos.json";

interface ISlugVideoPageProps {
  params: {
    slug: string;
  };
}

const SlugVideoPage: FC<ISlugVideoPageProps> = ({ params }) => {
  const video = videos.items.find((item) => item.slug === params.slug);
  return (
    <main>
      <Separator height="150px" />
      {params.slug}
    </main>
  );
};

export default SlugVideoPage;
