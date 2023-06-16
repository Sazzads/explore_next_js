import Image from 'next/image'
import image1 from "@/assets/flowers-276014_1280.jpg"
import image2 from "@/assets/tree-736885_1280.jpg"
import SingleCategory from '@/Components/HomePage/SingleCategory'

export default function HomePage() {
  return (
    <main>
      <h1>Home </h1>
      <SingleCategory></SingleCategory>
      {/* <Image width={600} height={381.5} placeholder='blur' src={image1} alt=''></Image> */}

      {/* <Image width={600} height={381.5} src="https://raw.githubusercontent.com/saifulislamsojib/try-nextjs/main/public/tree-736885_1280.jpg" alt=''></Image> */}

    </main>
  )
}
