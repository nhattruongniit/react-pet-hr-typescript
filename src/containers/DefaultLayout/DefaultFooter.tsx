import React, { memo } from 'react';

const DefaultFooter = memo(() => {
  console.log('====footer re-render===');
  return <div>this is default footer</div>;
});

export default DefaultFooter;
