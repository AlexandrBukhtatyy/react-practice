import { useState } from 'react';
import Content from './content';

type Props = {
  children: React.ReactNode;
};

const SecondFilter = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  return <Content expanded={expanded} setExpanded={setExpanded} {...props} />;
};

export default SecondFilter;
