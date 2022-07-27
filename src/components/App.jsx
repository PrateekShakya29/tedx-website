import React from 'react';

// Components
import { SEO, Layout } from '.';

const App = ({ children }) => {
  return (
    <>
      <SEO />


      <Layout>{children}</Layout>
    </>
  );
};

export default App;
