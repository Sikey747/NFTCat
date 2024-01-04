import React from "react";
import ImgIcon from "@/public/assets/icon/imageIcon.svg";
import { Typography } from "./index";

const Fille = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full px-[60px] pb-[31px] pt-[41px] file-border  border-grey-2  cursor-pointer hover:bg-grey-1 transition-all">
                <div className="flex flex-col gap-[20px] items-center justify-center pt-5 pb-6">
                    <h3 className="text-center">JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h3>
                    <ImgIcon className="h-[114px] w-[114px] fill-grey-3" />
                    <Typography size="14" weight="SemiBold" className="text-center">
                        Drag and Drop File
                        <br />
                        <Typography size="14" weight="Regular" element="span">
                            or&nbsp;
                        </Typography>
                        browse media on your device
                    </Typography>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
    );
};

export default Fille;
