import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
};

const FilterContent = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex p-1.5">
        {children}
        <Button>
          <Search />
          Поиск
        </Button>
      </div>
    </div>
  );
};

export default FilterContent;
