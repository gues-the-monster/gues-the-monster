

interface SpiderProps {
  position?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  delay?: string;
  speed?: number;
}

export default function Spider({ 
  position = "right-10", 
  size = "medium", 
  delay = "0s",
  speed = 6 
}: SpiderProps) {
  
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12", 
    large: "w-16 h-16",
    xlarge: "w-20 h-20"
  };

  const webSizes = {
    small: "w-px",
    medium: "w-1",
    large: "w-1.5", 
    xlarge: "w-2"
  };

  const animationStyle = {
    animationDelay: delay,
    animationDuration: `${speed}s`
  };

  return (
    <div className={`fixed top-0 ${position} ${size === 'small' ? 'w-16' : size === 'medium' ? 'w-20' : 'w-24'} h-screen pointer-events-none z-50`}>
      {/* Telaraña */}
      <div className={`absolute left-1 ${webSizes[size]} h-full transform -translate-x-1/2 overflow-hidden`}>
        {/* <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-white/60 to-transparent animate-webGrow"
          style={animationStyle}
        ></div> */}
      </div>
      
      {/* Araña */}
      <img 
        src="/images/spider.png" 
        alt="Araña decorativa" 
        className={`absolute left-1/2 ${sizeClasses[size]} transform -translate-x-1/2 animate-spiderMove filter drop-shadow-lg`}
        style={animationStyle}
      />
    </div>
  );
}