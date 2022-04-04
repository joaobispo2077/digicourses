import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next"

export default function Home() {
  return (
    <div>
     <h1> Hello world </h1>

     <a href="/api/auth/login">Login</a>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = getSession(context.req, context.res);


  if(!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
};
