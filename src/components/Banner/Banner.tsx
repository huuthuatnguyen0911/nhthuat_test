import { vertor_4 } from '@/assets'
import { tierArray } from '@/dataset'
import { ArrowRight } from 'lucide-react'
import '../../styles/index.css'

export default function Banner() {
  return (
    <div className='grid md:grid-cols-2 md:gap-[154px] gap-6 items-center md:pl-10 pb-[14.77px] mb-4 bg-gradient-to-r from-[#3EA2F400] to-[#423EF41A] border-b-[1px] border-b-[#313856]'>
      <div className='space-y-3 max-w-[441px]'>
        <h1 className='text-3xl md:text-2xl text-textColor font-bold'>
          Unlock Rewards with the Copin Referral Program
        </h1>
        <div className='text-textColor-gray text-[13px] leading-6'>
          <p className=''>Earn rebates and commissions by inviting friends.</p>
          <p className=''>Grow your network and benefit from our 6-tier reward system.</p>
        </div>
        <button className='flex items-center text-textColor-link text-[13px] hover:text-[#60A5FA] transition-colors gap-2'>
          View referral Ranking <ArrowRight className='h-4 w-4' />
        </button>
      </div>

      <div className='max-w-[378px] space-y-[10px]'>
        <div className='relative sm:min-w-60 md:max-w-[362.13px] min-h-[180.29px] backgroud_right'>
          <div className='absolute top-[94.59px] right-[52.16px] inline-block text-[9.81px] text-textColor leading-[13.08px] py-[6.2px] px-[4.83px] rounded-[3.1px] border-gradient'>
            <p className=''>F0 (Rebate): 5%</p>
            <p className=''>F1 (Commission): 35%</p>
            <p className=''>F2 (Commission): 10%</p>
          </div>
          <div className='absolute top-[-20px] right-[40px] z-[-1] respon_img'>
            <img src={vertor_4} alt='vector_4' />
          </div>
        </div>
        <div className='flex gap-[26.97px] items-center'>
          {tierArray.map((tier, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='rounded-full flex items-center justify-center'>
                <img src={tier.icon} alt='tier_icon' />
              </div>
              <p className='text-xs leading-[13.08px] text-textColor tier_style'>{tier.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
