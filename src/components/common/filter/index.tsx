import Content from './content';

type Props = {
  children: React.ReactNode;
};

const Filter = (props: Props) => {
  return <Content {...props} />;
};

export default Filter;
