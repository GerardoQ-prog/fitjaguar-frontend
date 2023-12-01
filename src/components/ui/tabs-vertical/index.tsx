import "./styles.scss";
import { useState } from "react";

interface ITabsVerticalProps {
  tabs: any[];
  tabSelected: any;
  onTabSelected: (tab: string) => void;
}

const TabsVertical: React.FC<ITabsVerticalProps> = ({
  onTabSelected,
  tabSelected,
  tabs,
}) => {
  const [tabSelector, setTabSelector] = useState(0);

  const handleChangeTab = (tab: any, index: number) => {
    setTabSelector(index);
    onTabSelected(tab);
  };

  return (
    <div className="tab-vertical">
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              "tab-vertical__item" +
              (tabSelected?.name === tab.name
                ? " tab-vertical__item--active"
                : "")
            }
            onClick={() => handleChangeTab(tab, index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div
        className="tab-vertical__selector"
        style={{ marginTop: 30 * tabSelector }}
      ></div>
    </div>
  );
};

export default TabsVertical;
