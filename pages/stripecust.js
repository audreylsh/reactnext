/* const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const customers = await stripe.customers.list();
console.log(customers);
console.log(customers.data.map(c => c.id))
 */

//{JSON.stringify(customers,null,2)}

//<h2>{JSON.stringify(event.data.object.customer_details, null, 2)} </h2>

function Pricing({ custevent, customers }) {
    const custid =  custevent.map(event => (event.data.object.customer))
    const cust= custevent.map(event => (event.data.object.customer_details))
    console.log(cust)
    const obj= custevent.map(event => (event.data.object.payment_intent))
    console.log(cust.email)
    //const custemail = cust.map(event=> (event.email))

   // {JSON.stringify(custid, null, 2)}
    //{JSON.stringify(obj, null, 2)}
    //{JSON.stringify(cust, null, 2)}

    return (
       <>
       
       <div>
          
            {JSON.stringify(customers, null, 2)}
           
          
        </div> 
     
     {/*    <div>
             {cust.map(e=> (
                 <h2>{e.email} </h2>
             ))} 
                                        
           </div>   */}

            </>    
         
    );
    
}

export const getStaticProps = async() =>{
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const events = await stripe.events.list();
    const custevent = events.data;


    const customers = await stripe.customers.list({
        limit: 3,
      });



    /* const plans = await Promise.all(
        prices.map(async(price)=>{
            const product= await stripe.products.retrieve(price.product)
             return{
                id: price.id,
                name: product.name,
                price: price.unit_amount

            }
        }) */
    


   return{
     props: {custevent, customers}
     //props: {events}
    };
};

export default Pricing;

