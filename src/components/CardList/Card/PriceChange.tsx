import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { FC } from 'react';

interface PriceChangeProps {
    priceChange: number;
}

const PriceChange: FC<PriceChangeProps> = ({ priceChange }) => {

    return <div className={cn('flex', {
        'dark:text-red-500 text-red-700': priceChange < 0,
        'dark:text-green-400 text-green-700': priceChange > 0
    })}>

        {priceChange < 0 ? <TrendingDown className='h-4 w-4' /> : <TrendingUp className='h-4 w-4' />}

        <span className='pl-4'>
            {priceChange.toFixed(2)}%
        </span>
    </div>;

};

export default PriceChange;
