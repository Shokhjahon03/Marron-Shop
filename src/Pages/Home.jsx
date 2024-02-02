import React from 'react'
import oneimg from '../assets/oneimg.png'
import twoimg from '../assets/twoimg.png'
import korsatgich from '../assets/korsatgich.png'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import shisha from '../assets/shisha.png'
import woman from '../assets/woman.png'
const Home = () => {
  return (
    <>
     <header>

        <div className="hero w-full h-dvh">
            <div className="container flex justify-center">
                <div className='flex w-[1030px] justify-between pt-[131px]'>
                <div className='w-[330px] h-[]'>
                    <img className='w-full h-[422px] mb-[15px]' src={oneimg} alt="alt" />
                    <div className='flex justify-between w-full items-center'>
                        <p>Уход для лица</p>
                        <button><img src={korsatgich} alt="alt" /></button>
                    </div>
                </div>
                <div className=' flex flex-col items-center pt-[61px]'>
                    <p className='text-[#122947] text-[58px]'>MAROON</p>
                    <p className=' text-center mb-[40px] mt-[30px]'>Натуральная косметика <br /> для бережного ухода за кожей</p>
                    <Button variant="outlined">Подробнее</Button>
                </div>
                <div>
                <img className='w-full h-[422px] mb-[15px]' src={twoimg} alt="alt" />
                    <div className='flex justify-between w-full items-center'>
                        <p>Уход для лица</p>
                    <button><img src={korsatgich} alt="alt" /></button>
                    </div>
                </div>    
                </div>   
            </div>
        </div>
    </header> 
    <div className='w-full mb-[177px] pt-[140px] relative '>
        <div className='w-[1310px] absolute top-[140px] left-[198px] flex items-center justify-between'>
            <div className='w-[214px] h-[200px]'>
                    <p className='text-[32px] leading-[41.6px] text-[#122947] mb-[30px]'>Бестселлеры</p>
                    <p className='text-[18px] text-[#122947] leading-[26.1px] mb-[40px]'>Легендарные продукты, завоевавшие любовь наших клиентов</p>
                    <Button sx={{width:'155px',height:'41px',border:'1px solid #B3BAC1',borderRadius:'2px',color:'black'}} variant="outlined">Смотреть все</Button>
            </div>
          <div className='flex gap-[30px] ml-[200px]'>
          <div className='cards w-[230px] h-[312px] pb-[25px] flex items-end justify-center'>
                <div className='flex flex-col justify-between items-center'>
                    <p className='mb-[10px] text-[16px] leading-[23.2px]'>High</p>
                    <p className='mb-[20px] text-[13px] leading-[18.85px] text-[#9A9DA0]'>крем для лица</p>
                    <NavLink className='underline text-[13px] leading-[18.85px] text-[#122947]'>Подробнее</NavLink>
                </div>
                
            </div>
            <div className='cards w-[230px] h-[312px] pb-[25px] flex items-end justify-center'>
                <div className='flex flex-col justify-between items-center'>
                    <p className='mb-[10px] text-[16px] leading-[23.2px]'>High</p>
                    <p className='mb-[20px] text-[13px] leading-[18.85px] text-[#9A9DA0]'>крем для лица</p>
                    <NavLink className='underline text-[13px] leading-[18.85px] text-[#122947]'>Подробнее</NavLink>
                </div>
                
            </div>
            <div className='cards w-[230px] h-[312px] pb-[25px] flex items-end justify-center'>
                <div className='flex flex-col justify-between items-center'>
                    <p className='mb-[10px] text-[16px] leading-[23.2px]'>High</p>
                    <p className='mb-[20px] text-[13px] leading-[18.85px] text-[#9A9DA0]'>крем для лица</p>
                    <NavLink className='underline text-[13px] leading-[18.85px] text-[#122947]'>Подробнее</NavLink>
                </div>
                
            </div>
            <div className='cards w-[230px] h-[312px] pb-[25px] flex items-end justify-center'>
                <div className='flex flex-col justify-between items-center'>
                    <p className='mb-[10px] text-[16px] leading-[23.2px]'>High</p>
                    <p className='mb-[20px] text-[13px] leading-[18.85px] text-[#9A9DA0]'>крем для лица</p>
                    <NavLink className='underline text-[13px] leading-[18.85px] text-[#122947]'>Подробнее</NavLink>
                </div>
                
            </div>
          </div>
        </div>
    </div>
    <div className='flower w-full h-[400px] mt-[490px] pt-[81px]'> 
        <div className="container">
            <div className='w-full flex justify-end items-center pr-[150px]'>
                <div>
                    <p className='text-[32px] leading-[40px] text-[#122947] mb-[30px] font-semibold'>Встречайте весну <br /> вместе с нами</p>
                    <p className='text-[18px] leading-[26.1px] text-[#122947] mb-[40px] font-normal'>Попробуйте новую коллекцию <br /> ухаживающих средств для лица <br /> с SPF защитой</p>
                    <Button sx={{width:'155px',height:'41px',border:'1px solid #B3BAC1',borderRadius:'2px',color:'#122947',fontWeight:'500' , fontSize:'16px'}} variant="outlined">Подробнее</Button>
                </div>
            </div>
        </div>
    </div>
    <div className='container flex justify-center items-center mt-[140px]'>
        <div className='w-[1170px] h-[583px] relative'>
            <div className='w-[670px] h-full bg-[#F4F1ED] pl-[100px] pt-[100px]'>
                <div>
                    <p className=' font-semibold text-[32px] leading-[41.6px] text-[#122947] mb-[40px]'>Индивидуальный уход</p>
                    <p className='w-[329px] mb-[15px] text-[18px] font-normal leading-[26.1px] text-[#122947]'>Не всегда очевидно, какие элементы и минералы необходимы коже,         а многочисленные эксперименты     с разными средствами только ухудшают ее качество. </p>
                    <p className='w-[329px] text-[18px] font-normal leading-[26.1px] text-[#122947] mb-[45px]'>Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы. </p>
                    <Button sx={{width:'300px',height:'41px',border:'1px solid #B3BAC1',borderRadius:'2px',color:'#122947',fontWeight:'500' , fontSize:'16px'}} variant="outlined"><p className='text-[16px]'>Заполнить анкету</p></Button>
                </div>
                <div className='w-[670px] h-[451px] absolute top-[66px] left-[500px]'>
                        <img src={shisha} alt="alt" />
                </div>
            </div>
        </div>
    </div>
    <div id='mi' className='w-full h-[433px] mt-[140px] mb-[140px]'>
        <div className="container justify-center">
            <div className='w-full flex flex-col items-center pt-[120px]'>
                <p className=' text-center w-[761px] text-[40px] leading-[40px] font-medium text-[#122947] mb-[50px]'>“Мы стремимся сделать уход за кожей доступным
и приятным ритуалом для всех, кто хочет
заботиться о себе и своем теле”  </p>
<Button sx={{width:'300px',height:'41px',border:'1px solid #B3BAC1',borderRadius:'2px',color:'#122947',fontWeight:'500' , fontSize:'16px'}} variant="outlined"><p className='text-[16px]'>Наша история</p></Button>
            </div>
        </div>
    </div>

        <div className="container justify-center mb-[140px]">
            <div className='w-[1151px] h-[466px]'>
                <div className='w-[700px] h-full flex flex-wrap justify-center'>
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                    <img className='w-[233px] h-[233px]' src={woman} alt="alt" />
                </div>
            </div>
        </div>





    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" className='w-[600px] h-[600px] border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Home
