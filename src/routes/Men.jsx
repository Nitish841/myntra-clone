import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const Men = () => {
  const items = useSelector((store) => store.items);
  const menItems = items.filter((item) => item.item_name.includes('Men'));

  return (
    <main>
      <div className="items-container">
        {menItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Men;
