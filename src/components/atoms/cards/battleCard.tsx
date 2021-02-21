import Link from 'next/link';

export interface BattleCardProps {
  battle: {
    id: number;
    type: string;
    date: string;
    victims: string[];
    ally: string;
  };
}

const BattleCard = ({
  battle: { ally, date, id, type, victims },
}: BattleCardProps) => {
  return (
    <Link
      href={{
        pathname: '/battle-impact/[id]',
        query: { id },
      }}
    >
      <div
        key={id}
        className='flex flex-col p-4 bg-blue-dark h-48 rounded-lg text-gold shadow-md cursor-pointer hover:opacity-70'
      >
        <div className='flex flex-row justify-between mb-3 items-center'>
          <div className='md:text-lg text-md font-sans font-bold'>{date}</div>
          <div className='p-2 rounded-lg border-white border font-bold text-white text-sm'>
            {type}
          </div>
        </div>
        <hr className='border-white' />
        <div className='flex flex-row justify-between h-full'>
          <div className='md:text-4xl text-3xl font-extrabold self-center'>{`${ally}`}</div>
          <div className='flex flex-col font-bold justify-center text-right'>
            {victims.map((victim, index) => {
              return (
                <div key={index} className='md:text-lg text-md'>
                  {victim}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BattleCard;
