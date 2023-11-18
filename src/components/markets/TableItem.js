import WETHimg from '../../assets/coin/weth.png';

export default function TableItem() {
  return (
        <tr className="flex justify-between gap-y-7 text-[20px] px-6 py-7 text-[#F7ECE1] border-t">
          {/* <hr className="bg-[#F7ECE1]" /> */}
          <th className='text-left flex gap-x-3'>
            <img src={WETHimg} alt="WETH" />
            <p className='self-center'>WETH</p>
          </th>
          <th className='self-center'>$3.13M</th>
          <th className='self-center'>$14.1M</th>
          <th className='self-center'>3.46%</th>
          <th className='self-center'>$10.9M</th>
          <th className='self-center'>4.98%</th>
        </tr>
  );
}