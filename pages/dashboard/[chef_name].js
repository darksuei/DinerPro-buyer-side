import { useRouter } from 'next/router.js'
import { GetServerSideProps } from 'next'
import AuthPage_Layout_wrap from '../../components/AuthLayout/authpage_wrap.js'
import Section1 from '@/components/chef_components/section1.js'
import Section2 from '@/components/chef_components/section2.js'
import Section3 from '@/components/chef_components/section3.js'
import Section4 from '@/components/chef_components/section4.js'
import { GiSixEyes } from 'react-icons/gi'

function ChefMain({ data }) {
    const Router = useRouter();
    const {pid} = Router.query

    // the query parameter returned above will be sent from the chef in the dashboard. and then used to query the database to collect and render all these data passed as props
    // everyy prop to be passed from the data gotten from the backend. 
   return (
    <AuthPage_Layout_wrap>
      
        <div className='flex gap-2 px-4'>
            <Section1
                name={data.name}
                location={data.location} 
                mini_category={data.mini_category} 
                picture_url={data.picture}
                about={data.about}
                experience={data.experience}/>
            <Section2
                skills={data.skills}
                contact_details={data.contact_details} />
        </div>
        <div className='flex gap-2 px-4'>
            <Section3
                portfolios={data.portfolios}/>
            <Section4/>
        </div>
    </AuthPage_Layout_wrap>
  )
}

export default ChefMain


// the data inside this function is the form i expect the data to be returned from the serve rto take, but given that server side is not my expertise, any modificucation is highly welcomed
export async function getServerSideProps(context) {
    const url = context.params.chef_name;
    // use the url to fetch the data for the chef here from the backend
    
    // the data should have the following properties
    const data = {
        name: "lynda tobi",
        // the location should come in the form [state, country]
        location: "Enugu, Nigeria",
        // this is the category where they will be placed in the frontend, may be an array, but we will work on that later
        mini_category: "traditional chef",
        // the route from which the picture will be served
        picture: "#",
        about: "Jane Okoye is a world class traditional cuisine chef who specializes in making our local dishes palatable and presentable to the world.",
        experience: "Lorem ipsum dolor sit amet consectetur. Purus mi malesuada velit sem mi eu ipsum pharetra. Pretium vel augue non pharet elit et nunc vel bibendum. Nisl diam dictum turpis vulputate feugiat sed. Sed faucibus nulla aliquam elementum feugiat diam ridiculus potenti libero. Integer erat odio bibendum praesent euismod turpis. Nisl augue cursus scelerisque condimentum vestibulum a at nibh.",
        skills: [ "planning", "organizing", 'time keeping', "serving"],//an array
        contact_details: {
            address: "No 7 nike road, Enugu state, Nigeria.",
            email: "Janeokoye22@gmail.com",
            facebook:    "Janeokoye Buffet",
            instagram:   "Janeokoye Buffet",
            twitter:  "@Janeokoyebuffet",
        },
        portfolios: [
            {
                image_url: "#",
                name_of_event: "Burial cermeony",
                // the pictures should be GiSixEyes, this shoud return the pictures
                pitures: ["", "", "", "", "",""],
                overview: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                recipe: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                processes: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                reviews: [
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    

                ]
           
            },
            {
                image_url: "#",
                name_of_event: "wedding occasion",
                // the pictures should be GiSixEyes, this shoud return the pictures
                pitures: ["", "", "", "", "",""],
                overview: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                recipe: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                processes: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                reviews: [
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    

                ]
            },
            {
                image_url: "#",
                name_of_event: "birthday celebration",
                // the pictures should be GiSixEyes, this shoud return the pictures
                pitures: ["", "", "", "", "",""],
                overview: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                recipe: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                processes: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                reviews: [
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    

                ]
            },
            {
                image_url: "#",
                name_of_event: "townhall meeting",
                // the pictures should be GiSixEyes, this shoud return the pictures
                pitures: ["", "", "", "", "",""],
                overview: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                recipe: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                processes: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                reviews: [
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    

                ]
            },
            {
                image_url: "#",
                name_of_event: "village celebration",
                // the pictures should be GiSixEyes, this shoud return the pictures
                pitures: ["", "", "", "", "",""],
                overview: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                recipe: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                processes: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus. Ac nunc consequat volutpat sed diam non. Dictum in turpis interdum quam tincidunt amet odio urna nisl. Convallis fusce nunc condimentum aenean potenti.",
                reviews: [
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    {
                        picture: "3",
                        comment: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla feugiat scelerisque nec adipiscing sem adipiscing. Ut eu proin arcu ornare id proin. Consectetur mauris nunc iaculis odio scelerisque. Adipiscing maecenas aliquam viverra leo posuere. Amet donec est adipiscing lectus quam. Risus ac nulla at cras. Sed sed bibendum quam ut ac id. Pharetra malesuada vitae morbi euismod vulputate neque lacus lacus.",
                        name: "linda lyn",
                        rating: 3
                    },
                    

                ]
            },
        ]
    }

    return{
        props: { data}
    }
}