import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const Women = () => {
  const items = useSelector((store) => store.items);
  const womenItems = items.filter((item) => item.item_name.includes('Women'));

  return (
    <main>
      <div className="items-container">
        {womenItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Women;
