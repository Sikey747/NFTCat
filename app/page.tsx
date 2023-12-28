import {
    Button,
    Typography,
    Input,
    NFTCard,
    SellersCard,
    Logo,
    SwiperSellers,
} from "./Components/UI/index";

const Home = () => {
    return (
        <>
            <Button type="button">Button</Button>
            <Typography>new Yers</Typography>
            <Typography size="10" weight="SemiBold">
                new Yers
            </Typography>
            <h1>iiii</h1>
            <Input placeholder="toiu text" />
            <NFTCard like={25} prise={1515} src="/55545" title="Title" />
            <SellersCard position={2} price={252} srs="/dfds" title="Masm AMM00232032S" />
            <Input placeholder="toiu text" variant="Search" />
            <Logo variant="max" />
            <Logo variant="min" />
            <SwiperSellers />
        </>
    );
};
export default Home;
