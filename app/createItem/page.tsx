import React from "react";
import {
    Container,
    Typography,
    Fille,
    Input,
    Textarea,
    Price,
    Button,
} from "./../Components/UI/index";

import { priceData } from "./../../mocap";

const CreateItem = () => {
    return (
        <section className="my-[35px]">
            <Container variant="min2">
                <Typography className="mb-[40px] text-[28px] font-semibold" element="h1">
                    Create new Item
                </Typography>
                <form className="flex flex-col gap-[55px]">
                    <div>
                        <Typography className="text-[24px] font-semibold mb-[20px]" element="h2">
                            Upload File
                        </Typography>
                        <Fille />
                    </div>
                    <div>
                        <Typography className="text-[24px] font-semibold mb-[20px]" element="h2">
                            Name
                        </Typography>
                        <Input placeholder="Item Name" />
                    </div>
                    <div>
                        <Typography className="text-[24px] font-semibold mb-[20px]" element="h2">
                            Description
                        </Typography>
                        <Textarea placeholder="Decryption of your item" />
                    </div>
                    <div>
                        <Typography className="text-[24px] font-semibold mb-[20px]" element="h2">
                            Price
                        </Typography>
                        <Price
                            data={priceData}
                            defaultValue={priceData[0]}
                            placeholder="Enter Price"
                        />
                    </div>
                    <Button className="w-fit md:ml-auto md:mx-0 mx-auto ">Create Item</Button>
                </form>
            </Container>
        </section>
    );
};

export default CreateItem;
