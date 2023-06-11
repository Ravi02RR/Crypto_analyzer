
import {
    Drawer,
    DrawerBody,

    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,

} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"



const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                position={'fixed'}
                top={"4"}
                left={"4"}
                colorScheme='gray'
                p={'0'}
                w={'10'}
                h={"10"}
                borderRadius={'full'}
                zIndex={'sticky'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={"20"}></BiMenuAltLeft>

            </Button>


            <Drawer isOpen={isOpen} placement='left' onClose={onClose}
            >



                <DrawerOverlay></DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton></DrawerCloseButton>
                    <DrawerHeader>
                        Crypto Analyzer
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack alignItems={'flex-start'} p={'4'}
                        >
                            <Button onClick={onClose} variant={"ghost"}>
                                <Link to={"/"}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={"ghost"}>
                                <Link to={"/Exchanges"}>Exchanges</Link>
                            </Button>
                            <Button onClick={onClose} variant={"ghost"}>
                                <Link to={"/Coins"}>Coins</Link>
                            </Button>

                        </VStack>
                    </DrawerBody>



                </DrawerContent>



            </Drawer >


        </>
    )
}

export default Nav