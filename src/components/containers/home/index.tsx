"use client";

import { useState, FC } from "react";
import TabsHome from "../tabs-home";
import BannerStatistics from "@/components/containers/banner-statistics";
import Benefits from "../benefits";
import Testimonials from "../testimonials";
import Experience from "../experience";
import BannerFooter from "@/components/containers/banner-footer";
import About from "../about";
import CardsCourses from "../cards-courses";
import BannerRoad from "../banner-road";

const Home: FC = () => {
  const [tabSelected, setTabSelected] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      name: "Nosotros",
      selector: "0%",
    },
    {
      id: 1,
      name: "Cursos",
      selector: "33.33%",
    },
    {
      id: 2,
      name: "Rutas",
      selector: "66.66%",
    },
  ];

  const handleChangeTab = (id: number) => {
    setTabSelected(id);
  };

  return (
    <section>
      <TabsHome
        tabs={tabs}
        tabSelected={tabSelected}
        handleChangeTab={handleChangeTab}
      />
      {tabSelected === 0 && (
        <div>
          <About />
          <BannerStatistics />
          <Benefits />
          <Experience />
          <Testimonials />
        </div>
      )}
      {tabSelected === 1 && (
        <div>
          <CardsCourses isViewAll />
        </div>
      )}
      {tabSelected === 2 && (
        <div>
          <BannerRoad />
        </div>
      )}
    </section>
  );
};

export default Home;
