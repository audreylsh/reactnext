import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// withPageAuthRequired will pass the user as a prop
export default function Dashboard({ user }) {
  return <div>Hi there {user.name} You have no active courses at the moment.</div>;

  
}

export const getServerSideProps = withPageAuthRequired();