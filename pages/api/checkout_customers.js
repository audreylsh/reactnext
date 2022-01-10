
function Pricing({ prices }) {
    return (
        JSON.stringify(prices, null, 2)
    );
}

export const getStaticProps = async() =>{
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const {data:prices} = await stripe.prices.list();

    return{
        props: {
            prices,
        }
    };
};

export default Pricing;

