import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
    <Link to={`/coin/${id}`}>
        <VStack
            w={"52"}
            shadow={"lg"}
            p={"8"}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={"4"}
            css={{
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}


        >
            <Image
                src={img}
                w={"10"}
                h={"10"}
                objectFit={"contain"}
                alt={"Exchange"}
            />
            <Heading size={"md"} noOfLines={1}>
                {symbol}
            </Heading>

            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
        </VStack>
    </Link>
);

CoinCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currencySymbol: PropTypes.string.isRequired,
};
export default CoinCard;