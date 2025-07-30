import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <div className="container">
        <Component {...pageProps} currentUser={currentUser}></Component>
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const response = await client.get("/api/users/currentuser").catch((err) => {
    console.log(err.response.data.errors);
  });

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      response?.data.currentUser
    );
  }

  if (response) {
    return { pageProps, ...response.data };
  } else {
    return { currentUser: null };
  }
};

export default AppComponent;
