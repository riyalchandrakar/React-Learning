const Child = ({ cName }) => {
  return (
    <div>
      <button onClick={() => cName('riyal')}>show</button>
    </div>
  );
};

export default Child;
