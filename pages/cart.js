/* const redirectToCheckout = async () => {
    const {
        data: { id },
      } = await axios.post('/api/checkout_sessions', {
        items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
          price: id,
          quantity,
        })),
      });

    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  export default redirectToCheckout;
 */

  import { useEffect } from 'react';
  import { loadStripe } from '@stripe/stripe-js';
  import { useRouter } from 'next/router';
  import Image from 'next/image';
  
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
  const HomePage = () => {
      const router = useRouter();
      const { success, canceled } = router.query;
  
      useEffect(() => {
          if (success !== undefined || canceled !== undefined) {
              if (success) {
                  console.log(
                      'Order placed! You will receive an email confirmation.'
                  );
              }
  
              if (canceled) {
                  console.log(
                      'Order canceled -- continue to shop around and checkout when you’re ready.'
                  );
              }
          }
      }, [success, canceled]);
  
      return (
          <form action='/api/checkout_sessions' method='POST'>
              <section>
                  <div>
                    <Image
						className='image'
						src='https://d1wqzb5bdbcre6.cloudfront.net/7f16efbd5f77e46b9134096a8248c4c5c5d20a23468769ad2533a1980f1285b8/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878537a5a484d6c64475332315a5a476c6b5531684c66475a735833526c6333526656314e5261457035656d7858557a6468516b35535a7a684356444631636d387830305446543671637456'
						alt='Food Photography'
						width={150}
						height={150}
					    />
                      <div className='description'>
                          <h3 className='heading'>Food Photography</h3>
                          <h5 className='price'>$30</h5>
                      </div>
                  </div>
                  <button type='submit' role='link'>
                      Checkout
                  </button>
              </section>
              <style jsx>
                  {`
                      .description {
                          float: right;
                          margin-left: 10px;
                      }
                      .image {
                          float: left;
                      }
                      .heading {
                          font-size: 28px;
                          font-weight: 200;
                      }
                      .price {
                          font-size: 18px;
                          font-weight: bold;
                      }
                      section {
                          background: #ffffff;
                          display: flex;
                          flex-direction: column;
                          width: 450px;
                          height: 112px;
                          border-radius: 6px;
                          justify-content: space-between;
                      }
                      button {
                          height: 45px;
                          padding: 10px;
                          background: #042D42;
                          border-radius: 4px;
                          color: white;
                          border: 0;
                          font-size: 18px;
                          font-weight: 600;
                          cursor: pointer;
                          transition: all 0.2s ease;
                          box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                      }
                      button:hover {
                          opacity: 0.8;
                      }
                  `}
              </style>
          </form>
      );
  };
  
  export default HomePage;