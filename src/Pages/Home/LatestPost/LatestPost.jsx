import React from "react";
import PostImage1 from "../../../assets/LatestPost/post-img-1.jpg";
import PostImage2 from "../../../assets/LatestPost/post-img-2.jpg";
import PostImage3 from "../../../assets/LatestPost/post-img-3.jpg";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";
import Card from "./Card";

const LatestPost = () => {
  return (
    <section className="mt-12">
      {/* shared section title */}
      <div className="max-w-[60%] mx-auto">
        <SectionTitleDiv
          subTitle={"Latest Post"}
          title={"Stories Of Impact and hope"}
          text={
            "Explore visiting stories and updates about our works and success. We have fortunate to see your love react support which creating a feel for us."
          }
        />
      </div>

      {/* cards of our stories */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Card
          date={"January 21, 2025"}
          title={"Youth Leadership Program Inspire the Next Generation."}
          image={PostImage1}
        />
        <Card
          date={"February 05, 2025"}
          title={"Youth Leadership Program Inspire the Next Generation."}
          image={PostImage2}
        />
        <Card
          date={"March 29, 2025"}
          title={"Ramadan Ifter Mahfil for all kinds of peoples make a great impact."}
          image={PostImage3}
        />
      </div>
    </section>
  );
};

export default LatestPost;
