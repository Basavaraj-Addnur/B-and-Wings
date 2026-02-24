import React from 'react';

const ServicesMarquee: React.FC = () => {
  // Full list of services from your data
  const line1 = [
    { name: "Software Development", image: "/services/1.png" },
    { name: "Website Development", image: "/services/2.png" },
    { name: "IT Services", image: "/services/4.png" },
    { name: "UI/UX Design", image: "/services/3.png" },
    { name: "Website Maintenance", image: "/services/13.png" },
  ];

  const line2 = [
    { name: "Digital Marketing", image: "/services/6.png" },
    { name: "Influencer Marketing", image: "/services/10.png" },
    { name: "Social Media Management", image: "/services/14.png" },
    { name: "Performance Marketing", image: "/services/15.png" },
  ];

  const MarqueeLine = ({ items, direction }: { items: typeof line1, direction: 'left' | 'right' }) => (
    <div className="flex overflow-hidden select-none py-1 relative">
      <div className={`flex whitespace-nowrap gap-6 items-center ${
        direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
      }`}>
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden p-1.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100';
                }}
              />
            </div>
            <span className="text-sm md:text-lg font-bold text-black uppercase tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Section with Compact Padding */}
      <section className="w-full bg-gradient-to-br from-[#FACC15] via-[#FB923C] to-[#FACC15] py-12 overflow-hidden relative">
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 18v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zm0-18V0h-2v2h-2v2h2v2h2V2h2V0h-2zM4 18v-2H2v2H0v2h2v2h2v-2h2v-2H4zM4 2V0H2v2H0v2h2v2h2V2h2V0H4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="flex flex-col gap-6 relative z-10">
          {/* Row 1 */}
          <MarqueeLine items={line1} direction="left" />
          
          {/* Row 2 */}
          <MarqueeLine items={line2} direction="right" />
        </div>

        {/* Edge fade gradient effects */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#FACC15] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#FACC15] to-transparent z-20 pointer-events-none" />
      </section>
    </>
  );
};

export default ServicesMarquee;