"use client";

import React, { useState } from "react";
import { Tabs as TabsUi, Tab } from "@nextui-org/react";

const Tabs = () => {
    const [selected, setSelected] = useState("photos");
    return (
        <div className="flex w-full flex-col">
            <TabsUi
                className=""
                classNames={{
                    tabList: "p-0 gap-[25px] overflow-visible",
                    base: "border-b-1 border-[#E3E1E3]",
                    tab: "px-0 py-0 h-auto text-[16px]  text-black-1 ",
                    tabContent:
                        "font-normal text-black-1 group-data-[selected=true]:font-semibold mb-[10px] transition-all",
                    cursor: "w-[100%] h-[1px] bg-black-1 translate-y-[1px] bottom-[-1px]",
                    panel: "p-0 pt-[30px]",
                }}
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant="underlined">
                <Tab key="photos" title="Photos">
                    <div className="text-grey-2 leading-[162.5%] text-[16px]">
                        1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </Tab>
                <Tab key="music" title="Music">
                    <div>
                        2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </Tab>
                <Tab key="videos" title="Videos">
                    <div>
                        3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </Tab>
            </TabsUi>
        </div>
    );
};

export default Tabs;
