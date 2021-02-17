import First from 'assets/screenshots/1.png';
import Second from 'assets/screenshots/2.png';
import Third from 'assets/screenshots/3.png';
import Fourth from 'assets/screenshots/4.png';
import Fifth from 'assets/screenshots/5.png';
import Sixth from 'assets/screenshots/6.png';
import Seventh from 'assets/screenshots/7.png';
import Eighth from 'assets/screenshots/8.png';
import Ninth from 'assets/screenshots/9.png';
import Tenth from 'assets/screenshots/10.png';

const battleData = async () => {
  const data = [
    {
      id: 1,
      type: 'Defense',
      date: 'Tuesday, 9 February 2021',
      ally: '桃狼-Tang',
      victims: ['Frederickwong', 'mtc6d24'],
      battle: [
        {
          id: 1,
          image: First,
          time: '17:20:31',
          impact: ['528 Theutates Thunder', '1 Hero'],
        },
        {
          id: 2,
          image: Second,
          time: '20:04:24',
          impact: [
            '4000 Imperian',
            '7000 Equites Imperatoris',
            '260 Ram',
            '60 Fire Catapult',
          ],
        },
        {
          id: 3,
          image: Third,
          time: '20:04:25',
          impact: [
            '100 Imperian',
            '100 Equites Imperatoris',
            '50 Fire Catapult',
          ],
        },
        {
          id: 4,
          image: Fourth,
          time: '20:04:26',
          impact: [
            '100 Imperian',
            '100 Equites Imperatoris',
            '50 Fire Catapult',
          ],
        },
        {
          id: 5,
          image: Fifth,
          time: '20:04:31',
          impact: [
            '100 Imperian',
            '100 Equites Imperatoris',
            '50 Fire Catapult',
          ],
        },
        {
          id: 6,
          image: Sixth,
          time: '20:05:011',
          impact: [
            '100 Imperian',
            '100 Equites Imperatoris',
            '50 Fire Catapult',
          ],
        },
        {
          id: 7,
          image: Seventh,
          time: '20:05:40',
          impact: [
            '100 Imperian',
            '100 Equites Imperatoris',
            '50 Fire Catapult',
          ],
        },
      ],
    },
    {
      id: 2,
      type: 'Defense',
      date: 'Wednesday, 17 February 2021',
      ally: '桃狼-Tang',
      victims: ['chio'],
      battle: [
        {
          id: 1,
          image: Eighth,
          time: '15:27:03',
          impact: ['738 Equites Legati'],
        },
        {
          id: 2,
          image: Ninth,
          time: '16:52:31',
          impact: [
            '2978 Imperian',
            '1632 Equites Caesaris',
            '28 Fire Catapult',
            '1 Hero',
          ],
        },
      ],
    },
    {
      id: 3,
      type: 'Attack',
      date: 'Wednesday, 17 February 2021',
      ally: '桃狼-Tang',
      victims: ['chio'],
      battle: [
        {
          id: 1,
          image: Tenth,
          time: '21:35:00',
          impact: [
            '98 Legiuner',
            '3717 Praetorian',
            '32 Imperian',
            '128 Equites Legati',
            '10 Equites Imperatoris',
            '17 Equites Caesaris',
            '9 Fire Catapult',
          ],
        },
      ],
    },
  ];

  return data;
};

export default battleData;
