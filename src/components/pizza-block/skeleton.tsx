import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={315}
    height={455}
    viewBox="0 0 315 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="275" rx="8" ry="8" width="280" height="19" />
    <rect x="0" y="313" rx="8" ry="8" width="280" height="59" />
    <rect x="-1" y="394" rx="8" ry="8" width="88" height="24" />
    <rect x="127" y="390" rx="8" ry="8" width="152" height="30" />
  </ContentLoader>
);

export default MyLoader;
