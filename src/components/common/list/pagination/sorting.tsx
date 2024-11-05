import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type Props = {
  titles: string[];
  type?: any;
  size?: any;
};

const ListSorting = (props: Props) => {
  const { titles, type = 'single', size = '' } = props;

  return (
    <div className="flex content-center">
      <ToggleGroup type={type} size={size} variant="outline">
        {titles.map((title) => (
          <ToggleGroupItem value={title} key={title}>
            {title}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ListSorting;
