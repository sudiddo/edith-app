import ModalImage from 'react-modal-image';

export interface ImpactCardProps {
  image: any;
  time: string;
  impacts: string[];
}

const ImpactCard = ({ image, impacts, time }: ImpactCardProps) => {
  return (
    <div className='p-4 bg-blue-dark border border-blue-dark rounded-md shadow-lg md:min-h-full md:flex'>
      <div className='md:grid md:grid-cols-3'>
        <div className='flex col-span-2 md:min-h-full items-center'>
          <div className='rounded-sm object-contain self-center'>
            <ModalImage small={image} large={image} />
          </div>
        </div>
        <div className='col-span-1 md:ml-4'>
          <div className='grid gap-1 mt-2'>
            <div className='col-auto font-sans text-white font-bold md:text-lg md:text-right text-xs'>
              {`${time}`}
            </div>
            <hr className='border-white' />

            <div className='inline-grid gap-2 md:grid-cols-1 grid-cols-2 mt-2'>
              {impacts.map((victim, index) => {
                return (
                  <div
                    key={index}
                    className='font-sans md:text-right text-white text-xs md:text-base'
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
