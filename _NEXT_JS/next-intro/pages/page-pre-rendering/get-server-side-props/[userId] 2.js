const UserprofilePage = (props) => {
  return <div>{props.id}</div>;
};

const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  console.log(req); //https://nodejs.org/api/http.html#http_class_http_incomingmessage
  console.log(res); //https://nodejs.org/api/http.html#http_class_http_serverresponse

  const userId = params.userId;

  //   if (!data) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    //this dont use a revalidate becouse this ocours on every serverSide render  request
    props: {
      id: `user-id-${userId}`,
    },

    // tipial case when you do not have data to show
    notFound: false, //boolean default is false

    // redirect - if you need to redirect the user to other page
    // redirect: {
    //   destination : "/noData"
    // }
  };
};

export default UserprofilePage;
export { getServerSideProps };
