import CatCard from '../components/cards/cat/CatCard'
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'
const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-sky-300 to to-blue-300">
      <h1 className="text-red-400">Heading</h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  )
}

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  )
}

export default Home
