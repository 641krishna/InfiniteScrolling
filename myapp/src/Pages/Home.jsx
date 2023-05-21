import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const logOut = () => {
        navigate('/')
    }

    const [users, setUser] = useState([]);

    // const url = 'https://randomuser.me/api/?results=500&_page=1&_limit=10'

    const getData = () => {
        setIsLoading(true);
        fetch(`https://randomuser.me/api/?page=${page}&results=10`)
            .then(response => response.json())
            .then(data => {
                setUser(prevUsers => [...prevUsers, ...data.results]);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        getData();
    }, [page]);

    // console.log(users)

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, 1000)

    }, []);


    return (
        <>
            <Box>
                <Box margin='auto' border='1px solid #d8dee4' borderRadius='15px' padding='5px' width='90%' mt='10px'>
                    <Flex justifyContent='space-around'>
                        <Text fontSize='25px' fontWeight='500'>
                            Home Page
                        </Text>
                        <Button onClick={logOut}>
                            Logout
                        </Button>
                    </Flex>
                </Box>
            </Box>

            <Box>

                {users.map(user => (
                    <Box key={user.login.uuid} >
                        <Flex border='1px solid #d8dee4' _hover={{ backgroundColor: 'green.100' }} borderRadius='15px' width='55%' margin='auto' mt='5px' justifyContent='space-between'
                            padding='7px' alignItems='center' cursor='pointer'>
                            <Text fontWeight='550' width='40%'>{`${user.name.first} ${user.name.last}`}</Text>
                            <Image src={user.picture.thumbnail} width='60px' borderRadius='25%' alt={user.name.first} />
                        </Flex>

                    </Box>
                ))}

                {isLoading && <Text fontSize='25px' fontWeight='550'>Loading...</Text>}
            </Box>

        </>
    )
}

export default Home