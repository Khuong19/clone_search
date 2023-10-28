import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 items-center justify-center'>
      <Image src='bootstrap-logo.svg'
        alt='logo'
        width={72}
        height={57}/>
      <p className=''>Tìm kiếm trong 303,231 văn bản luật và 70,000 án lệ</p>
    </main>
  )
}
