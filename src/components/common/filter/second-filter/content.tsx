import { Slider } from '@/components/ui/slider';
import { Tag } from '@/components/ui/tag';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type Props = {
  children: React.ReactNode;
};

const SecondFilterContent = (props: Props) => {
  const { children } = props;
  return (
    <div className="my-2 border-solid border border-slate-200">
      <div className="container mx-auto flex p-1.5">
        <Tag>1 2 3 4 5</Tag>
        <Tag>
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="all">ALL</ToggleGroupItem>
            <ToggleGroupItem value="bb">BB</ToggleGroupItem>
            <ToggleGroupItem value="hb">HB</ToggleGroupItem>
            <ToggleGroupItem value="ro">RO</ToggleGroupItem>
          </ToggleGroup>
        </Tag>
        <Tag style={{ width: '200px' }}>
          $
          <Slider />
        </Tag>

        {children}
      </div>
    </div>
  );
};

export default SecondFilterContent;
