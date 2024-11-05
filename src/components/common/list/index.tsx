import Pagination from './pagination';

type Props = {
  count: number;
  countName: string;
  titles: string[];
  children: React.ReactNode | React.ReactNode[];
};

const List = (props: Props) => {
  const { count, countName, titles, children } = props;
  return (
    <div className="container mx-auto my-8">
      <h1 className="font-semibold">
        Результаты поиска - найдено {count} {countName}
      </h1>
      <Pagination titles={titles} />
      {children}
    </div>
  );
};

export default List;
