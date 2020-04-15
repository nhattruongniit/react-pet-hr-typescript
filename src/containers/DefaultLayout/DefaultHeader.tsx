import React, { memo } from 'react';

const DefaultHeader = memo(() => {
  console.log('====header re-render===');
  return <div>this is default header</div>;
});

export default DefaultHeader;
