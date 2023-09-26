import '../../App.css'
import { Banner, BannerFooter, ImonialsImage, ItSecurityImage, MobileDataImage, New1Image, New2Image, New3Image, SolutionImage, TypingImage } from '../../assets/images'
import { CategoryIcon, EditIcon, WalletIcon } from '../../assets/svg'
import { CardItem, Container, DifferentItem, FooterComponent, NewsItem, SolutionItem } from '../../components'
import { Header } from '../../components/header'

export function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="w-full relative">
        <img src={Banner} alt="banner-imge" className="w-full h-full image" style={{ minHeight: 400, objectFit: "cover" }} />
        <div className="h-full w-full absolute inset-0 flex col justify-center" style={{ backgroundColor: 'rgba(2, 2, 2, 0.59)' }}>
          <div className="flex col box">
            <h1 className="text-white">The best IT servicefor your security</h1>
            <p className="content text-white mt-4">Hub IT allows your business and technology computers to store and manipulate big data in the digital world.</p>
            <div className="flex row items-center mt-4">
              <button>DISCOVER HUB</button>
              <div style={{ width: 20 }}></div>
              <p className="under-line text-white text-14">Hotline: (733)865-5485</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="grid mt-block">
          {[1, 2, 3].map((item) => <CardItem key={`${item}`} />)}
        </div>
      </Container>

      <Container>
        <div className="grid-2 mt-block">
          <img src={SolutionImage} style={{ maxWidth: '100%' }} alt="solution-img" />
          <div className="text-left" style={{ maxWidth: 435 }}>
            <p className="uppercase">Company’s vision</p>
            <h1 className="text-left ml-0 mt-2">IT solutions foryour business.</h1>
            <p className="content text-left mt-7">Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.</p>
            <button className='ml-0 mt-6'>Read More</button>
          </div>
        </div>
      </Container>

      <Container className="">
        <h1 className="mt-block">IT solutions foryour business.</h1>
        <p className="content mt-6">Hub IT allows your business and technology computers to store, transmit, analyze,and manipulate big data in the digital world.</p>
        <div className="grid mt-77 w-full">
          {[ItSecurityImage, MobileDataImage, MobileDataImage].map((item, idx) => <SolutionItem imagePath={item} key={`${item}${idx}`} />)}
        </div>
      </Container>

      <div className="mt-block">
        <img src={TypingImage} alt="typing-image" className="w-full" style={{ objectFit: 'cover', minHeight: 250 }} />
      </div>

      <Container>
        <h1 className="mt-block">Why our product are different</h1>
        <div className="grid mt-77 w-full">
          {[{ icon: CategoryIcon, title: 'Solve Problems Real Time' }, { icon: WalletIcon, title: 'Secured & Safe Payments' }, { icon: EditIcon, title: '24/7 Customers Support' }].map((item) => <DifferentItem {...item} key={`${item}`} />)}
        </div>
      </Container>

      <div className="mr-0 w-full flex pl-125 mt-block">
        <img src={ImonialsImage} alt="imonials-image" className="mr-0 w-full" />
      </div>

      <Container>
        <h1 className="mt-block">Latest News</h1>
        <div className="grid mt-77 w-full">
          {[{ image: New1Image, title: 'Business Mistakes to Avoid When Starting a Business' }, { image: New2Image, title: 'Utilize these nine resources to help you take the stress out of preparing your taxes' }, { image: New3Image, title: 'Investment Update, Successful people ask better questions' }].map((item) => <NewsItem {...item} key={`${item}`} />)}
        </div>
      </Container>

      <div className="w-full relative mt-block">
        <img src={BannerFooter} alt="banner-imge" className="w-full h-full image" style={{ minHeight: 400, objectFit: "cover" }} />
        <div className="h-full w-full absolute inset-0 flex col justify-center" style={{ backgroundColor: 'rgba(2, 2, 2, 0.59)' }}>
          <div className="flex col box">
            <h2 className="text-white">Ready to get started? Get your Finance out of the way</h2>
            <p className="content text-white mt-4">If you deliver enough value, making money becomes the easy part. Why should you be stressful? Let us make this easier for you.</p>
            <div className="flex row items-center mt-4">
              <button style={{borderRadius: 100}}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
