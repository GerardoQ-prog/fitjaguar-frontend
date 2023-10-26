"use client";

import React, { useState, memo } from "react";
import "./styles.scss";

type Tabs = {
  id: number;
  name: string;
  selector: string;
};

interface ITabsHomeProps {
  tabs: Tabs[];
  tabSelected: number;
  handleChangeTab(id: number): void;
}

const TabsHome: React.FC<ITabsHomeProps> = ({
  tabs,
  tabSelected,
  handleChangeTab,
}) => {
  return (
    <div>
      <div className="tabs-home">
        <div className="tabs">
          <div className="tabs__container">
            {tabs.map((item, index) => (
              <div
                className={`tabs__item ${
                  item.id === tabSelected ? "tabs__item--active" : ""
                }`}
                key={index}
                onClick={() => handleChangeTab(item.id)}
              >
                <p>{item.name}</p>
              </div>
            ))}
            <div
              className="tabs__selector"
              style={{ left: tabs[tabSelected].selector }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TabsHome);
