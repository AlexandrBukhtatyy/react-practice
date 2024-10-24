type Props = {
  children: React.ReactNode;
};

const SecondFilterContent = (props: Props) => {
  const { children } = props;
  return (
    <div className="my-2 border-solid border border-slate-200">
      <div className="container mx-auto flex p-1.5">{children}</div>
    </div>
  );
};

export default SecondFilterContent;
