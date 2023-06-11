import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <>
            <a href={url} target="blank" rel="noopener noreferrer">
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
                        {rank}
                    </Heading>

                    <Text noOfLines={1}>{name}</Text>
                </VStack>
            </a>
           
        </>
    );
}

ExchangeCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default ExchangeCard;
