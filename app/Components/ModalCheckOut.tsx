import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    type ModalProps as ModalPropsUI,
} from "@nextui-org/react";
import { Button, Typography, ShopCard } from "./UI/index";
import { shopData } from "./../../mocap";

interface ModalProps extends Omit<ModalPropsUI, "children"> {
    children?: React.ReactNode;
}

const CheckOut = ({ isOpen, onOpenChange }: ModalProps) => {
    return (
        <Modal
            hideCloseButton
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{ base: "sm:max-w-[585px] sm:p-[40px] mx-0 my-0 rounded-[20px] " }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex justify-center pb-[25px] border-b border-grey-1">
                            <Typography className="text-[24px] font-semibold" element="h4">
                                Check Out
                            </Typography>
                        </ModalHeader>
                        <ModalBody className="py-[25px] px-4 flex flex-col gap-[35px] border-b border-grey-1">
                            <div className="flex gap-1 justify-between">
                                <Typography size="16" weight="SemiBold">
                                    Item
                                </Typography>
                                <Typography size="16" weight="SemiBold">
                                    Subtotal
                                </Typography>
                            </div>
                            {shopData.length > 0 ? (
                                <ul className="flex gap-4 flex-col">
                                    {shopData.map((el) => {
                                        return (
                                            <li key={el.name}>
                                                <ShopCard
                                                    alt={el.name}
                                                    description={el.description}
                                                    price={el.price}
                                                    name={el.name}
                                                    src={el.src}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p>Not have item</p>
                            )}
                            <div className="flex gap-1 justify-between items-center">
                                <Typography size="16" weight="SemiBold">
                                    Total
                                </Typography>
                                <Typography size="16" weight="Regular">
                                    4.5&nbsp;
                                    <Typography element="span" size="16" weight="SemiBold">
                                        ETH
                                    </Typography>
                                </Typography>
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex gap-[20px] mx-auto pt-[30px] max-w-[300px]">
                            <Button color="danger" variants="primary">
                                Checkout
                            </Button>
                            <Button color="primary" variants="secondary" onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CheckOut;
