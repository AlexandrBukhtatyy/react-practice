import Header from '@/components/common/header';
import Filter from '@/components/common/filter';
import Hotels from '@/components/hotels';

type Props = {

};
const HotelsPage = (props: Props) => {
    return (
        <>
            <Header/>
            <Filter/>
            <Hotels/>
        </>
    );
};

export default HotelsPage;
