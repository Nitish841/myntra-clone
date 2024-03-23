import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const Kids = () => {
  const items = useSelector((store) => store.items);
  const kidItems = items.filter((item) => item.item_name.includes('Kids'));

  return (
    <main>
      <div className="items-container">
        {kidItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Kids;
