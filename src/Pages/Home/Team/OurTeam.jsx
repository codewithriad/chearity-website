import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv"
import TeamCard from "./TeamCard"


const OurTeam = () => {
  return (
    <section id="our team" className="mt-12">
      <div className="lg:max-w-[50%] mx-auto px-4">
        <SectionTitleDiv subTitle={"Our Team"} title={"Our Team Members"} text="All members of the are doing job well. The are passionate to doing this charity fund as a Team member. We all of us are ready to help all the peoples, who's needed." />
      </div>

      {/* team members card */}
      <div className="mx-8 lg:mx-[18rem]">
        <TeamCard/>
      </div>
    </section>
  )
}

export default OurTeam