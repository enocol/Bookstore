import { useSelector } from 'react-redux';

const Catergories = () => {
  const { status } = useSelector((store) => store.categories);

  return (
    <div>
      <h1>{status}</h1>;
    </div>
  );
};

export default Catergories;
