import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { FC } from 'react';

interface PriceChangeProps {
    priceChange7d: number;
}

const PriceChange: FC<PriceChangeProps> = ({ priceChange7d }) => {

    return <div className={cn('flex', {
        'text-red-500': priceChange7d < 0,
        'text-green-400': priceChange7d > 0
    })}>

        {priceChange7d < 0 ? <TrendingDown className='h-4 w-4' /> : <TrendingUp className='h-4 w-4' />}

        <span className='pl-4'>
            {priceChange7d.toFixed(2)}%
        </span>
    </div>


};

export default PriceChange;
