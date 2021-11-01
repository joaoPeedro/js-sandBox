import React, {Suspense} from "react";
import {useState} from "react";

const LazyStart = () => {
  let Lazy = null;
  let [componentLazy, setComponentLazy] = useState();

  const handlerClick = async () => {
    console.log(componentLazy);
    Lazy = React.lazy(() => import("./Lazy"));
    setComponentLazy(<Lazy />);
    console.log(componentLazy);
  };

  const Test = (props) => {
    return props.componentLazy;
  };

  console.log(Lazy);

  return (
    <div>
      <p>test</p>
      <p onClick={() => handlerClick()}>test</p>
      <Suspense
        fallback={
          <div>
            Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...
          </div>
        }
      >
        {componentLazy}
      </Suspense>
    </div>
  );
};

export default LazyStart;
