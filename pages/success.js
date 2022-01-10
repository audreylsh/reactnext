const Success = () => {
    const {
        query: { session_id },
      } = useRouter();

    //perform GET request using useSWR hook from swr package. Can use axios/Fetch API

    const { data, error } = useSWR(
        () => `/api/checkout_sessions/${session_id}`,
        fetcher
      );

      useEffect(() => {
        if (data) {
          shootFireworks();
          clearCart();
        }
      }, [data]);
    
      return (
        <div><h1>Success!</h1></div>
      );


  }
  
  export default Success;