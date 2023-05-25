import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ModalProvider from "./Context/ModalContext";
import PlaygroundProvider from "./Context/PlaygroundContext";

import routes from "./Pages/Routes";
const Loader = () => {
  <>Loading Content....</>;
};

function App() {
  return (
    //till swe do not get data ....we will load loader using suspense
    <Suspense fallback={Loader()}>
      <ModalProvider>
        <PlaygroundProvider>
          <Routes>
            <>
              {routes.map((item,idx) => {
                return <Route path={item.path} element={item.component} />;
              })}
            </>
          </Routes>
        </PlaygroundProvider>
      </ModalProvider>
    </Suspense>
  );
}

export default App;
