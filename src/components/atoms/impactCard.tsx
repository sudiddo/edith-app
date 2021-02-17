export interface ImpactCardProps {
  image: any;
  time: string;
  impacts: string[];
}

const ImpactCard = ({ image, impacts, time }: ImpactCardProps) => {
  return (
    <div className='p-4 z-10 bg-blue-dark border border-blue-dark rounded-md shadow-lg min-h-full'>
      <div className='grid grid-cols-3 '>
        <div className='flex col-span-2 min-h-full items-center'>
          <img src={image} className='rounded-sm object-contain self-center' />
        </div>
        <div className='col-span-1'>
          <div className='grid grid-row-2 gap-1 mt-2 ml-3'>
            <div className='col-auto font-sans text-white font-bold md:text-lg text-right text-xs'>
              {`${time}`}
            </div>
            <hr className='border-white' />

            <div className='inline-grid gap-2'>
              {impacts.map((victim, index) => {
                return (
                  <div
                    key={index}
                    className='font-sans text-right text-white text-xs md:text-base'
                  >
                    {victim}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
