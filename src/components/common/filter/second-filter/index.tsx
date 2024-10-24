import Content from './content';

type Props = {
  children: React.ReactNode;
};

const SecondFilter = (props: Props) => {
  return <Content {...props} />;
};

export default SecondFilter;
