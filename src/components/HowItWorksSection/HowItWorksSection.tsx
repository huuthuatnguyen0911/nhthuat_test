import { light_icon } from '@/assets'
import { workArray } from '@/dataset'
import { Card, CardContent } from '../ui/card'

export default function HowItWorksSection() {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-2'>
        <div className='flex items-center justify-center'>
          <img src={light_icon} alt='light_icon' />
        </div>
        <h2 className='text-[16px] font-semibold text-textColor leading-6'>How It Works?</h2>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {workArray.map((item, index) => (
          <Card
            key={index}
            className='max-w-[400px] md:max-w-[362px] lg:max-w-[252px] border border-solid border-backgroundColor-card rounded hover:bg-slate-600 cursor-pointer'
          >
            <CardContent className='p-4 space-y-6 leading-6'>
              <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center'>
                <img src={item.icon} alt='work_icon' />
              </div>
              <div className='space-y-2'>
                <h3 className='font-medium text-[16px] text-textColor'>{item.title}</h3>
                <p className='text-[13px] text-textColor-gray font-normal'>{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
