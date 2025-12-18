import { useNavigate } from 'react-router-dom';
import clsx from "clsx";

interface EpidemicCardProps {
  id: string;
  image: string;
  koreanName: string;
  englishName: string;
  className?: string;
}

export default function EpidemicCard({ id, image, koreanName, englishName, className = "" }: EpidemicCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/epidemic/${id}`);
  };

  return (
    <div className={clsx("tw-group tw-002cbaa62e", className)}>
      <div 
        onClick={handleClick}
        className="tw-b19367ede3"
      >
        <img 
          src={image} 
          alt={koreanName}
          className="tw-6c9d07c78f"
        />
        
        {/* Gradient Overlay */}
        <div className="tw-59d774ad9b" />
        
        {/* Text Content */}
        <div className="tw-53db0936f0">
          <h3 className="tw-bb067ed493">
            {koreanName}
          </h3>
          <p className="tw-69fdb979b5">
            {englishName}
          </p>
        </div>
      </div>
    </div>
  );
}
