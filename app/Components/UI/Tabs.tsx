"use client";

import React, { useState } from "react";
import { Tabs as TabsUi, Tab } from "@nextui-org/react";
import { tabsData } from "./../../../mocap";

const Tabs = () => {
    const [selected, setSelected] = useState("photos");
    return (
        <div className="flex w-full flex-col">
            <TabsUi
                className=""
                classNames={{
                    tabList: "p-0 gap-[25px] overflow-visible",
                    base: "border-b-1 dark:border-static-black border-[#E3E1E3]",
                    tab: "px-0 py-0 h-auto text-[16px] text-black-1 ",
                    tabContent:
                        "font-normal text-black-1 group-data-[selected=true]:font-semibold mb-[10px]",
                    cursor: "w-[100%] h-[1px] bg-black-1 bottom-[-1px]",
                    panel: "p-0 pt-[30px]",
                }}
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant="underlined">
                {tabsData.map((el) => {
                    return (
                        <Tab key={el.key} title={el.title}>
                            <div className="text-grey-2 leading-[162.5%] text-[16px]">
                                {el.descriptions}
                            </div>
                        </Tab>
                    );
                })}
            </TabsUi>
        </div>
    );
};

export default Tabs;
