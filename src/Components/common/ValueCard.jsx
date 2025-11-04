const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <div className="text-5xl mb-4 flex justify-center">
          {Icon && <Icon />}
        </div>
        <h3 className="card-title justify-center text-xl">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;

