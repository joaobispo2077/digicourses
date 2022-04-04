import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next"

export default function App() {
  const {user} = useUser();
  return (
    <div>
     <h1> Hello User </h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
