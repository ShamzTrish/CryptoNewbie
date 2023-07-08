import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { FC } from 'react';

interface PriceChangeProps {
    priceChange1h: number;
}

const PriceChange: FC<PriceChangeProps> = ({ priceChange1h }) => {

    return <div className={cn('flex', {
        'text-red-500': priceChange1h < 0,
        'text-green-400': priceChange1h > 0
    })}>

        {priceChange1h < 0 ? <TrendingDown className='h-4 w-4' /> : <TrendingUp className='h-4 w-4' />}

        <span className='pl-4'>
            {priceChange1h.toFixed(2)}%
        </span>
    </div>;
};



export default PriceChange;
