import React, { useState } from 'react';
import { Affix } from 'antd';
import { Footer } from 'antd-mobile';

function StickyFooter() {
  const [bottom] = useState(10);
  return (
    <Affix offsetBottom={bottom}>
      <Footer label="PUTER" />
    </Affix>
  );
}

export default StickyFooter;
