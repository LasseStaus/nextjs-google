import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'
const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo cum
        cumque voluptas exercitationem quisquam nostrum recusandae architecto
        sequi, laudantium odio sunt dolorem eaque similique fugit incidunt quia
        sapiente mollitia vitae? Cum eveniet repellendus perferendis corporis
        animi harum doloribus ab.
      </p>
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
