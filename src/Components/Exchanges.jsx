import axios from 'axios';
import { useEffect, useState } from 'react';
import { server } from "../main"
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorPage from './ErrorPage';

const Exchanges = () => {

  const [exchanges, setExchange] = useState([]);
  const [loader, Setloader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data);
        setExchange(data);
        Setloader(false);

      } catch (error) {


        setError(true);
        Setloader(false);


      }
    }
    fetchExchanges();
  }, []);
  if (error) return <ErrorPage></ErrorPage>;

  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader></Loader>
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              ></ExchangeCard>
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}




export default Exchanges;
