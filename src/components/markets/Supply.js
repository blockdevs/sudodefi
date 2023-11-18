import USDCimg from '../../assets/coin/usdc.png';
import USDTimg from '../../assets/coin/usdt.png';
import DAIimg from '../../assets/coin/dai.png';

export default function Supply() {
  return (
    <div className="grid gap-y-10 text-left">
      <div className="text-[32px] text-[#F7ECE1] grid gap-4 px-6">
        <p>Total Supply</p>
        <b className="font-travel-bold">$79,963,106.60</b>
      </div>

      <div className="grid gap-y-7">
        <div className="grid gap-y-7">
          <hr className="bg-[#F7ECE1]" />
          <p className="px-6 text-[24px]">Top 3 Markets</p>
        </div>

        <div className="grid gap-y-7 text-[20px] text-[#F7ECE1]">
          <hr className="bg-[#f7ece14d]" />
          <div className="flex justify-between gap-x-3">
            <div className='flex gap-x-3 w-[110px]'>
              <img src={USDCimg} alt='USDC' className='w-9 h-9 self-center' />
              <p className="self-center">USDC</p>
            </div>
            
            <div className='w-[420px] self-center h-1 bg-[#f7ece11a]'>
              <div className='h-1 bg-[#5874D4]' style={{width: '17.6%'}}></div>
            </div>

            <div className='w-[72px]  self-center'>17.60%</div>
          </div>
        </div>
      </div>
    </div>
  );
}