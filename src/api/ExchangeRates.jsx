import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const ExchangeRates = ({ }) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null)


        const getData = async () => {
            try {
                const response = await fetch(
                    `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

    return (
       <Exchange>
        <TitleMain>Exchange rates of PrivatBank</TitleMain>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div>
                <ExchangeList>
                    {data && data.map(({ id, ccy, base_ccy, buy, sale }) => (
                        <ExchangeItem key={id}>
                            <h3>{ccy}</h3>
                            <p>{base_ccy}</p>
                            <strong>{buy}</strong>
                            <strong>{sale}</strong>
                        </ExchangeItem>
                    ))}
                </ExchangeList>
            </div>
       </Exchange>
    );
};

export default ExchangeRates;

const Exchange = styled.div({
   
});

const TitleMain = styled.h1({
    color: 'green',
})

const ExchangeList = styled.ul({
   
});
const ExchangeItem = styled.li({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
});