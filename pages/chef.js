import Image from 'next/image.js'
import AuthPage_Layout_wrap from '../components/AuthLayout/authpage_wrap.js'
import Section1 from '@/components/chef_components/section1.js'
import Section2 from '@/components/chef_components/section2.js'
import Section3 from '@/components/chef_components/section3.js'
import Section4 from '@/components/chef_components/section4.js'

function Chef() {
  return (
    <AuthPage_Layout_wrap>
      
        <div className='flex gap-2 px-4'>
            <Section1
                name="chinata" 
                location={`Enugu, Nigeria`} 
                mini_category={`traditional chef`} 
                picture_url={'/#'}
                about={`Jane Okoye is a world class traditional cuisine chef who specializes in making our local dishes palatable and presentable to the world.`}
                experience={`Lorem ipsum dolor sit amet consectetur. Purus mi malesuada velit sem mi eu ipsum pharetra. Pretium vel augue non pharet elit et nunc vel bibendum. Nisl diam dictum turpis vulputate feugiat sed. Sed faucibus nulla aliquam elementum feugiat diam ridiculus potenti libero. Integer erat odio bibendum praesent euismod turpis. Nisl augue cursus scelerisque condimentum vestibulum a at nibh.`}/>
            <Section2
                skills={[ "planning", "organizing", 'time keeping', "serving"]} />
        </div>
        <div className='flex gap-2 px-4'>
            <Section3/>
            <Section4/>
        </div>
    </AuthPage_Layout_wrap>
  )
}

export default Chef

const data = `A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.
A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.
A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.`
